function SortBooks({ onSort }) {
    return (
      <div className="btn-group">
        <button onClick={() => onSort('asc')} className="btn btn-sm btn-outline-success">По возрастанию</button>
        <button onClick={() => onSort('desc')} className="btn btn-sm btn-outline-warning">По убыванию</button>
      </div>
    );
  }

  
  export default SortBooks;