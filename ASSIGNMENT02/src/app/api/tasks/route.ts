export async function GET() {
  try {
    const res: Response = await fetch("http://localhost:5050/api/tasks", { //While running it was showing 5050 thats why is used it instead of 5000 
      cache: "no-store",
    });

    if (!res.ok) {
      return Response.json(
        { message: "Failed to fetch tasks from server" },
        { status: res.status }
      );
    }

    const data = await res.json();
    return Response.json(data);
  } catch (error) {
    console.error("Route Error:", error);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const res: Response = await fetch("http://localhost:5050/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      return Response.json(
        { message: "Failed to create task on server" },
        { status: res.status }
      );
    }

    const data = await res.json();
    return Response.json(data);
  } catch (error) {
    console.error("Route Error:", error);
    return Response.json({ message: "Internal Server Error" }, { status: 500 });
  }
}