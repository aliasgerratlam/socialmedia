import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser as updateUserApi } from "../services/apiAuth";

export const useUpdateUser = () => {
    const queryClient = useQueryClient();

    const {mutate: updateUser, isPending} = useMutation({
        mutationFn: updateUserApi,
        onSuccess: () => {
            console.log("User updated successfully");
            queryClient.setQueryData(["user"], user);
        }
    })

    return {updateUser, isPending};
}