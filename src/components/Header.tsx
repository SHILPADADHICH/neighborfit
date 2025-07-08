import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-md py-4 px-6 flex items-center justify-between">
      <Link href="/" className="text-2xl font-bold text-blue-600">
        NeighborFit
      </Link>
      <nav className="space-x-4">
        <Link href="/survey" className="hover:underline">
          Survey
        </Link>
        <Link href="/results" className="hover:underline">
          Results
        </Link>
        <Link href="/admin" className="hover:underline">
          Admin
        </Link>
      </nav>
    </header>
  );
}
