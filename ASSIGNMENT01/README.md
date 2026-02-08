# COMP2068 JavaScript Frameworks –> Assignment 1 Portfolio API

A REST style Portfolio API Assignment built with **TypeScript and Express JS**.  
This API returns JSON endpoints for a personal portfolio: profile, about, projects, and contact messages (in-memory).

## Live API Link
- Live URL: <PASTE YOUR LIVE DEPLOYED LINK HERE>

## GitHub Repo Link 
- Repo: <PASTE YOUR GITHUB REPO LINK HERE>

# Endpoints : 

### ### GET /api/myProfile
Returns basic profile info.

Example:
- URL: `http://localhost:3000/api/myProfile`

### GET /api/aboutMe
Returns about me info.

Example:
- URL: `http://localhost:3000/api/aboutMe`

### GET /api/projects
Returns list of projects.

Example:
- URL: `http://localhost:3000/api/projects`

### POST /api/contactMe
Accepts a contact message and stores it in memory. 

Example (postman/ curl) ;

In postman : 

curl -X POST http://localhost:3000/api/contactMe \

  -d '{
    "name": "Umaid",
    "email": "umaid@example.com",
    "phone": "705-905-6642",
    "message": "Hello, I liked your assignment 1!"
  }' 
  
  then click on send! . 

  # Running Locally 

-> install dependencies 

    npm install
  ## Running Locally

  1) npm install
  2) npm run dev

-> Run the dev server :

    npx ts-node-dev src/server.ts

    (api will run at local host 3000)