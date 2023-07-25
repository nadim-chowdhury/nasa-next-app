import Link from "next/link";

export default function Header() {
  return (
    <header className="mb-8 py-6 shadow">
      <nav className="max-w-2xl mx-auto flex justify-between items-center">
        <div>
          <Link href="/" className="text-4xl font-bold text-blue-500 uppercase">
            Nasa
          </Link>
        </div>

        <div>
          <Link
            href="/login"
            className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded mr-2"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded"
          >
            Signup
          </Link>
        </div>
      </nav>
    </header>
  );
}
