import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getLikes } from "../../services/apiLikes";

export const useGetLike = () => {
    const queryClient = useQueryClient();
    
    const { mutate: likes, isPending } = useMutation({
        mutationFn: (tweet) => getLikes(tweet),
        onSuccess: tweet => {
            queryClient.setQueryData(["likes"], tweet);
        },
        onError: err => console.error(err.message)
    });

    return {likes, isPending};
};