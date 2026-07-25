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
