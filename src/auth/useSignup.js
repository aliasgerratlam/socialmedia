import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../services/apiAuth";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
    const navigate = useNavigate();

    const {mutate: signup, isPending} = useMutation({
        mutationFn: (user) => signupApi({email: user.email, password: user.password, firstname: user.firstname, lastname: user.lastname}),
        onSuccess: () => {
            navigate("/", { replace: true });
        }
    });

    return {signup, isPending};
}