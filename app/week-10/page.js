"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useUserAuth } from "./_utils/auth-context"

export default function Page() {
  const { user, gitHubSignIn } = useUserAuth()
  const router = useRouter()

  useEffect(() => {
    if (user) {
      router.push("/week-10/shopping-list")
    }
  }, [user, router])

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      <button onClick={gitHubSignIn} className="bg-green-600 text-white px-4 py-2 rounded">
        Sign In with GitHub
      </button>
    </main>
  )
}
