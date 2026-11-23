import React from 'react';
import LibraryButton from './LibraryButton';

const books = [
  { id: 1, name: 'Things Fall Apart', price: '$10' },
  { id: 2, name: 'Half of a Yellow Sun', price: '$12' },
  { id: 3, name: 'A Grain of Wheat', price: '$9' },
];

const LibraryHome = ({ goToLogin }) => {
  return (
    <div>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.name} - {book.price}
          </li>
        ))}
      </ul>

      <LibraryButton ButtonLabel="Login" actionButton={goToLogin} />
    </div>
  );
};

export default LibraryHome;