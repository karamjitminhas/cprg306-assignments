import Link from 'next/link';

function HomePage() {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <p>
        <Link href="/week-2">Go to Week 2</Link>
        <br />
        <Link href="/week-3">Go to Week 3</Link>
      </p>
    </div>
  );
}

export default HomePage;
