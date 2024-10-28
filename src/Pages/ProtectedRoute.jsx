import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../auth/useUser";
import Spinner from "../ui/Spinner";

function ProtectedRoute({ children }) {
  const { isPending, isAuthenticated } = useUser();
  const navigate = useNavigate();
  
  useEffect(function () {
    if (!isAuthenticated && !isPending) navigate("/");
  },[isAuthenticated, navigate, isPending]);
  
  if(isPending) return <Spinner />
  return isAuthenticated ? children : null;
}

export default ProtectedRoute;