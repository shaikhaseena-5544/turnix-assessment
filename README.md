# Turnix Backend Assessment

This is a Node.js backend application built using Express.js as part of the Turnix code assessment.

## Features
- Express server setup
- JSON middleware enabled
- Auth routes
- Orders routes
- Modular folder structure

## Project Structure

turnix-assessment
│
├── src
│   ├── app.js
│   ├── index.js
│   ├── queue.js
│   ├── routes
│   │   ├── auth.routes.js
│   │   └── orders.routes.js
│   ├── workers
│   │   └── order.worker.js
│   └── data
│       ├── users.js
│       ├── orders.js
│       └── store.js
│
├── package.json
├── package-lock.json
├── .gitignore
└── README.md

## Installation

1. Clone the repository
git clone https://github.com/shaikhaseena-5544/turnix-assessment.git

2. Install dependencies
npm install

3. Start the server
node src/index.js

## API Endpoints

GET /
Returns server status

GET /api/auth
Auth route test

GET /api/orders
Orders route test

## Author

Shaik Haseena
