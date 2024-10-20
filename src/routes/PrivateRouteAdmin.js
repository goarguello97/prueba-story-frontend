import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { persistance } from "../features/UserSlice";

const PrivateRouteAdmin = ({ children }) => {
  const dispatch = useDispatch();
  const { loading, logged, user } = useSelector((state) => state.user);

  useEffect(() => {
    if (!logged && !loading) {
      dispatch(persistance());
    }
  }, []);

  if (loading)
    return (
      <div className="container">
        <h1>Cargando...</h1>
      </div>
    );

  return logged && user.role === "ADMIN" ? children : <Navigate to="/" />;
};

export default PrivateRouteAdmin;
