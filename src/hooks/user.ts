import { addDoc, collection, onSnapshot, query } from "firebase/firestore";
import { dbService } from "../service/firebase";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider";

export const useAddUser = async (email: string | null) => {
  const coll = collection(dbService, "user");

  await addDoc(coll, {
    email: email,
    image: null,
    nickname: null,
    address: [],
    likeProducts: [],
    likePosts: [],
    comments: [],
    posts: [],
    cart: []
  });
};

export const useUserData = () => {
  const authInfo = useContext(AuthContext);
  const [userData, setUserData] = useState<any>([]);

  useEffect(() => {
    const q = query(collection(dbService, "user"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const arr = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        };
      });

      setUserData(arr.find((user: any) => user.email === authInfo?.email));
    });

    return () => {
      unsubscribe();
    };
  }, [authInfo]);

  return { userData };
};
