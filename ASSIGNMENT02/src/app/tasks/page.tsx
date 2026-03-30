import Link from "next/link";

async function getTasks() {
  const res = await fetch("http://localhost:3001/api/tasks", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("failed to fetch");
  }

  return res.json();
}

type Task = {
  _id: string;
  title: string;
  description: string;
  dueDate: string;
  status: string;
  tags: string[];
};

export default async function TasksPage() {
  const tasks: Task[] = await getTasks();

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Tasks</h1>

      <Link
        href="/tasks/create"
        className="bg-green-600 text-white px-3 py-2 rounded mb-4 inline-block"
      >
        Add New Task
      </Link>

      {tasks.length === 0 ? (
        <p>No tasks found.</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task._id} className="border p-4 mb-3 rounded">
              <h2 className="text-xl font-semibold">{task.title}</h2>
              <p>{task.description}</p>
              <p>Status: {task.status}</p>
              <p>Due Date: {task.dueDate}</p>
              <p>Tags: {task.tags.join(", ")}</p>

              <Link
                href={`/tasks/${task._id}`}
                className="text-blue-600 underline"
              >
                View Details
              </Link>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}