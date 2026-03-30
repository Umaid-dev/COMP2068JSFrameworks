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