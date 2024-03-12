import React, { useState, useEffect } from 'react';
import ApiBooks from '../../../api/booksAPI';

function AuthorDetails({ author }) {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      if (author) {
        const fetchedBooks = await ApiBooks.searchBooksByAutor(author);
        setBooks(fetchedBooks || []);
      }
    };
    fetchBooks();
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
