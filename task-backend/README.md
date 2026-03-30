# Task Tracker API

https://comp-2068-js-frameworks-ruddy.vercel.app/api/tasks

## Description
This is a RESTful API built using Node.js, Express, and MongoDB.  
It provides full CRUD functionality for managing tasks.

## Features
- Create a task
- Read all tasks
- Read a single task by ID
- Update a task
- Delete a task

## Used 
- Node.js
- Express.js
- MongoDB

## API Endpoints

| Method | Endpoint              | Description              |
|--------|----------------------|--------------------------|
| GET    | /api/tasks           | Get all tasks           |
| GET    | /api/tasks/:id       | Get single task         |
| POST   | /api/tasks           | Create task             |
| PUT    | /api/tasks/:id       | Update task             |
| DELETE | /api/tasks/:id       | Delete task             |

## Environment Variables

Create a `.env` file:


## Running Locally

```bash
npm install
npm run dev

DB_CONN_STRING=mongodb+srv://umaidn11_db_user:Umaid123@umaidcluster.mngwqni.mongodb.net/?retryWrites=true&w=majority&appName=UmaidCluster
DB_NAME=assignment2
COLLECTION_NAME=to-do
CLIENT_URL=http://localhost:3000

## API Documentation (Swagger)

https://comp-2068-js-frameworks-ruddy.vercel.app/api-docs