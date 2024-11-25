import supabase, {supabaseUrl} from "./supabase";

export const Login = async (email, password) => {
  let { data, error } = await supabase.auth.signInWithPassword(email, password);

  if(error) throw new Error(error.message);
  return data;
}

export const getCurrentUser = async () => {
  const { data: session } = await supabase.auth.getSession();
  if(!session.session) return null;

  const { data, error } = await supabase.auth.getUser();
  if(error) throw new Error(error.message);

  return data?.user;
}

export const updateUser = async ({firstname, lastname, dob, bio, gender, profession, avatar}) => {
  let updateUser;
  if(firstname || lastname || dob || bio || gender || profession || avatar) updateUser = {data: {firstname, lastname, dob, bio, gender, profession, avatar}}

  const { data, error } = await supabase.auth.updateUser(updateUser);
  const { data:profileData, error:profileError } = await supabase.from('profiles').update({ gender: updateUser.data.gender, dob: updateUser.data.dob, profession: updateUser.data.profession, bio: updateUser.data.bio, avatar: updateUser.data.avatar }).eq('id', data.user.id).select();
  
  if(error || profileError) throw new Error(error.message || profileError.message);
  if(!avatar || profileData[0].avatar === avatar) return profileData;

  // if (profileData[0].avatar === avatar) {
  //   console.log("Avatar hasn't changed, skipping upload");
  //   return profileData;
  // }
  
  const filename = `avatar-${data.user.id}-${new Date().getTime()}`;
  const {error: storageError} = await supabase.storage.from('avatars').upload(filename, avatar);
  
  if(storageError) throw new Error(storageError.message);
  
  const { data: udaptedUser, error: error2 } = await supabase.auth.updateUser({data: 
    {avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${filename}`}
  });
  
  const { data: finalUpdate, error: finalError } = await supabase.from('profiles').update({ avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${filename}`}).eq('id', data.user.id).select();
  if(error2 || finalError) throw new Error(error2.message || finalError.message);
  
  return udaptedUser;
}

export const Logout = async () => {
  const { error } = await supabase.auth.signOut();
  if(error) throw new Error(error.message);
}

export const signup = async ({email, password, firstname, lastname, username}) => {
  const { data, error } = await supabase.auth.signUp(
    {
      email,
      password,
      options: {
        data: {
          username,
          firstname,
          lastname,
        }
      }
    }
  )
      
  if(error) throw new Error(error.message);
  return data?.user;
}