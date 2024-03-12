import React, { useState } from 'react';
import ApiBooks from '../../../api/booksAPI';
import './App.css';

import InputBookName from '../InputBookName/InputBookName';
import BookGalery from '../BookGalery/BookGalery';
import SortBooks from '../SortBooks/SortBooks';
import AuthorDetails from '../AuthorDetails/AuthorDetails';
import BookFavorite from '../BookFavorite/BookFavorite';

function App() {
    const [books, setBooks] = useState([]);
    const [selectedAuthor, setSelectedAuthor] = useState(null);
    const [booksFavorite, setBooksFavorite] = useState([]);

    const handleAuthorClick = (author) => {
        setSelectedAuthor(author);
    };
    const addBookToFavorites = (book) => {
      const isBookAlreadyAdded = booksFavorite.some(favorite => favorite.id === book.id);
      if (!isBookAlreadyAdded) {
        setBooksFavorite([...booksFavorite, book]);
      }
    };
  
    const searchBooks = async (query) => {
        if (!query) {
            setBooks([]);
            return;
        }
        
        setBooks(await ApiBooks.searchBooks(query) || []);
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
        <div className='row header-t1'>
          <div className='col-12'>
            <InputBookName onSearch={searchBooks} onAuthorClick={handleAuthorClick}/>
          </div>
        </div>
        <div className='row header-t2'>
          <div className='col-12'>
            {books?.length > 0 ? (
              <SortBooks onSort={sortBooks} />
            ): <span></span>
          }
          </div>
        </div>
        <div className='row'> 
            <div className='col-8 books-box'>
                {books?.length > 0 ? ( 
                        <BookGalery books={books} onAddToFavorites={addBookToFavorites} booksFavorite={booksFavorite}/>
                    ) : (
                        <span className='nosearch'>no search books ...</span>
                )}
                <AuthorDetails author={selectedAuthor} />
            </div>
            <div className='col-4 books-box'>
              <h3>Favorite Books</h3>
              <BookFavorite books={booksFavorite} />
            </div>
        </div>
    </div>
  );
}

export default App;