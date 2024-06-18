# Charm Avenue Jewelry

### by Moses Atia Poston

## Live Demo

This web app deployed with render.com.
[See live demo here](https://charm-avenue.onrender.com/)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Scripts](#scripts)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
  - [Product Endpoints](#product-endpoints)
  - [User Endpoints](#user-endpoints)
  - [Order Endpoints](#order-endpoints)
  - [Upload Endpoints](#upload-endpoints)
- [Screens](#screens)
  - [Public Screens](#public-screens)
  - [User Screens](#user-screens)
  - [Admin Screens](#admin-screens)
- [Data Models](#data-models)
  - [Product Model](#product-model)
  - [User Model](#user-model)
  - [Order Model](#order-model)
- [Known Bugs](#known-bugs)
- [License](#license)
- [Contact](#contact)

## Overview

This is a full-featured e-commerce web application built with the MERN stack (MongoDB, Express, React, Node.js). The application includes product listings, user authentication, shopping cart, order management, and admin functionality.

## Features

- User Authentication with JWT
- Product Listings, Search and Filter
- Product Reviews and Ratings
- Shopping Cart
- PayPal Payment Processing
- Order Management
- Pagination
- Top Products Carousel
- Responsive Design
- Admin Features:
  - Manage Products
  - Manage Orders
  - Manage Users
- Image Upload with Multer (Admin)

## Technologies Used

- MongoDB
- Express
- React
- Node.js
- Redux
- React-Bootstrap
- JWT (JSON Web Tokens)
- Multer
- PayPal Developers
- Nodemon
- Concurrently

## Getting Started

### Prerequisites

- Node.js
- MongoDB

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Object-ions/eCommerce-MERN.git
   ```
2. Navigate to the project directory:
   ```sh
   cd Commerce-MERN
   ```
3. !important! Switch branch from 'main' to 'charm-avenue':
   ```sh
   git clone https://github.com/Object-ions/eCommerce-MERN.git
   ```
4. Install the dependencies:
   ```sh
   cd frontend
   npm install
   ```
5. Create a .env file in the root directory and add the following environment variables: (check out example.env file)
   ```sh
   NODE_ENV=development
   PORT=your_port || 4000
   MONGO_URI=your_mongo_uri
   JWT_SECRET=add_your_secret
   PAYPAL_CLIENT_ID=add_your_client_id
   PAYPAL_APP_SECRET=add_your_secret
   PAYPAL_API_URL=https://api-m.sandbox.paypal.com
   PAGINATION_LIMIT=8
   ```

## Scripts

In the root package.json, you have the following scripts:

- start: Runs the Node.js server using node backend/server.js.
- server: Runs the Node.js server using nodemon backend/server.js for development, which automatically restarts the server on file changes.
- client: Runs the React development server. It uses the frontend directory and runs npm start --prefix frontend.
- dev: Runs both the backend server and the React development server concurrently using concurrently.

## Running the Application

To run the application, you will use the dev script, which starts both the backend and frontend servers concurrently:

```sh
   npm run dev
```

## API Endpoints

## Product Endpoints

| **Endpoint**                   | **Description**                       | **Access** |
| ------------------------------ | ------------------------------------- | ---------- |
| GET /api/products              | Fetch all products with pagination.   | Public     |
|                                | Query Parameters: keyword, pageNumber |            |
| GET /api/products/top          | Fetch top rated products.             | Public     |
| GET /api/products/:id          | Fetch a single product by ID.         | Public     |
| POST /api/products             | Create a new product.                 | Admin      |
| PUT /api/products/:id          | Update a product.                     | Admin      |
| DELETE /api/products/:id       | Delete a product.                     | Admin      |
| POST /api/products/:id/reviews | Create a product review.              | User       |
| GET /api/tags                  | Get all tags.                         | Public     |
| GET /api/tags/:tag             | Get products by tag.                  | Public     |

## User Endpoints

| **Endpoint**           | **Description**                  | **Access** |
| ---------------------- | -------------------------------- | ---------- |
| POST /api/users/login  | Authenticate user and get token. | Public     |
| POST /api/users        | Register a new user.             | Public     |
| POST /api/users/logout | Logout user and clear cookie.    | Protected  |
| GET /api/users/profile | Get user profile.                | Protected  |
| PUT /api/users/profile | Update user profile.             | Protected  |
| GET /api/users         | Get all users.                   | Admin      |
| GET /api/users/:id     | Get user by ID.                  | Admin      |
| DELETE /api/users/:id  | Delete user.                     | Admin      |
| PUT /api/users/:id     | Update user.                     | Admin      |

## Order Endpoints

| **Endpoint**                | **Description**            | **Access** |
| --------------------------- | -------------------------- | ---------- |
| POST /api/orders            | Create a new order.        | Protected  |
| GET /api/orders/myorders    | Get logged-in user orders. | Protected  |
| GET /api/orders/:id         | Get order by ID.           | Protected  |
| PUT /api/orders/:id/pay     | Update order to paid.      | Protected  |
| PUT /api/orders/:id/deliver | Update order to delivered. | Admin      |
| GET /api/orders             | Get all orders.            | Admin      |

## Upload Endpoints

| **Endpoint**     | **Description**  | **Access** |
| ---------------- | ---------------- | ---------- |
| POST /api/upload | Upload an image. | Admin      |

## Screens

### Public Screens

- HomeScreen
- ProductScreen
- CartScreen
- LoginScreen
- RegisterScreen

### User Screens

- ProfileScreen
- ShippingScreen
- PaymentScreen
- PlaceOrderScreen
- OrderScreen

### Admin Screens

- UserListScreen
- UserEditScreen
- ProductListScreen
- ProductEditScreen
- OrderListScreen

## Data Models

### Product Model

- **name**: String, required
- **image**: String, required
- **category**: String, required
- **tags**: Array of Strings, required
- **description**: String, required
- **reviews**: Array of reviewSchema
- **rating**: Number, required, default: 0
- **numReviews**: Number, required, default: 0
- **price**: Number, required, default: 0
- **countInStock**: Number, required, default: 0
- **user**: ObjectId, required, ref: 'User'

### User Model

- **name**: String, required
- **email**: String, required, unique
- **password**: String, required
- **isAdmin**: Boolean, required, default: false

### Order Model

- **user**: ObjectId, required, ref: 'User'
- **orderItems**: Array of order item objects
  - **name**: String, required
  - **qty**: Number, required
  - **image**: String, required
  - **price**: Number, required
  - **product**: ObjectId, required, ref: 'Product'
- **shippingAddress**: Object
  - **address**: String, required
  - **city**: String, required
  - **postalCode**: String, required
  - **country**: String, required
- **paymentMethod**: String, required
- **paymentResult**: Object
  - **id**: String
  - **status**: String
  - **update_time**: String
  - **email_address**: String
- **itemsPrice**: Number, required, default: 0.0
- **taxPrice**: Number, required, default: 0.0
- **shippingPrice**: Number, required, default: 0.0
- **totalPrice**: Number, required, default: 0.0
- **isPaid**: Boolean, required, default: false
- **paidAt**: Date
- **isDelivered**: Boolean, required, default: false
- **deliveredAt**: Date

## Known Bugs

- **Duplicate Comments**: Users can leave a comment twice on the same item, even though it’s supposed to be not allowed. This is a work in progress and will be fixed in a future update.

## License

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2024 Moshe Atia Poston.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

### Contact

If you detect any bug in the program, please reach out to me at [moshikoatia@gmail.com](mailto:moshikoatia@gmail.com).
