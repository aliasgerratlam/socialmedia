import supabase from "./supabase";

export const addLike = async(userId, tweetId) => {
    const { data, error } = await supabase.from('likes').insert([{ user_id: userId, tweet_id: tweetId },]).select();

    if(error) throw new Error(error.message);
    return data;
};

export const getLikes = async (tweetId = 0) => {
    // const { data, error } = await supabase.from('likes').select('id', { count: 'exact' }).eq('tweet_id', tweetId);
    const { data, error } = await supabase.from('likes').select("*");

    if (error) throw new Error(error.message);
    return data;
};

export const removeLike = async ({id, userId, tweet_id}) => {
    console.log('id', id, userId, tweet_id)
    const { error } = await supabase.from('likes').delete().eq('id', id).eq('user_id', userId).eq('tweet_id', tweet_id).select();

    if (error) throw new Error(error.message);
};