## Food Delivery App Backend
This is the backend for a food delivery application built using Node.js, Express.js, bcrypt, JWT tokens, and MongoDB as the database.

## Features

User authentication: Users can register, login, and access protected routes.

Restaurant dashboard: Restaurants can add new food items with details like name, description, location, and price.

Customer dashboard: Customers can order food, view their cart, and manage their addresses.

## Setup
Clone the repository:

git clone <repository-url>

Install dependencies:

cd food-delivery-backend

npm install

Configure environment variables:Create a .env file in the root directory and configure the following variables:

plaintext


MONGODB_URI=<mongodb-uri>

npm run server

The server should now be running on http://localhost:8080.

## Tech Stack

Node.js: A JavaScript runtime environment for building scalable and efficient server-side applications.

Express.js: A minimalist web framework for Node.js that provides a robust set of features for web and mobile applications.

bcrypt: A library for hashing passwords securely, used for user authentication.

JWT token: JSON Web Tokens are used for user authentication and authorization.

MongoDB: A NoSQL database used for storing application data.

