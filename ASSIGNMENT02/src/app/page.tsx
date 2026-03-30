import Link from "next/link";

export default function HomePage() {
  return (
    <main className="home-container">
      <div className="home-card">
        <h1 className="home-title">Welcome to Task Tracker 📝</h1>

        <p className="home-text">
          Manage your tasks efficiently. Add, edit, and track your progress easily.
        </p>

        <Link href="/tasks" className="button-primary">
          Go to Tasks
        </Link>
      </div>
    </main>
  );
}