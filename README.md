# E-Commerce Web Application

A full-stack e-commerce web application built using React, Vite, and Node.js. The application provides a shopping experience with product browsing, cart management, checkout, order history, and order tracking.

## Live Demo

[View the Live E-Commerce Application](https://ecommerce-web-application-m8k0.onrender.com)

## Features

- Browse products and view product details.
- Add products to the shopping cart and manage quantities.
- Select delivery options during checkout.
- View payment summaries and order totals.
- Place orders and view order history.
- Track order delivery.
- Responsive user interface.
- REST API powered by Express.js.
- Persistent data storage using Sequelize.

## Tech Stack

| Frontend | Backend |
|---|---|
| React | Node.js |
| Vite | Express.js |
| React Router | Sequelize ORM |
| Axios | SQL database |
| CSS | REST API |

## Project Structure

```text
Ecommerce-Web-Application/
├── ecommerce-backend/
│   ├── defaultData/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── ecommerce-project/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (version 22 or later)
- npm
- Git

### 1. Clone the repository

```bash
git clone https://github.com/goutham-ketham/Ecommerce-Web-Application.git
cd Ecommerce-Web-Application
```

### 2. Install backend dependencies

```bash
cd ecommerce-backend
npm install
```

### 3. Install frontend dependencies

Open another terminal from the project root:

```bash
cd ecommerce-project
npm install
```

### 4. Start the backend

From the `ecommerce-backend` directory, run:

```bash
npm start
```

The backend runs on port 3000 by default.

### 5. Start the frontend

From the `ecommerce-project` directory, run:

```bash
npm run dev
```

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173
```

## Deployment

The application is deployed on Render as a web service.

The frontend is built using Vite and served by the Express backend. The backend also provides the REST API endpoints used by the frontend.

### Render Configuration

**Build Command**

```bash
cd ecommerce-backend && npm install && cd ../ecommerce-project && npm install && npm run build
```

**Start Command**

```bash
cd ecommerce-backend && npm start
```

The frontend build output is served from the backend's `dist` directory.

## API Endpoints

The backend provides the following API routes:

| Endpoint | Description |
|---|---|
| `/api/products` | Product information |
| `/api/cart-items` | Shopping cart operations |
| `/api/delivery-options` | Delivery options |
| `/api/orders` | Order management |
| `/api/payment-summary` | Payment summary |
| `/api/reset` | Reset application data |

## Author

GitHub: [Goutham Ketham](https://github.com/goutham-ketham)

## License

This project is intended for educational and personal portfolio purposes.
