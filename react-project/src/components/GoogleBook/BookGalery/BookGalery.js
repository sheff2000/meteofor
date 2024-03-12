import './BookGalery.css';

function BookGalery({ books, onAuthorClick, onAddToFavorites, booksFavorite }) {
    return (
      <div>
        {books.map((book) => (
            <div className="row" key={book.id}>
                <div className="col-md-3">
                    {book.volumeInfo.imageLinks?.smallThumbnail ? (
                        <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="book"/>
                    ) : (
                        <span>No image</span>
                    )}
                </div>
                <div className="col-md-3">
                    <b>Published Date</b><br/>
                    {book.volumeInfo.publishedDate}
                    <div className="fav-btn-add">
                        <button className="btn btn-outline-secondary"
                            onClick={() => onAddToFavorites(book)}
                            disabled={booksFavorite.some(favorite => favorite.id === book.id)}>
                            to favorite
                        </button>
                    </div>
                </div>
                <div className="col-md-3">
                    <b>Author:</b><br/>
                    {
                        book.volumeInfo.authors?.length > 0 ? (
                            book.volumeInfo.authors.map((autor, index) => (
                                <button onClick={() => onAuthorClick(autor)} className="btn btn-link" key={index}>
                                    {autor} jjj
                                </button>
                            ))
                        ): <span>No authors listed</span>
                    }
                </div>
                <div className="col-md-3">
                    <b>Name Book</b><br/>
                    {book.volumeInfo.title}
                </div>
            </div>
        ))}
      </div>
    );
  }

  export default BookGalery;