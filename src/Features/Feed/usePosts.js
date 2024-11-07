import { useQuery } from "@tanstack/react-query";
import { getTweets } from "../../services/apiPosts";

export const useTweets = () => {
    const { isPending, data, error } = useQuery({
        queryKey: ["tweets"],
        queryFn: getTweets,
    });
    return { isPending, data, error };
}