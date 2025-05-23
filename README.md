# Library Management App

A simple library management application built with Node.js, Express, MongoDB, and Mongoose, following the Hexagonal Architecture (Ports and Adapters).  
The app allows CRUD operations for both books and users, and manages book loans.

## Features

- **Books:** Create, read, update, and delete books in the library.
- **Users:** Manage library users who can borrow books.
- **Loans:** Register and track book loans and returns.
- **Hexagonal Architecture:** Clean separation of business logic, infrastructure, and adapters.

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- Hexagonal Architecture

## Getting Started

1. **Clone the repository:**

   ```
   git clone https://github.com/joseanher81/hexagonal-library.git
   cd hexagonal-library

   ```

2. **Install dependencies:**

   ```
   npm install
   ```

3. **Start MongoDB:**
   Make sure you have MongoDB running locally on `mongodb://localhost:27017`.

4. **Run the app:**
   ```
   npm start
   ```
   The server will start on `http://localhost:3000`.

## API Endpoints

### Books

- `POST /books` - Create a new book
- `GET /books` - List all books
- `GET /books/:id` - Get a book by ID
- `PUT /books/:id` - Update a book
- `DELETE /books/:id` - Delete a book

### Users

- `POST /users` - Create a new user
- `GET /users` - List all users
- `GET /users/:id` - Get a user by ID
- `PUT /users/:id` - Update a user
- `DELETE /users/:id` - Delete a user

### Loans

- `POST /loans` - Register a new loan
- `GET /loans` - List all loans
- `PUT /loans/:id/return` - Return a borrowed book

## License

MIT

---

_This project is for educational purposes and demonstrates clean architecture principles in a Node.js application._
