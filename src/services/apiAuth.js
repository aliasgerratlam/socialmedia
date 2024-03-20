import supabase from "./supabase";

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

export const Logout = async () => {
    const { error } = await supabase.auth.signOut();
    if(error) throw new Error(error.message);
}

export const signup = async ({email, password, firstname, lastname}) => {
    console.log('email', email, password)

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