// student-info.js
import Link from 'next/link';

function StudentInfo() {
  return (
    <div>
      <h1>Karamjit Singh</h1>
      <p>
        Check out my GitHub:{' '}
        <Link href="https://github.com/karamjitminhas/cprg306-assignments">
          cprg306-assignments
        </Link>
      </p>
    </div>
  );
}

export default StudentInfo;
