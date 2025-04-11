import { useEffect, useState } from "react";
import { collection, onSnapshot, addDoc } from "firebase/firestore";
import { db } from "../_utils/firebase";
import { useUserAuth } from "../_utils/auth-context";

export function useItems() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!user) return;

    const itemsRef = collection(db, "users", user.uid, "items");

    const unsubscribe = onSnapshot(itemsRef, (snapshot) => {
      const list = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setItems(list);
    });

    return () => unsubscribe();
  }, [user]);

  const handleAddItem = async (newItem) => {
    const itemsRef = collection(db, "users", user.uid, "items");
    await addDoc(itemsRef, newItem);
  };

  return { items, handleAddItem };
}
