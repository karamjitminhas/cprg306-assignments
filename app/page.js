import Link from 'next/link';

function HomePage() {
  return (
    <main className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        CPRG 306: Web Development 2 - Assignments
      </h1>

      <ul className="space-y-2">
        <li>
          <Link
            href="/week-2"
            className="text-blue-600 hover:text-blue-800 hover:underline"
          >
            Go to Week 2
          </Link>
        </li>
        <li>
          <Link
            href="/week-3"
            className="text-blue-600 hover:text-blue-800 hover:underline"
          >
            Go to Week 3
          </Link>
        </li>
        <li>
          <Link
            href="/week-4"
            className="text-blue-600 hover:text-blue-800 hover:underline"
          >
            Go to Week 4
          </Link>
        </li>
        <li>
          <Link
            href="/week-5"
            className="text-blue-600 hover:text-blue-800 hover:underline"
          >
            Go to Week 5
          </Link>
        </li>
        <li>
          <Link
            href="/week-6"
            className="text-blue-600 hover:text-blue-800 hover:underline"
          >
            Go to Week 6
          </Link>
        </li>
        <li>
          <Link
            href="/week-7"
            className="text-blue-600 hover:text-blue-800 hover:underline"
          >
            Go to Week 7
          </Link>
        </li>
      </ul>
    </main>
  );
}

export default HomePage;
