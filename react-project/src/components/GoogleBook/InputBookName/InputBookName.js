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
      onChange={handleChange}
      placeholder="Поиск книг..."
    />
  );
}

export default InputBookName;