import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    { id: 1, title: '1984', author: 'George Orwell', category: 'Fiction', description: 'Dystopian novel', rating: 5 },
    { id: 2, title: 'Dune', author: 'Frank Herbert', category: 'Sci-Fi', description: 'Epic science fiction novel', rating: 3 },
    { id: 3, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', category: 'Fiction', description: 'A critique of the American Dream', rating: 4 },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.books.push(action.payload);
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;