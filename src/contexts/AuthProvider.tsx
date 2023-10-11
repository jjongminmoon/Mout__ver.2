import React, { useEffect, useState } from "react";
import { auth } from "../service/firebase";
import { User } from "firebase/auth";

export const AuthContext = React.createContext<any | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const join = auth.onAuthStateChanged((fbUser) => {
      setUser(fbUser);
    });

    return join;
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};
