"use client";

import { useRouter } from "next/navigation";

export default function DeleteTaskButton({ id }: { id: string }) {
  const router = useRouter();

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this task?")) {
      return;
    } else {
      const res: Response = await fetch(
        `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/tasks/${id}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) {
        alert("Failed to delete task");
      }

      router.push("/tasks");
    }
  };

  return (
    <button onClick={handleDelete} className="button-danger">
      Delete
    </button>
  );
}