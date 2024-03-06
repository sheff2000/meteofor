import React, { useEffect, useState } from 'react';
import './TestApi.css';

function TestApi({countFoto = 5}) {
  const [nasaFoto, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=a2yu3v3vBsbH7rqPA23mHvDcIzv4pnfSR3yNmWYo&count=${countFoto}`)
      .then(response => response.json())
      .then(nasaFoto => setData(nasaFoto))
      .catch(error => console.error('ERRORRR:', error));
  }, []);
  return (
    <div>
      {nasaFoto ?
      <div>
        {nasaFoto.map((element, index) => (
            <img key={index} src={element.url} alt={element.title || 'NASA image'} className='img-thumbnail' />
          ))}
      </div> : <div>Загрузка...</div>}
    </div>
  );
}

export default TestApi;