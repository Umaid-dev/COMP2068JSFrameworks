import { Router, type Request, type Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import type Task from "../models/task";

const router = Router();

// GET all
router.get("/", async (_req: Request, res: Response) => {
  try {
    if (!collections.tasks) {
      return res.status(500).send("Collection not initialized");
    }

    const tasks = (await collections.tasks.find({}).toArray()) as Task[];
    res.status(200).send(tasks);
  } catch (error: unknown) {
    res.status(500).send(String(error));
  }
});

router.get("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;

    if (!collections.tasks) {
      return res.status(500).send("Collection not initialized");
    }

    const task = await collections.tasks.findOne({
      _id: new ObjectId(id),
    });

    if (!task) {
      return res.status(404).send("Task not found");
    }

    res.status(200).send(task);
  } catch (error: unknown) {
    res.status(500).send(String(error));
  }
});

// POST
router.post("/", async (req: Request, res: Response) => {
  try {
    if (!collections.tasks) {
      return res.status(500).send("Collection not initialized");
    }

    const newTask = req.body as Task;
    const result = await collections.tasks.insertOne(newTask);

    res.status(201).json(result);
  } catch (error: unknown) {
    res.status(500).send(String(error));
  }
});

// PUT
router.put("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;

    if (!collections.tasks) {
      return res.status(500).send("Collection not initialized");
    }

    const updatedTask = req.body;

    const result = await collections.tasks.updateOne(
      { _id: new ObjectId(id) },
      { $set: updatedTask }
    );

    res.status(200).send(result);
  } catch (error: unknown) {
    res.status(500).send(String(error));
  }
});


// DELETE
router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id as string;

    if (!collections.tasks) {
      return res.status(500).send("Collection not initialized");
    }

    const result = await collections.tasks.deleteOne({
      _id: new ObjectId(id),
    });

    res.status(200).send(result);
  } catch (error: unknown) {
    res.status(500).send(String(error));
  }
});

export default router;