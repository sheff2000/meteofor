import './BookFavorite.css';

function BookFavorite({ books }) {
    return (
      <div>
        {books.map((book) => (
            <div className="row" key={book.id}>
                <div className="col-md-6">
                    {book.volumeInfo.imageLinks?.smallThumbnail ? (
                        <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="book"/>
                    ) : (
                        <span>No image</span>
                    )}
                </div>
                <div className="col-md-6">
                    <b>Name Book</b><br/>
                    {book.volumeInfo.title}<br/>
                    <b>Published Date</b><br/>
                    {book.volumeInfo.publishedDate}
                    <b>Author:</b><br/>
                    {book.volumeInfo.authors}
                </div>
            </div>
        ))}
      </div>
    );
  }

  export default BookFavorite;