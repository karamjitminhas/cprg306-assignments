import Link from "next/link"

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">CPRG 306 Assignments</h1>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <Link href="/week-1" className="text-blue-600 underline">
            Week 1
          </Link>
        </li>
        <li>
          <Link href="/week-2" className="text-blue-600 underline">
            Week 2
          </Link>
        </li>
        <li>
          <Link href="/week-3" className="text-blue-600 underline">
            Week 3
          </Link>
        </li>
        <li>
          <Link href="/week-4" className="text-blue-600 underline">
            Week 4
          </Link>
        </li>
        <li>
          <Link href="/week-5" className="text-blue-600 underline">
            Week 5
          </Link>
        </li>
        <li>
          <Link href="/week-6" className="text-blue-600 underline">
            Week 6
          </Link>
        </li>
        <li>
          <Link href="/week-7" className="text-blue-600 underline">
            Week 7
          </Link>
        </li>
        <li>
          <Link href="/week-8" className="text-blue-600 underline">
            Week 8
          </Link>
        </li>
        <li>
          <Link href="/week-9" className="text-blue-600 underline">
            Week 9 - Shopping List with Auth
          </Link>
        </li>
      </ul>
    </main>
  )
}
