import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { type RootState } from "../store";
import type { JSX } from "react";

export default function PrivateRoute({ children }: { children: JSX.Element }) {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  // Se não estiver logado, redireciona para /login
  return isAuthenticated ? children : <Navigate to="/login" replace />;
}
