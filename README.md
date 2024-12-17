#### Book Management Application
## Overview
The Book Management Application allows users to search for books, view details, and manage book records efficiently. The system supports features such as adding, editing, and deleting books, as well as searching through the books based on genres and authors.

This project is built with a React.js frontend and a Node.js backend using Express.js, with data stored in an SQLite database.

## Features
1. Home Page: A navigation bar with links to the Home, Contact, About, and Add Book sections.
2. Book Listing: Display search results in a grid/list format with pagination, and options to view, edit, or delete book details.
3. Book Details: View detailed information about a selected book, including title, author, genre, pages, and published date.
4. Book Management: Add, edit, or delete books with proper forms and validation.
5. Database Integration: Store and retrieve book, author, and genre information in an SQLite database.
Database Schema
Books Table
Field	Type	Description
BookID	Integer	Primary Key, Auto Increment
Title	Text	Title of the book
AuthorID	Integer	Foreign Key, References Authors
GenreID	Integer	Foreign Key, References Genres
Pages	Integer	Number of pages in the book
PublishedDate	Date	Publication date of the book
Genres Table
Field	Type	Description
GenreID	Integer	Primary Key, Auto Increment
Name	Text	Genre name (e.g., Fiction, Mystery)
Description	Text	Genre description
Authors Table
Field	Type	Description
AuthorID	Integer	Primary Key, Auto Increment
Name	Text	Author's name
API Endpoints
GET /books
Fetch all books.

Response:

json
Copy code
[
  {
    "BookID": 1,
    "Title": "Book Title",
    "Author": "Author Name",
    "Genre": "Genre Name",
    "Pages": 300,
    "PublishedDate": "2022-01-01"
  }
]
POST /books
Add a new book.

Request Body:

json
Copy code
{
  "Title": "New Book Title",
  "AuthorID": 1,
  "GenreID": 1,
  "Pages": 250,
  "PublishedDate": "2023-05-12"
}
Response:

json
Copy code
{
  "message": "Book added successfully"
}
PUT /books/:id
Update an existing book by its ID.

Request Body:

json
Copy code
{
  "Title": "Updated Book Title",
  "AuthorID": 1,
  "GenreID": 1,
  "Pages": 280,
  "PublishedDate": "2023-06-15"
}
Response:

json
Copy code
{
  "message": "Book updated successfully"
}
DELETE /books/:id
Delete a book by its ID.

Response:

json
Copy code
{
  "message": "Book deleted successfully"
}
Frontend Components
Home Page: Contains the navigation bar and the search section.
Search Results: Displays a list/grid of books with options to view, edit, or delete.
Book Details: A page showing detailed information of a selected book.
Add/Edit Book: Forms for adding or editing book details, with validation.
Delete Confirmation: A confirmation dialog for book deletion.
Technologies Used
Frontend: React.js, HTML, CSS, JavaScript
Backend: Node.js, Express.js, SQLite3
Database: SQLite
Development Plan
Step 1: Set up the Database
Create the Books, Authors, and Genres tables. Populate the Genres and Authors tables with sample data.

Step 2: Backend API
Develop the RESTful API for managing books, with routes for getting, adding, updating, and deleting books.

Step 3: Frontend UI
Create React components for:

Search results page
Book details page
Add/Edit book form
Book delete confirmation
Step 4: Connect Backend and Frontend
Integrate the frontend with the backend using the fetch API to perform CRUD operations on books.

