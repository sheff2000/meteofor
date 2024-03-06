import React, { useState } from 'react';

function ImageLoad({ src, alt }) {
    const [loaded, setLoaded] = useState(false);
  
    return (
      <div>
        {!loaded && <div>Загрузка...</div>}
        <img
          src={src}
          alt={alt}
          style={{ display: loaded ? 'block' : 'none', margin: '10px', height: '100px' }}
          onLoad={() => setLoaded(true)}
          className='img-thumbnail'
        />
      </div>
    );
  }

  export default ImageLoad;