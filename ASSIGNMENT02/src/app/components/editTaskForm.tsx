"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Task } from "../types/task";

// edit form should be pre-filled so it accepts a Task prop
export default function EditTaskForm({ task }: { task: Task }) {
  const router = useRouter();

  // state vars populated from Task prop
  const [title, setTitle] = useState<string>(task.title || "");
  const [description, setDescription] = useState<string>(task.description || "");
  const [dueDate, setDueDate] = useState<string>(task.dueDate || "");
  const [status, setStatus] = useState<string>(task.status || "");
  const [tags, setTags] = useState<string>(task.tags?.join(", ") || "");

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!title.trim()) newErrors.title = "Title is Required";
    if (!description.trim()) newErrors.description = "Description is Required";
    if (!dueDate.trim()) newErrors.dueDate = "Due Date is Required";
    if (!status.trim()) newErrors.status = "Status is Required";

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
    } else {
      const res: Response = await fetch(
        `${process.env.NEXT_PUBLIC_CLIENT_URL}/api/tasks/${task._id}`,
        {
          method: "PUT",
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
        },
      );

      if (!res.ok) {
        alert("Failed to update task");
      }

      router.push("/tasks");
    }
  };

  return (
    <main className="container">
      <h1 className="title">Task Details</h1>

      <form onSubmit={handleSubmit} className="form">
        <fieldset className="form-group">
          <label htmlFor="title">Task Title: *</label>
          <input
          className="input"
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <span className="error">{errors.title}</span>}
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="description" >Description: *</label>
          <input
            className="input"
            name="description"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {errors.description && (
            <span className="error">{errors.description}</span>
          )}
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="dueDate">Due Date: *</label>
          <input
            className="input"
            name="dueDate"
            id="dueDate"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          {errors.dueDate && <span className="error">{errors.dueDate}</span>}
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="status">Status: *</label>
          <input
            className="input"
            name="status"
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
          {errors.status && <span className="error">{errors.status}</span>}
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="tags">Tags:</label>
          <input
            className="input"   
            name="tags"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </fieldset>

        <button className="button-primary">Save</button>
      </form>
    </main>
  );
}