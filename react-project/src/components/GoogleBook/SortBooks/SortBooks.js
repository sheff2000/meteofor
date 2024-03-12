import './SortBooks.css';

function SortBooks({ onSort }) {
    return (
      <div className="btn-group">
        <span className="label-sort">Сортировать по году изданя - </span>
        <button onClick={() => onSort('asc')} className="btn btn-sm btn-outline-success">По возрастанию</button>
        <button onClick={() => onSort('desc')} className="btn btn-sm btn-outline-danger">По убыванию</button>
      </div>
    );
  }

  
  export default SortBooks;