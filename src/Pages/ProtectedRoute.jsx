import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../auth/useUser";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useUser();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (!isAuthenticated) navigate("/");
    },
    [isAuthenticated, navigate]
  );

  return isAuthenticated ? children : null;
}

export default ProtectedRoute;