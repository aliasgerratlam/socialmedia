import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../services/apiPosts";

export const usePosts = () => {
    const { isPending, data, error } = useQuery({
        queryKey: ["posts"],
        queryFn: getPosts,
    });
    return { isPending, data, error };
}