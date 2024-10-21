import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import "../style/BookDetails.css";

const BookDetails = () => {
  const { id } = useParams();
  const books = useSelector((state) => state.books.books);

  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return (
      <div className="book-details-container">
        <h2 className="error-message">Book not found</h2>
        <Link className="back-link" to="/browse-books">Back to Browse Books</Link>
      </div>
    );
  }

  return (
    <div className="book-details-container">
      <h2 className="book-title">{book.title}</h2>
      <p className="book-detail"><strong>Author:</strong> {book.author}</p>
      <p className="book-detail"><strong>Category:</strong> {book.category}</p>
      <p className="book-detail"><strong>Description:</strong> {book.description}</p>
      <p className="book-detail"><strong>Rating:</strong> {book.rating}</p>
      <Link className="back-link" to="/browse-books">Back to Browse Books</Link>
    </div>
  );
};

export default BookDetails;