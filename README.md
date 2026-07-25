# 📦 Inventory Management System

<p align="center">

![Node.js](https://img.shields.io/badge/Node.js-22.x-green?style=for-the-badge&logo=node.js)
![Express.js](https://img.shields.io/badge/Express.js-Backend-black?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?style=for-the-badge&logo=mongodb)
![React](https://img.shields.io/badge/React-Frontend-blue?style=for-the-badge&logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-Styling-06B6D4?style=for-the-badge&logo=tailwindcss)
![JWT](https://img.shields.io/badge/JWT-Authentication-orange?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

</p>

---

## 📖 Project Overview

The **Inventory Management System** is a modern full-stack web application built using the **MERN Stack**. It helps users efficiently manage products, categories, stock levels, and inventory analytics through a secure and responsive dashboard.

The application focuses on simplicity, security, and scalability. Every authenticated user manages their own inventory while sharing common product categories.

Whether you're learning the MERN stack or looking for a solid portfolio project, this application demonstrates real-world concepts such as authentication, CRUD operations, dashboard analytics, API development, and frontend state management.

---

# 🚀 Features

## 🔐 Authentication

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- Password Hashing using bcrypt

---

## 📊 Dashboard

- Total Products
- Total Categories
- Low Stock Products
- Inventory Value
- User-specific Inventory Statistics

---

## 📦 Product Management

- Add Product
- Edit Product
- Delete Product
- Search Products
- SKU Management
- Quantity Tracking
- Low Stock Threshold
- Category Assignment

---

## 📂 Category Management

- Create Categories
- Edit Categories
- Delete Categories
- Search Categories

---

## ⚠️ Low Stock Monitoring

Automatically identifies products whose quantity is less than or equal to the configured Low Stock Threshold.

Dedicated page to quickly identify products that require restocking.

---

## 🎨 Modern User Interface

- Responsive Design
- Dark Theme
- Dashboard Cards
- ShadCN UI Components
- Tailwind CSS
- Lucide Icons
- Toast Notifications

---

# 🛠 Tech Stack

## Frontend

| Technology | Purpose |
|------------|---------|
| React | User Interface |
| Vite | Development Environment |
| React Router DOM | Client-side Routing |
| Axios | API Communication |
| Tailwind CSS | Styling |
| ShadCN UI | UI Components |
| Lucide React | Icons |
| Sonner | Toast Notifications |

---

## Backend

| Technology | Purpose |
|------------|---------|
| Node.js | Runtime Environment |
| Express.js | Backend Framework |
| MongoDB | Database |
| Mongoose | ODM |
| JWT | Authentication |
| bcrypt | Password Hashing |
| Zod | Request Validation |
| dotenv | Environment Variables |
| cors | Cross-Origin Requests |

---

# 🏗 Project Architecture

```
                +-------------------+
                |      React        |
                |     Frontend      |
                +---------+---------+
                          |
                     Axios Requests
                          |
                          ▼
                +-------------------+
                |    Express API    |
                |     Backend        |
                +---------+---------+
                          |
                    Mongoose ODM
                          |
                          ▼
                +-------------------+
                |     MongoDB       |
                |     Database      |
                +-------------------+
```

---

# 📂 Project Structure

```
Inventory_System
│
├── Backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── validators
│   ├── app.js
│   ├── package.json
│   └── .env
│
├── Frontend
│   ├── src
│   │   ├── components
│   │   ├── layouts
│   │   ├── pages
│   │   ├── routes
│   │   ├── services
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# 🎯 Project Goals

This project was built to:

- Learn full-stack MERN development
- Understand JWT Authentication
- Practice REST API development
- Implement CRUD operations
- Build a responsive dashboard
- Work with MongoDB relationships
- Improve React component architecture
- Create a portfolio-ready application

---

# 📌 Highlights

✅ JWT Authentication

✅ Protected Routes

✅ Modern Dashboard

✅ Product Management

✅ Category Management

✅ Low Stock Detection

✅ Inventory Analytics

✅ Responsive Design

---
# ⚙️ Prerequisites

Before running this project, make sure the following software is installed on your system.

| Software | Version | Download |
|----------|----------|----------|
| Node.js | 18+ (Recommended: Latest LTS) | https://nodejs.org |
| npm | Comes with Node.js | https://nodejs.org |
| Git | Latest | https://git-scm.com |
| MongoDB Atlas or Local MongoDB | Latest | https://www.mongodb.com |

---

# 📥 Clone the Repository

Open your terminal and run:

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/Inventory_System.git
```

This command downloads (clones) the project from GitHub to your local computer.

Now move inside the project folder.

```bash
cd Inventory_System
```

---

# 📦 Backend Setup

Navigate to the backend folder.

```bash
cd Backend
```

Install all required backend dependencies.

```bash
npm install
```

### What does `npm install` do?

Unlike Python projects that use a **requirements.txt** file, Node.js projects use **package.json**.

Running

```bash
npm install
```

automatically downloads every package listed inside **package.json**.

Some important backend packages that will be installed include:

- Express
- Mongoose
- JWT
- bcrypt
- dotenv
- cors
- zod
- nodemon

You do **NOT** need to install these packages one by one.

---

# 🔐 Configure Environment Variables

Inside the **Backend** folder, create a new file named

```
.env
```

Your folder should now look like:

```
Backend
│
├── controllers
├── models
├── routes
├── middleware
├── validators
├── package.json
└── .env
```

Now add the following variables.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_super_secret_key
```

---

## 📖 Environment Variables Explained

### PORT

```env
PORT=5000
```

Defines the port where the Express server will run.

The application will be available at

```
http://localhost:5000
```

---

### MONGO_URI

```env
MONGO_URI=your_mongodb_connection_string
```

This is your MongoDB connection string.

Example:

```
mongodb+srv://username:password@cluster.mongodb.net/inventory
```

You can obtain this connection string from **MongoDB Atlas**.

---

### JWT_SECRET

```env
JWT_SECRET=your_super_secret_key
```

A secret key used to generate and verify JSON Web Tokens.

Example:

```env
JWT_SECRET=myinventoryproject123
```

Never share this value publicly.

---

# ▶️ Start the Backend Server

Run:

```bash
npm run dev
```

If everything is configured correctly, you should see something similar to:

```
Server running on Port 5000

Connected to MongoDB
```

Backend API is now available at

```
http://localhost:5000
```

---

# 💻 Frontend Setup

Open a **new terminal window**.

Navigate to the frontend folder.

```bash
cd Frontend
```

Install frontend dependencies.

```bash
npm install
```

This installs all packages defined in the frontend **package.json** including:

- React
- Vite
- React Router DOM
- Axios
- Tailwind CSS
- ShadCN UI
- Lucide React
- Sonner

Again, you do **NOT** need to install these individually.

---

# ▶️ Start the Frontend

Run

```bash
npm run dev
```

You should see output similar to:

```
VITE v8.x.x ready

Local:

http://localhost:5173
```

Open your browser and visit:

```
http://localhost:5173
```

---

# 🚀 Running the Application

Once both servers are running:

Backend

```
http://localhost:5000
```

Frontend

```
http://localhost:5173
```

Open the frontend URL in your browser.

---

# 👤 First Time Usage

Since this is a fresh setup, create a new account first.

Visit:

```
http://localhost:5173/register
```

Fill in:

- Name
- Email
- Password

Click **Register**

After successful registration, navigate to

```
http://localhost:5173/login
```

Login using your registered credentials.

You will now be redirected to the Dashboard.

---

# ✅ Verify Installation

If everything is working correctly, you should be able to:

- Register a new user
- Login successfully
- View the Dashboard
- Create Categories
- Add Products
- Edit Products
- Delete Products
- View Low Stock Products

Congratulations! 🎉

Your Inventory Management System is now running successfully.
# 📚 Backend Dependencies

The backend uses the following packages.

| Package | Purpose |
|----------|----------|
| express | Web framework used to create REST APIs |
| mongoose | Object Data Modeling (ODM) library for MongoDB |
| jsonwebtoken | Generates and verifies JWT tokens |
| bcrypt | Hashes user passwords before storing them |
| zod | Validates incoming request data |
| dotenv | Loads environment variables from the `.env` file |
| cors | Enables communication between frontend and backend |
| nodemon | Automatically restarts the server during development |

All backend dependencies are automatically installed using:

```bash
npm install
```

---

# 🎨 Frontend Dependencies

The frontend uses the following packages.

| Package | Purpose |
|----------|----------|
| react | Frontend JavaScript library |
| vite | Development server and build tool |
| react-router-dom | Client-side routing |
| axios | HTTP client for API communication |
| tailwindcss | Utility-first CSS framework |
| shadcn/ui | Modern reusable UI components |
| lucide-react | Beautiful icon library |
| sonner | Toast notifications |

Install all frontend dependencies using:

```bash
npm install
```

---

# 🌐 REST API Documentation

The backend follows REST API principles.

Base URL

```
http://localhost:5000/api
```

---

# 🔐 Authentication

## Register User

**POST**

```
/auth/register
```

### Request Body

```json
{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
}
```

### Success Response

```json
{
    "success": true,
    "message": "User registered successfully"
}
```

---

## Login User

**POST**

```
/auth/login
```

### Request Body

```json
{
    "email": "john@example.com",
    "password": "password123"
}
```

### Success Response

```json
{
    "success": true,
    "message": "User logged in successfully",
    "token": "JWT_TOKEN",
    "user": {}
}
```

---

# 📊 Dashboard

## Get Dashboard Statistics

**GET**

```
/dashboard
```

Returns

- Total Products
- Total Categories
- Low Stock Products
- Inventory Value

---

# 📦 Products API

## Get All Products

**GET**

```
/products
```

Returns all products created by the logged-in user.

---

## Get Product By ID

**GET**

```
/products/:id
```

Returns a single product.

---

## Create Product

**POST**

```
/products
```

Example Request

```json
{
    "name": "Wireless Mouse",
    "description": "Mechanical Gaming Mouse",
    "category": "CATEGORY_ID",
    "price": 1200,
    "quantity": 10,
    "sku": "WM-001",
    "lowStockThreshold": 5
}
```

---

## Update Product

**PUT**

```
/products/:id
```

Updates an existing product.

---

## Delete Product

**DELETE**

```
/products/:id
```

Deletes a product.

---

## Update Product Stock

**PATCH**

```
/products/:id/stock
```

Example Request

```json
{
    "quantity": 20
}
```

---

## Get Low Stock Products

**GET**

```
/products/low-stock
```

Returns all products whose quantity is less than or equal to the configured threshold.

---

# 📂 Categories API

## Get All Categories

**GET**

```
/categories
```

Returns all available categories.

---

## Create Category

**POST**

```
/categories
```

Example Request

```json
{
    "name": "Electronics",
    "description": "Electronic Devices"
}
```

---

## Update Category

**PUT**

```
/categories/:id
```

Updates a category.

---

## Delete Category

**DELETE**

```
/categories/:id
```

Deletes a category.

---

# 🗄 Database Schema Overview

The project uses **MongoDB** with **Mongoose**.

---

## User Collection

| Field | Type |
|--------|------|
| name | String |
| email | String |
| password | String |

---

## Category Collection

| Field | Type |
|--------|------|
| name | String |
| description | String |
| createdAt | Date |
| updatedAt | Date |

---

## Product Collection

| Field | Type |
|--------|------|
| name | String |
| description | String |
| category | ObjectId |
| price | Number |
| quantity | Number |
| sku | String |
| lowStockThreshold | Number |
| createdBy | ObjectId |
| createdAt | Date |
| updatedAt | Date |

---

# 🔗 Entity Relationships

```
User (1)
   │
   │ creates
   ▼
Product (Many)
   │
   │ belongs to
   ▼
Category (1)
```

Each authenticated user can create multiple products.

Each product belongs to one category.

Categories are shared across all users.

---

# 📁 Folder Explanation

## Backend

```
config/
```

Database configuration.

```
controllers/
```

Contains business logic for handling requests.

```
middleware/
```

Authentication and validation middleware.

```
models/
```

MongoDB schemas.

```
routes/
```

API route definitions.

```
validators/
```

Zod validation schemas.

---

## Frontend

```
components/
```

Reusable UI components.

```
pages/
```

Application pages.

```
layouts/
```

Sidebar and dashboard layout.

```
services/
```

Axios API configuration.

```
routes/
```

Protected route logic.

```
App.jsx
```

Application routing.

---

The project follows a modular architecture, making it easier to maintain and extend as new features are added.
# 📚 Backend Dependencies

The backend uses the following packages.

| Package | Purpose |
|----------|----------|
| express | Web framework used to create REST APIs |
| mongoose | Object Data Modeling (ODM) library for MongoDB |
| jsonwebtoken | Generates and verifies JWT tokens |
| bcrypt | Hashes user passwords before storing them |
| zod | Validates incoming request data |
| dotenv | Loads environment variables from the `.env` file |
| cors | Enables communication between frontend and backend |
| nodemon | Automatically restarts the server during development |

All backend dependencies are automatically installed using:

```bash
npm install
```

---

# 🎨 Frontend Dependencies

The frontend uses the following packages.

| Package | Purpose |
|----------|----------|
| react | Frontend JavaScript library |
| vite | Development server and build tool |
| react-router-dom | Client-side routing |
| axios | HTTP client for API communication |
| tailwindcss | Utility-first CSS framework |
| shadcn/ui | Modern reusable UI components |
| lucide-react | Beautiful icon library |
| sonner | Toast notifications |

Install all frontend dependencies using:

```bash
npm install
```

---

# 🌐 REST API Documentation

The backend follows REST API principles.

Base URL

```
http://localhost:5000/api
```

---

# 🔐 Authentication

## Register User

**POST**

```
/auth/register
```

### Request Body

```json
{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
}
```

### Success Response

```json
{
    "success": true,
    "message": "User registered successfully"
}
```

---

## Login User

**POST**

```
/auth/login
```

### Request Body

```json
{
    "email": "john@example.com",
    "password": "password123"
}
```

### Success Response

```json
{
    "success": true,
    "message": "User logged in successfully",
    "token": "JWT_TOKEN",
    "user": {}
}
```

---

# 📊 Dashboard

## Get Dashboard Statistics

**GET**

```
/dashboard
```

Returns

- Total Products
- Total Categories
- Low Stock Products
- Inventory Value

---

# 📦 Products API

## Get All Products

**GET**

```
/products
```

Returns all products created by the logged-in user.

---

## Get Product By ID

**GET**

```
/products/:id
```

Returns a single product.

---

## Create Product

**POST**

```
/products
```

Example Request

```json
{
    "name": "Wireless Mouse",
    "description": "Mechanical Gaming Mouse",
    "category": "CATEGORY_ID",
    "price": 1200,
    "quantity": 10,
    "sku": "WM-001",
    "lowStockThreshold": 5
}
```

---

## Update Product

**PUT**

```
/products/:id
```

Updates an existing product.

---

## Delete Product

**DELETE**

```
/products/:id
```

Deletes a product.

---

## Update Product Stock

**PATCH**

```
/products/:id/stock
```

Example Request

```json
{
    "quantity": 20
}
```

---

## Get Low Stock Products

**GET**

```
/products/low-stock
```

Returns all products whose quantity is less than or equal to the configured threshold.

---

# 📂 Categories API

## Get All Categories

**GET**

```
/categories
```

Returns all available categories.

---

## Create Category

**POST**

```
/categories
```

Example Request

```json
{
    "name": "Electronics",
    "description": "Electronic Devices"
}
```

---

## Update Category

**PUT**

```
/categories/:id
```

Updates a category.

---

## Delete Category

**DELETE**

```
/categories/:id
```

Deletes a category.

---

# 🗄 Database Schema Overview

The project uses **MongoDB** with **Mongoose**.

---

## User Collection

| Field | Type |
|--------|------|
| name | String |
| email | String |
| password | String |

---

## Category Collection

| Field | Type |
|--------|------|
| name | String |
| description | String |
| createdAt | Date |
| updatedAt | Date |

---

## Product Collection

| Field | Type |
|--------|------|
| name | String |
| description | String |
| category | ObjectId |
| price | Number |
| quantity | Number |
| sku | String |
| lowStockThreshold | Number |
| createdBy | ObjectId |
| createdAt | Date |
| updatedAt | Date |

---

# 🔗 Entity Relationships

```
User (1)
   │
   │ creates
   ▼
Product (Many)
   │
   │ belongs to
   ▼
Category (1)
```

Each authenticated user can create multiple products.

Each product belongs to one category.

Categories are shared across all users.

---

# 📁 Folder Explanation

## Backend

```
config/
```

Database configuration.

```
controllers/
```

Contains business logic for handling requests.

```
middleware/
```

Authentication and validation middleware.

```
models/
```

MongoDB schemas.

```
routes/
```

API route definitions.

```
validators/
```

Zod validation schemas.

---

## Frontend

```
components/
```

Reusable UI components.

```
pages/
```

Application pages.

```
layouts/
```

Sidebar and dashboard layout.

```
services/
```

Axios API configuration.

```
routes/
```

Protected route logic.

```
App.jsx
```
Application routing.
---
The project follows a modular architecture, making it easier to maintain and extend as new features are added.
---

# 🔐 Authentication Flow

The application uses **JSON Web Tokens (JWT)** to authenticate users and protect private routes.

### Authentication Process

```text
            Register
                │
                ▼
      Password is Hashed
         using bcrypt
                │
                ▼
      User Stored in MongoDB
                │
                ▼
             Login
                │
                ▼
      JWT Token Generated
                │
                ▼
  Token Sent to Frontend
                │
                ▼
Stored in Local Storage
                │
                ▼
Included in Authorization Header
                │
                ▼
Protected Backend Routes
```

Every protected API request requires a valid JWT token.

---

# 🛡 Security Features

The project follows several security best practices:

- 🔒 Passwords are hashed using **bcrypt**
- 🔑 JWT Authentication protects private routes
- ✅ Request validation using **Zod**
- 👤 Users can only access their own products
- 🚫 Unauthorized API requests are blocked
- 🛡 Protected frontend routes prevent unauthenticated access

---

# 📸 Screenshots

> Replace the placeholders below with screenshots from your application.

## Login Page

<img width="1917" height="948" alt="image" src="https://github.com/user-attachments/assets/e89adfea-f7c2-465f-ade9-59a07e62666c" />


---

## Register Page

<img width="1917" height="922" alt="image" src="https://github.com/user-attachments/assets/3ffcc159-1071-4815-90f5-d1b8db1a6958" />


---

## Dashboard

<img width="1915" height="918" alt="image" src="https://github.com/user-attachments/assets/596f803e-f6bc-4d9c-adb3-ed75fc9c1f86" />


---

## Products

<img width="1868" height="873" alt="image" src="https://github.com/user-attachments/assets/66af788c-4833-41c2-9dab-bb88149cf42d" />


---



## Low Stock

<img width="1913" height="893" alt="image" src="https://github.com/user-attachments/assets/58e043aa-83d0-485b-a8e4-de83efe544c7" />


---

# ❓ Frequently Asked Questions (FAQ)

### 1. Do I need to install every package manually?

**No.**

Simply run:

```bash
npm install
```

inside both the **Backend** and **Frontend** folders.

All required packages are automatically installed from the `package.json` files.

---

### 2. Why is there no `requirements.txt`?

`requirements.txt` is used in Python projects.

This project uses **Node.js**, where dependencies are managed using **package.json**.

---

### 3. Can I use MongoDB Atlas?

Yes.

Just replace the `MONGO_URI` value inside your `.env` file with your MongoDB Atlas connection string.

---

### 4. Can I use Local MongoDB?

Yes.

Example:

```env
MONGO_URI=mongodb://127.0.0.1:27017/inventory
```

---

### 5. Where is the JWT token stored?

Currently the token is stored in **Local Storage** after a successful login.

---

# 🛠 Troubleshooting

## MongoDB Connection Error

**Possible Causes**

- Incorrect `MONGO_URI`
- MongoDB server not running
- Invalid database credentials

Solution:

- Verify your `.env` file.
- Check your MongoDB Atlas network access settings.
- Ensure your database is running.

---

## Port Already in Use

If port **5000** is already in use:

Change:

```env
PORT=5000
```

to

```env
PORT=5001
```

Restart the backend.

---

## Frontend Cannot Connect to Backend

Make sure:

- Backend is running
- Frontend is running
- Axios base URL points to the correct backend address

Example:

```
http://localhost:5000/api
```

---

## Invalid Token Error

If you receive authentication errors:

- Logout
- Login again
- Ensure the Authorization header includes:

```
Bearer <your_token>
```

---

## npm install Fails

Try:

```bash
npm cache clean --force
```

Then:

```bash
npm install
```

---

# 🚀 Future Improvements

Some ideas for future development:

- 📸 Product Image Upload
- 📊 Advanced Analytics Dashboard
- 📈 Sales Reports
- 📤 Export Inventory to Excel/PDF
- 📷 Barcode Scanner Integration
- 🔔 Email Notifications for Low Stock
- 👥 Role-Based Access Control (Admin/Employee)
- 📱 Progressive Web App (PWA)
- 🌙 Light/Dark Theme Toggle
- 📦 Inventory History & Audit Logs

---

# 🤝 Contributing

Contributions are welcome!

To contribute:

1. Fork the repository.
2. Create a new branch.

```bash
git checkout -b feature/your-feature-name
```

3. Commit your changes.

```bash
git commit -m "Add your feature"
```

4. Push your branch.

```bash
git push origin feature/your-feature-name
```

5. Open a Pull Request.

Please ensure your code follows the existing project structure and coding style.

---

# 📄 License

This project is licensed under the **MIT License**.

You are free to use, modify, and distribute this project in accordance with the license terms.

---

# 👨‍💻 Author

## Om Urkude

**MCA Final Year Student**

Passionate about Full Stack Development and building scalable web applications using the MERN Stack.

### Connect with Me

**GitHub**

```
https://github.com/Omurkude
```

**LinkedIn**

```
https://www.linkedin.com/in/om-urkude-3363b523b/
```

---

# ⭐ Support

If you found this project helpful:

- ⭐ Star this repository
- 🍴 Fork the project
- 🛠 Suggest improvements
- 🐞 Report issues

Your support helps improve the project and encourages future development.

---

<p align="center">

Made with ❤️ using the MERN Stack

</p>
