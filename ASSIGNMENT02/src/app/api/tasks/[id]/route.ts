// GET  => fetching single task
export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const res: Response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/tasks/${id}`,
  );

  if (!res.ok) throw new Error("Failed to fetch task");

  return Response.json(await res.json());
}

// DELETE  => deleting selected task
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const res: Response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/tasks/${id}`,
    { method: "DELETE" },
  );

  if (!res.ok) throw new Error("Failed to delete task");

  return new Response(null, { status: 204 });
}

// PUT => updating selected task
export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;

  const body = await req.json();

  const res: Response = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/api/tasks/${id}`,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    },
  );

  if (!res.ok) throw new Error("Failed to update task");

  return new Response(null, { status: 204 });
}