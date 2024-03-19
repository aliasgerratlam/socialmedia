import supabase from "./supabase";

export const Login = async (email, password) => {
    console.log('data', email, password)
    let { data, error } = await supabase.auth.signInWithPassword(email, password);

    if(error) throw new Error(error.message);

    return data;
}