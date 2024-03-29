import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../services/apiAuth";

export const useUser = () => {
    const {isPending, data: user} = useQuery({
        queryKey: ["user"],
        queryFn: getCurrentUser,
        // initialData: getCurrentUser, 
    });

    return {user, isPending, isAuthenticated: user?.role === "authenticated"};
}