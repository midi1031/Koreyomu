import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import ReadingList from './components/ReadingList';
import AddBookForm from './components/AddBookForm';

const App = () => {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks([...books, book]);
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
          <Route path="/reading-list" element={<ReadingList books={books} />} />
          <Route path="/add-book" element={<AddBookForm addBook={addBook} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
