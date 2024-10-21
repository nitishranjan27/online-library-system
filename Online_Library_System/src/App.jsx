import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import BrowseBooks from './components/BrowseBooks';
import AddBookForm from './components/AddBookForm';
import BookDetails from './components/BookDetails';
import NotFound from './components/NotFound';
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/browse-books" element={<BrowseBooks />} />
        <Route path="/add-book" element={<AddBookForm />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;