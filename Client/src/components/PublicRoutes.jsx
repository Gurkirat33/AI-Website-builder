import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { setUser } from "../redux/slices/user.slice";
import Loading from "./Loading";

const PublicRoutes = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const location = useLocation();
  const notAllowedPaths = ["/register", "/login"];
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("/api/v1/user/get-user");
        dispatch(setUser(res.data?.data));
      } catch (error) {
        dispatch(setUser(null));
      }
    };
    fetchUser();
  }, [dispatch, location.pathname]);
  if (user === undefined) {
    return <Loading />;
  }
  if (user && notAllowedPaths.includes(location.pathname)) {
    return <Navigate to="/dashboard" />;
  }
  return <Outlet />;
};

export default PublicRoutes;
