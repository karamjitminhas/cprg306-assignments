"use client"

import { useState } from "react"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../_utils/firebase"
import { useUserAuth } from "../_utils/auth-context"

export default function AddItem() {
  const [name, setName] = useState("")
  const { user } = useUserAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (name.trim() === "") return
    await addDoc(collection(db, "items"), {
      name: name.trim(),
      user: user.uid,
    })
    setName("")
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter an item"
        className="border border-gray-300 px-4 py-2 mr-2 rounded w-64"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add Item
      </button>
    </form>
  )
}
