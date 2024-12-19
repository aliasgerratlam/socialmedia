import { useMutation, useQueryClient } from "@tanstack/react-query";
import { InsertTweets as TweetApi } from "../../services/apiPosts";
import { useNavigate } from "react-router-dom";

export const useCreateTweets = () => {
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const {mutate: postTweet, isPending} = useMutation({
        mutationFn: (tweets) => TweetApi({user_id: tweets.user_id, captions: tweets.captions, images: tweets.images, modified_at: tweets.modified_at}),
        onSuccess: (tweets) => {
            // queryClient.setQueryData(["tweets"], tweets.tweets);
            queryClient.invalidateQueries({queryKey: ["likes"]})
            navigate("/")
        },
        onError: (err) => console.error(err)
    })

    return {postTweet, isPending};
}