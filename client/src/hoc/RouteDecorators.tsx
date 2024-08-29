import { useAppStore } from "@/store";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const RequireLoggedIn = () => {
  const { user } = useAppStore((state) => state);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  return <Outlet />;
};
export const RequireLoggedOut = () => {
  const { user } = useAppStore((state) => state);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [navigate, user]);

  return <Outlet />;
};
