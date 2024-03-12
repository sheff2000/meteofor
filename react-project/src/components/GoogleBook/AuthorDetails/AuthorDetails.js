import React, { useState, useEffect } from 'react';

function AuthorDetails({ author }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    if (author) {
      const URL = `https://www.googleapis.com/books/v1/volumes?q=inauthor:${encodeURIComponent(author)}`;

      fetch(URL)
        .then(response => response.json())
        .then(data => setBooks(data.items || []))
        .catch(error => console.error('Ошибка:', error));
    }
  }, [author]);

  if (!author) return null;

  return (
    <div>
      <h2>Книги автора: {author}</h2>
      {books.map(book => (
        <div key={book.id}>{book.volumeInfo.title}</div>
      ))}
    </div>
  );
}

export default AuthorDetails;