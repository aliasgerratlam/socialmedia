import supabase from "./supabase";

export const addLikes = async(userId, tweetId) => {
    const { data, error } = await supabase.from('likes').insert([{ user_id: userId, tweet_id: tweetId },]).select();

    if(error) throw new Error(error.message);
    return data;
};

export const getLikes = async (tweetId = 0) => {
    const { data, error } = await supabase.from('likes').select('id', { count: 'exact' }).eq('tweet_id', tweetId);

    if (error) throw new Error(error.message);
    return data;
};

export const removeLikes = async (id) => {
    const { error } = await supabase.from('likes').delete().eq('id', id);

    if (error) throw new Error(error.message);
    return data;
};