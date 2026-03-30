import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

dotenv.config();

export const collections: { tasks?: mongoDB.Collection } = {};

export async function connectToDatabase() {
  const connString = process.env.DB_CONN_STRING;

  if (!connString) {
    throw new Error("DB_CONN_STRING is not defined");
  }

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(connString);

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  const collectionName = process.env.COLLECTION_NAME;

  if (!collectionName) {
    throw new Error("COLLECTION_NAME is not defined");
  }

  const taskCollection: mongoDB.Collection = db.collection(collectionName);

  collections.tasks = taskCollection;

  console.log(`Connected to DB: ${db.databaseName}`);
}