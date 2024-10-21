import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';
import "../style/AddBookForm.css"; 

const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [error, setError] = useState('');
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const books = useSelector((state) => state.books.books);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !author || !category || !description || !rating) {
      setError('All fields are required.');
      return;
    }

    const nextId = books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 1;    

    const newBook = {
        id: nextId, 
        title,
        author,
        category,
        description,
        rating: parseFloat(rating), 
      };
  
    dispatch(addBook(newBook)); 
    console.log('Books in state:', books);

    navigate('/browse-books');
  };

  return (
    <div className="add-book-container">
      <h2 className="form-title">Add a New Book</h2>
      {error && <p className="error-message">{error}</p>}
      <form className="add-book-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input 
            type="text" 
            value={title} 
            className="form-input"
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Author:</label>
          <input 
            type="text" 
            className="form-input"
            value={author} 
            onChange={(e) => setAuthor(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Category:</label>
          <input 
            type="text" 
            className="form-input"
            value={category} 
            onChange={(e) => setCategory(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea 
            className="form-textarea"
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Rating (1 to 5):</label>
          <input 
            type="number" 
            className="form-input"
            value={rating} 
            min="1" 
            max="5" 
            onChange={(e) => setRating(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="submit-button">Add Book</button>
      </form>
    </div>
  );
};

export default AddBookForm;