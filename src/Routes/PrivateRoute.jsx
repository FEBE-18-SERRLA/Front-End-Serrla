import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const isLogin = localStorage.getItem("user");
  return <>{isLogin ? <Outlet /> : <Navigate to="/unauthorized" />}</>;
};

export default PrivateRoutes;
