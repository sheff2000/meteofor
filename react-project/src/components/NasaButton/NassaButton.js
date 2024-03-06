import React, { useState } from 'react';
import './NassaButton.css';
import TestApi from '../TestApi/TestApi';
import NasaComp2 from '../NasaComp2/NasaComp2';

function App() {
  const [visibleComp, setVisibleComp] = useState(null);

  return (
    <div>
        <h1>NASA API Controller</h1>  
        <button onClick={() => setVisibleComp('nasa1')} className='btn btn-outline-danger btn-lg'>
            Показать APOD
        </button>
        <button onClick={() => setVisibleComp('nasa2')} className='btn btn-outline-success btn-lg'>
            Показать MARS
        </button>

        {visibleComp === 'nasa1' && <TestApi countFoto={5}/>}
        {visibleComp === 'nasa2' && <NasaComp2 />}
    </div>
  );
}

export default App;