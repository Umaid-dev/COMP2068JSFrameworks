import { Task } from "../../../types/task";
import EditTaskForm from "../../../components/editTaskForm";

export default async function EditTaskPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const res: Response = await fetch(
    `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/tasks/${id}`,
  );

  if (!res.ok) return <div>Task not found</div>;

  const task: Task = await res.json();

  return (
    <main>
      <EditTaskForm task={task} />
    </main>
  );
}