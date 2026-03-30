# Task Tracker API

Last Updated: March 30, 2026

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
