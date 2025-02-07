import React from 'react';

const ReadingList = ({ books, deleteBook }) => {
  return (
    <div>
      <h1>My Reading List</h1>
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <h2>{book.title}</h2>
            <p>{book.reason}</p>
            <button onClick={() => deleteBook(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReadingList;
