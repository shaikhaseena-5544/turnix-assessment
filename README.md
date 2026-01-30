# Turnix Backend Assessment

This is a Node.js backend application built using Express.

## 🚀 Tech Stack
- Node.js
- Express.js
- UUID
- In-memory data store
- Queue & Worker pattern

## 📂 Project Structure

turnix-assessment/
├── src
│   ├── data
│   │   └── store.js
│   ├── routes
│   │   ├── auth.routes.js
│   │   └── index.js
│   ├── workers
│   │   └── order.worker.js
│   ├── app.js
│   └── queue.js
├── package.json
└── README.md

## ⚙️ Setup Instructions

1. Clone repository:
git clone https://github.com/shaikhaseena-5544/turnix-assessment

2. Go inside project:
cd turnix-assessment

3. Install dependencies:
npm install

4. Start server:
npm start

## 🔥 API Endpoints

GET /api/auth/test  
Returns test message

POST /api/orders  
Creates order and pushes to queue

## ✅ Features

- Express server setup
- Modular routes
- In-memory database
- Queue processing
- Background worker

