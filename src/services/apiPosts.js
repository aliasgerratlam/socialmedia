import supabase from "./supabase"

export const getTweets = async () => {
    const { data, error } = await supabase.from('tweets').select(`*, profiles(*)`);

    if(error) {
        console.error(error);
        throw new Error("Posts could not be fetched");
    }
    return data;
}