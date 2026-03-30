import Link from "next/link";

async function getTasks() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/tasks`); 

  if (!res.ok) {
    throw new Error("Failed to fetch tasks");
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
    <main className="container">
      <h1 className="title">All Tasks</h1>

      <Link
        href="/tasks/create"
        className="button-success"
      >
        Add New Task
      </Link>

      {tasks.length === 0 ? (
        <p className="no-data">No tasks found.</p>
      ) : (
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task._id} className="task-card">
              <h2 className="task-title">{task.title}</h2>
              <p className="task-text">{task.description}</p>
              <p className="task-text">Status: {task.status}</p>
              <p className="task-text">Due Date: {task.dueDate}</p>
              <p className="task-text">Tags: {task.tags.join(", ")}</p>

              <Link
                href={`/tasks/${task._id}`}
                className="link-primary"
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