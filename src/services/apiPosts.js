import supabase, { supabaseUrl } from "./supabase"

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
    if(!images) return insertData;
    
    const filename = `tweet-${user_id}-${new Date().getTime()}`;
    const {error: storageError} = await supabase.storage.from('tweet_image').upload(filename, images);
    
    if(storageError) throw new Error(storageError.message);
    console.log('insertData', insertData[0].id)
    
    const { data, error } = await supabase.from('tweets').update({ images: `${supabaseUrl}/storage/v1/object/public/tweet_image/${filename}` }).eq('id', insertData[0].id).select();
    console.log('first', `${supabaseUrl}/storage/v1/object/public/tweet_image/${filename}`, data, insertData.user_id)
    if(error) throw new Error(error.message);
    
    return insertData;
};