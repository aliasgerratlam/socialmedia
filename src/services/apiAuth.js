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

  // if(firstname) updateUser = {data: {firstname}};
  // if(lastname) updateUser = {data: {lastname}};
  // if(dob) updateUser = {data: {dob}};
  // if(bio) updateUser = {data: {bio}};
  // if(gender) updateUser = {data: {gender}};
  // if(profession) updateUser = {data: {profession}};

  const { data, error } = await supabase.auth.updateUser(updateUser);
  if(error) throw new Error(error.message);
  if(!avatar) return data;

  const filename = `avatar-${data.user.id}-${new Date().getTime()}`;
  const {error: storageError} = await supabase.storage.from('avatars').upload(filename, avatar);
  console.log('avatar', avatar)

  if(storageError) throw new Error(storageError.message);

  const { data: udaptedUser, error: error2 } = await supabase.auth.updateUser({data: 
    {avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${filename}`}
  });

  if(error2) throw new Error(error2.message);
  return udaptedUser;
}

export const Logout = async () => {
  const { error } = await supabase.auth.signOut();
  if(error) throw new Error(error.message);
}

export const signup = async ({email, password, firstname, lastname}) => {
  const { data, error } = await supabase.auth.signUp(
    {
      email,
      password,
      options: {
        data: {
          firstname,
          lastname,
        }
      }
    }
  )
      
  if(error) throw new Error(error.message);
  return data?.user;
}