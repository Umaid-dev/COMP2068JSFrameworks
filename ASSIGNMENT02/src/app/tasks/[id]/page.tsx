import Link from "next/link";
import DeleteTaskButton from "@/app/components/deleteTaskButton";
import { Task } from "../../types/task";
async function getTask(id: string): Promise<Task> {
  const res: Response = await fetch(
    `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/tasks/${id}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Could not fetch task");
  }

  return res.json();
}

export default async function TaskDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  try {
    const task = await getTask(id);

    return (
      <main className="page-container">
        <h1 className="page-title">Task Details</h1>

        <article className="task-card">
          <h3 className="task-title">{task.title}</h3>
          <p className="task-text">{task.description}</p>
          <p className="task-text">Due Date: {task.dueDate}</p>
          <p className="task-text">Status: {task.status}</p>
          <p className="task-text">Tags: {task.tags?.join(", ")}</p>

          <div className="task-text">
            <Link
              href={`/tasks/edit/${task._id}`}
              className="button-primary"
            >
              Edit
            </Link>

            <DeleteTaskButton id={task._id} />
          </div>
        </article>
      </main>
    );
  } catch (error) {
    return (
      <main className="page-container">
        <h1 className="page-title">Task Not Found</h1>
      </main>
    );
  }
}