import React, { useState } from 'react';

function InputBookName({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <input
      type="text"
      value={query}
      className='form-control'
      onChange={handleChange}
      placeholder="Название ..."
    />
  );
}

export default InputBookName;