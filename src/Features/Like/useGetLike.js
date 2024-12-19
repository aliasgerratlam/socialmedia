import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addLikes } from "../../services/apiLikes";

export const useGetLike = () => {
    const queryClient = useQueryClient();
    
    const { mutate: handleGetLike, isPending } = useMutation({
        mutationFn: ({userId, id}) => addLikes(userId, id),
        onSuccess: likes => {
            // queryClient.setQueryData(["likes"], likes.likes);
            queryClient.invalidateQueries({queryKey: ["likes"]})
        },
        onError: err => console.error(err.message)
    });

    return {handleGetLike, isPending};
};