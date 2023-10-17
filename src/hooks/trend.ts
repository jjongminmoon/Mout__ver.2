import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { dbService } from "../service/firebase";

export default function useTrend() {
  const [trendList, setTrendList] = useState<any>([]);

  useEffect(() => {
    const q = query(collection(dbService, "trend"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const arr = querySnapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        };
      });

      setTrendList(arr);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return { trendList };
}
