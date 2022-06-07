import { Navigate, useLocation } from "react-router-dom";
import { useLogin } from "../../contexts/index-context";

export function RequiresAuth({ children }) {
  const { isLoggedIn } = useLogin();
  const location = useLocation();
  return <>{isLoggedIn ? children : <Navigate to="/signup" state={{ from: location }} replace />}</>;
}
