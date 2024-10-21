import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import BookCard from './BookCard';
import "../style/BrowseBooks.css";

const BrowseBooks = () => {
  const books = useSelector((state) => state.books.books);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [];
  books.forEach((book) => {
    if (!categories.includes(book.category)) {
      categories.push(book.category);
    }
  });
  
  const filteredBooks = books.filter((book) => {
    const matchesSearchTerm =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory
      ? book.category.toLowerCase() === selectedCategory.toLowerCase()
      : true;

    return matchesSearchTerm && matchesCategory;
  });

  return (
    <div className="browse-books-container">
      <h2 className="page-title">Browse Books</h2>

      <input
        type="text"
        className="search-input"
        placeholder="Search by title or author"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <select
        className="category-select"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>{category}</option> 
        ))}
      </select>

      <div className="book-list">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => <BookCard key={book.id} book={book} />)
        ) : (
          <p className="no-books-message">No books found.</p>
        )}
      </div>
    </div>
  );
};

export default BrowseBooks;