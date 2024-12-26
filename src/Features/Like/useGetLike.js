import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addLike } from "../../services/apiLikes";

export const useGetLike = () => {
    const queryClient = useQueryClient();
    
    const { mutate: handleGetLike, isPending } = useMutation({
        mutationFn: ({userId, id}) => addLike(userId, id),
        onSuccess: () => {
            // queryClient.setQueryData(["likes"], likes.likes);
            queryClient.invalidateQueries({queryKey: ["likes"]})
        },
        onError: err => console.error(err.message)
    });

    return {handleGetLike, isPending};
};