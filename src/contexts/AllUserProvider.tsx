import { collection, onSnapshot, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { dbService } from "../service/firebase";

export const AllUserContext = React.createContext<any | null>(null);

export const AllUserProvider = ({ children }: { children: React.ReactNode }) => {
  const [allUser, setAllUser] = useState<any>([]);

  useEffect(() => {
    const q = query(collection(dbService, "user"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const arr = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        };
      });

      setAllUser(arr);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return <AllUserContext.Provider value={allUser}>{children}</AllUserContext.Provider>;
};
