import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getLikes } from "../../services/apiLikes";

export const useDisplayLike = () => {
    const {data: likesData, isPending, error} = useQuery({
        queryKey: ['likes'],
        queryFn: getLikes,
    })
    return { likesData, isPending, error }
};

export default useDisplayLike;