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

    return Object.keys(newErrors).length === 0;
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
    <main className="container">
      <h1 className="title">Task Details</h1>

      <form onSubmit={handleSubmit} className="form">
        <fieldset className="form-group">
          <label htmlFor="title">Task Title: *</label>
          <input
            id="title"
            name="title"
            className="input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="error">{errors.title}</p>}
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="description">Description: *</label>
          <textarea
            id="description"
            name="description"
            className="input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {errors.description && (
            <p className="error">{errors.description}</p>
          )}
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="dueDate">Due Date: *</label>
          <input
            id="dueDate"
            name="dueDate"
            type="date"
            className="input"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          {errors.dueDate && <p className="error">{errors.dueDate}</p>}
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="status">Status: *</label>
          <select
            id="status"
            name="status"
            className="input"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Select status</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          {errors.status && <p className="error">{errors.status}</p>}
        </fieldset>

        <fieldset className="form-group">
          <label htmlFor="tags">Tags:</label>
          <input
            id="tags"
            name="tags"
            className="input"
            placeholder="school, assignment, urgent"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </fieldset>

        <button
          type="submit"
          className="button-primary"
        >
          Save
        </button>
      </form>
    </main>
  );
}