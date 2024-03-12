function BookGalery({ books, bookvf, onAuthorClick }) {
    if (!books.length) {
      return (
        <div>
            <div>Нет результатов</div>
            <ul>
                {books.map((book) => (
                    <div className="row" key={book.id}>
                        <div className="col-md-3"> 
                        FAVORITE !!!! <br/>
                            Image <br/>
                            <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="book"/>
                        </div>
                        <div className="col-md-3">
                            <b>Published Date</b><br/>
                            {book.volumeInfo.publishedDate}
                        </div>
                        <div className="col-md-3">
                            <b>Author:</b><br/>
                            <button onClick={() => onAuthorClick(book.volumeInfo.authors[0])} className="btn btn-link">
                            {book.volumeInfo.authors}
                            </button>
                        </div>
                        <div className="col-md-3">
                            <b>Name Book</b><br/>
                            {book.volumeInfo.title}
                        </div>
                    </div>
                ))}
            </ul>
        </div>
      );
    }
  
    return (
      <ul>
        {books.map((book) => (
            <div className="row" key={book.id}>
                <div className="col-md-3">
                    Image <br/>
                    <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="book"/>
                </div>
                <div className="col-md-3">
                    <b>Published Date</b><br/>
                    {book.volumeInfo.publishedDate}
                </div>
                <div className="col-md-3">
                    <b>Author:</b><br/>
                    <button onClick={() => onAuthorClick(book.volumeInfo.authors[0])} className="btn btn-link">
                      {book.volumeInfo.authors}
                    </button>
                </div>
                <div className="col-md-3">
                    <b>Name Book</b><br/>
                    {book.volumeInfo.title}
                </div>
            </div>
        ))}
      </ul>
    );
  }

  export default BookGalery;