"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../_utils/auth-context";
import { useItems } from "./use-items";
import AddItem from "./add-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";

export default function Page() {
  const { user, firebaseSignOut } = useUserAuth();
  const router = useRouter();
  const { items, handleAddItem } = useItems();

  useEffect(() => {
    if (user === null) {
      router.push("/week-10");
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      <p className="mb-4">
        Welcome, {user.displayName || user.email || "User"}
      </p>
      <button
        onClick={firebaseSignOut}
        className="bg-red-600 text-white px-4 py-2 rounded mb-6"
      >
        Sign Out
      </button>
      <AddItem onAddItem={handleAddItem} />
      <div className="grid md:grid-cols-2 gap-6">
        <ItemList items={items} />
        <MealIdeas />
      </div>
    </main>
  );
}
