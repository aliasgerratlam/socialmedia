import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Login as loginApi} from "../services/apiAuth";

export const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {mutate: login, isPending} = useMutation({
      mutationFn: (user) => loginApi({email: user.email, password: user.password}),
      onSuccess: (user) => {
        queryClient.setQueryData(["user"], user.user);
        if(user.user.role === "authenticated") navigate("/", {replace: true});
      },
      onError: (err) => console.log(err)
  })

  return {login, isPending};
}