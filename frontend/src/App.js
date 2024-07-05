import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import ReadingList from './components/ReadingList';
import AddBookForm from './components/AddBookForm';

const API_BASE_URL = 'http://127.0.0.1:5000/api'

const App = () => {
  const [books, setBooks] = useState([]);

  // バックエンドAPIからデータ取得
  useEffect(() => {
    fetch(`${API_BASE_URL}/books`)
    .then(response => response.json())
    .then(data => setBooks(data));
  }, []);

  const addBook = (book) => {
    fetch(`${API_BASE_URL}/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    })
    .then(response => response.json())
    .then(newBook => setBooks([...books, newBook]));
  };

  const deleteBook = (bookId) => {
    fetch(`${API_BASE_URL}/books/${bookId}`, {
      method: 'DELETE'
    })
    .then(() => setBooks(books.filter(book => book.id !== bookId)));
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/reading-list">Reading List</Link>
            </li>
            <li>
              <Link to="/add-book">Add Book</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reading-list" element={<ReadingList books={books} deleteBook={deleteBook} />} />
          <Route path="/add-book" element={<AddBookForm addBook={addBook} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
