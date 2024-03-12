import React, { useState } from 'react';
import InputBookName from '../InputBookName/InputBookName';
import BookGalery from '../BookGalery/BookGalery';
import SortBooks from '../SortBooks/SortBooks';
import AuthorDetails from '../AuthorDetails/AuthorDetails';

function App() {
  const [books, setBooks] = useState([]);
  const [booksfv, setBooksvf] = useState([]);
  const [selectedAuthor, setSelectedAuthor] = useState(null);

  const handleAuthorClick = (author) => {
    setSelectedAuthor(author);
  };

  const searchBooks = (query) => {
    if (!query) {
      setBooks([]);
      return;
    }
    // const API_KEY = '';
    //const URL = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${API_KEY}`;
    const URL = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`;
    fetch(URL)
      .then(response => response.json())
      .then(data => setBooks(data.items || []))
      .catch(error => console.error('Ошибка:', error));
  };

  const setBooksFave = (book) => {
        setBooksvf(book);
  };

  const sortBooks = (direction) => {
    const sortedBooks = [...books].sort((a, b) => {
      const dateA = a.volumeInfo.publishedDate ? new Date(a.volumeInfo.publishedDate) : new Date(0);
      const dateB = b.volumeInfo.publishedDate ? new Date(b.volumeInfo.publishedDate) : new Date(0);
      return direction === 'asc' ? dateA - dateB : dateB - dateA;
    });
    setBooks(sortedBooks);
  };

  return (
    <div>
        <div className='row'>
            <div className='col-8'>
                <SortBooks onSort={sortBooks} />
                <InputBookName onSearch={searchBooks} onAuthorClick={handleAuthorClick}/>
                <BookGalery books={books} bookvf={booksfv}/>
            </div>
            <div className='col-2'>
                <AuthorDetails author={selectedAuthor} />
            </div>
        </div>
    </div>
  );
}

export default App;