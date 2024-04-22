import supabase from "./supabase"

export const getPosts = async () => {
    const { data, error } = await supabase.from('posts').select('*');

    if(error) {
        console.error(error);
        throw new Error("Posts could not be fetched");
    }
    return data;
}