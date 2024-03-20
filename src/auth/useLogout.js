import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Logout } from "../services/apiAuth"
import { useNavigate } from "react-router-dom"

export const useLogout = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const {mutate: logout, isPending} = useMutation({
        mutationFn: Logout,
        onSuccess: () => {
            queryClient.removeQueries();
            navigate("/auth/signin", { replace: true });
        }
    })

    return {logout, isPending}
}