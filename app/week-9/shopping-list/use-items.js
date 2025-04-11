import { useEffect, useState } from "react"
import { collection, onSnapshot, query, where } from "firebase/firestore"
import { db } from "../_utils/firebase"
import { useUserAuth } from "../_utils/auth-context"

export function useItems() {
  const { user } = useUserAuth()
  const [items, setItems] = useState([])

  useEffect(() => {
    if (!user) return
    const q = query(collection(db, "items"), where("user", "==", user.uid))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const list = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setItems(list)
    })
    return () => unsubscribe()
  }, [user])

  return items
}
