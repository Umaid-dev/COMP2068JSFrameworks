import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Task Tracker</h1>

      <ul className="navbar-links">
        <li>
          <Link href="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link href="/tasks" className="nav-link">
            List Tasks
          </Link>
        </li>
        <li>
          <Link href="/tasks/create" className="nav-link">
            Add Task
          </Link>
        </li>
      </ul>
    </nav>
  );
}