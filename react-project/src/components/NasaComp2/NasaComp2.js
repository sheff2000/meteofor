import React, { useEffect, useState } from 'react';
import './NasaComp2.css';

function NasaComp2() {
  const [nasaFotoMars, setDataMars] = useState(null);
  
  useEffect(() => {
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=10&api_key=a2yu3v3vBsbH7rqPA23mHvDcIzv4pnfSR3yNmWYo')
      .then(response => response.json())
      .then(nasaFotoMars => setDataMars(nasaFotoMars))
      .catch(error => console.error('ERRORRR:', error));
  }, []);

  console.log(nasaFotoMars);
  return (
    <div>
      {nasaFotoMars ?
      <div>
        {nasaFotoMars.photos.map((element, index) => (
            <img key={index} src={element.img_src} alt={'NASA Mars Rover image'} className='img-thumbnail'/>
          ))}
      </div> : <div>Загрузка...</div>}
    </div>
  );
}

export default NasaComp2;