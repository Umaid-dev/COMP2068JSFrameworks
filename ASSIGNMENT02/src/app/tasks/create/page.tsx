"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateTask() {
  const router = useRouter();

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [tags, setTags] = useState<string>("");

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!title.trim()) newErrors.title = "Title is required";
    if (!description.trim()) newErrors.description = "Description is required";
    if (!dueDate.trim()) newErrors.dueDate = "Due date is required";
    if (!status.trim()) newErrors.status = "Status is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      return true;
    } else {
      return false;
    }
  };

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    const res: Response = await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        description,
        dueDate,
        status,
        tags: tags
          .split(",")
          .map((tag) => tag.trim())
          .filter((tag) => tag !== ""),
      }),
    });

    if (!res.ok) {
      alert("Failed to save task");
      return;
    }

    router.push("/tasks");
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Task Details</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <fieldset>
          <label htmlFor="title">Task Title: *</label>
          <input
            id="title"
            name="title"
            className="border rounded px-3 py-2 w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="text-red-600">{errors.title}</p>}
        </fieldset>

        <fieldset>
          <label htmlFor="description">Description: *</label>
          <textarea
            id="description"
            name="description"
            className="border rounded px-3 py-2 w-full"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {errors.description && (
            <p className="text-red-600">{errors.description}</p>
          )}
        </fieldset>

        <fieldset>
          <label htmlFor="dueDate">Due Date: *</label>
          <input
            id="dueDate"
            name="dueDate"
            type="date"
            className="border rounded px-3 py-2 w-full"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          {errors.dueDate && <p className="text-red-600">{errors.dueDate}</p>}
        </fieldset>

        <fieldset>
          <label htmlFor="status">Status: *</label>
          <select
            id="status"
            name="status"
            className="border rounded px-3 py-2 w-full"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Select status</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          {errors.status && <p className="text-red-600">{errors.status}</p>}
        </fieldset>

        <fieldset>
          <label htmlFor="tags">Tags:</label>
          <input
            id="tags"
            name="tags"
            className="border rounded px-3 py-2 w-full"
            placeholder="school, assignment, urgent"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </fieldset>

        <button
          type="submit"
          className="bg-blue-700 text-white px-4 py-2 rounded"
        >
          Save
        </button>
      </form>
    </main>
  );
}