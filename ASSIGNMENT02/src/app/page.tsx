import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Welcome to Task Tracker</h1>
      <p className="mb-4">
        This website helps users manage tasks by creating, viewing, editing,
        and deleting task entries.
      </p>
      <p className="mb-4">
        Each task includes a title, description, due date, status, and tags.
      </p>

      <Link
        href="/tasks"
        className="inline-block bg-blue-900 text-white px-4 py-2 rounded"
      >
        View Tasks
      </Link>
    </main>
  );
}