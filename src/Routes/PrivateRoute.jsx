import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const isLogin = localStorage.getItem("token");
  return <>{isLogin ? <Outlet /> : <Navigate to="/unauthorized" />}</>;
};

export default PrivateRoutes;
