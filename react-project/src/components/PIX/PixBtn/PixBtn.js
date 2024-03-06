import React, { useState, useEffect } from 'react';
import ImageLoad from '../ImageLoad/ImageLoad';

function PixBtn() {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (query !== '') {
      const API_KEY = '36260057-f76ee29fab0efab93a67dea49';
      const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&per_page=4`;

      fetch(URL)
        .then(response => response.json())
        .then(data => setImages(data.hits))
        .catch(error => console.log('ШОСЬ не так (( :', error));
    }
  }, [query]);

  return (
    <div className='alert alert-light'>
        <h1>Поиск картинки</h1>
        <input
            type="text"
            className='form-control'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Начните ввод ....."
        />
        <div>
            {images.map((image) => (
                <ImageLoad src={image.webformatURL} alt={image.tags} />
            ))}
        </div>
    </div>
  );
}

export default PixBtn;
