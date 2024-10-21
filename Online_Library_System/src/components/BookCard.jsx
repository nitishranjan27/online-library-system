import React from 'react';
import { Link } from 'react-router-dom';
import "../style/BookCard.css";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <h3 className="book-title">{book.title}</h3>
      <p className="book-author">Author: {book.author}</p>
      <p className="book-category">Category: {book.category}</p>
      <p className="book-rating">Rating: {book.rating}</p>
      <Link className="book-details-link" to={`/book/${book.id}`}>View Details</Link>
    </div>
  );
};

export default BookCard;