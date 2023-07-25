import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4">
      <h1 className="text-3xl font-bold text-blue-500">NASA</h1>

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
    </header>
  );
}
