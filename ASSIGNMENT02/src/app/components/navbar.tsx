import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white p-4 flex flex-col md:flex-row md:justify-between md:items-center">
      <h1 className="text-xl font-bold mb-2 md:mb-0">Task Tracker</h1>

      <ul className="flex flex-col md:flex-row gap-4">
        <li>
          <Link href="/" className="hover:text-blue-200">
            Home
          </Link>
        </li>
        <li>
          <Link href="/tasks" className="hover:text-blue-200">
            List Tasks
          </Link>
        </li>
        <li>
          <Link href="/tasks/create" className="hover:text-blue-200">
            Add Task
          </Link>
        </li>
      </ul>
    </nav>
  );
}