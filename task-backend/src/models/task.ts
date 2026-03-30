import { ObjectId } from "mongodb";

export default interface Task {
  _id?: ObjectId;
  title: string;
  description: string;
  dueDate: string;
  status: string;
  tags: string[];
}