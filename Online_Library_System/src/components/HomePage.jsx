import React from 'react';
import { useSelector } from 'react-redux';
import BookCard from './BookCard';
import "../style/HomePage.css"

const HomePage = () => {
  const books = useSelector((state) => state.books.books); 
  const popularBooks = books.slice(0, 4); 

  return (
    <div className="homepage-container">
      <h2 className="homepage-title">Welcome to the Online Library</h2>
      <h3 className="homepage-subtitle">Popular Books</h3>
      <div className="book-list">
        {popularBooks.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;