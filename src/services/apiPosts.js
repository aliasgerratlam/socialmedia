import supabase from "./supabase"

export const getTweets = async () => {
    const { data, error } = await supabase.from('tweets').select(`*, profiles(*)`);

    if(error) {
        throw new Error("Posts could not be fetched");
    }
    return data;
};

export const InsertTweets = async ({user_id, captions, images, modified_at}) => {
    const { data: insertData, error: insertError } = await supabase.from('tweets').insert([{ user_id, captions, images, modified_at },]).select();
    
    if(insertError) throw new Error(insertError.message);

    return insertData;
};