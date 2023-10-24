import { useNavigate } from "react-router-dom";
import { useUserData } from "./user";
import { useEffect } from "react";

export default function loginStatus() {
  const { userData } = useUserData();
  const navigate = useNavigate();

  useEffect(() => {
    if (userData === undefined) {
      navigate("/login");
    }
  }, [userData]);

  return;
}
