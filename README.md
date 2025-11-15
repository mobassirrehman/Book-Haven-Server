# Book Haven Server

Backend API server for Book Haven - A digital library management system built with Node.js, Express, and MongoDB.


## 🛠️ Technologies Used

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 🚀 Features

- RESTful API endpoints for book management
- CRUD operations (Create, Read, Update, Delete)
- User-specific book retrieval
- Comment system for books
- Latest and top-rated books filtering
- MongoDB Atlas integration

## 📡 API Endpoints

- `GET /books` - Get all books
- `GET /books/latest` - Get 6 latest books
- `GET /books/top-rated` - Get top 3 rated books
- `GET /books/:id` - Get single book
- `GET /books/user/:email` - Get user's books
- `POST /books` - Add new book
- `PUT /books/:id` - Update book
- `DELETE /books/:id` - Delete book
- `GET /comments/:bookId` - Get comments for a book
- `POST /comments` - Add new comment
- `DELETE /comments/:id` - Delete comment

## 👨‍💻 Developer

**The Grim**
- GitHub: [@mobassirrehman](https://github.com/mobassirrehman)
- Email: mobassir.rehman@icloud.com