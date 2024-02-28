import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './components/App/App';
// import Item from './components/Item/Item';
import User from './components/User/User';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='main-cont'>
      <User 
        photo="https://yellow.ua/media/catalog/product/cache/9/small_image/196x196/9df78eab33525d08d6e5fb8d27136e95/0/1/x01ff427ac937042aaf67a273569c46b4_7.jpg.pagespeed.ic.GIw5K3oAPk.webp"
        cena="9250"
        name="Aplple Iphone PRo ultra" />
      <User 
        photo="https://yellow.ua/media/catalog/product/cache/9/small_image/196x196/9df78eab33525d08d6e5fb8d27136e95/0/1/x01ff427ac937042aaf67a273569c46b4_7.jpg.pagespeed.ic.GIw5K3oAPk.webp"
        cena="9250"
        name="Aplple Iphone PRo ultra" />
      <User 
        photo="https://yellow.ua/media/catalog/product/cache/9/small_image/196x196/9df78eab33525d08d6e5fb8d27136e95/0/1/x01ff427ac937042aaf67a273569c46b4_7.jpg.pagespeed.ic.GIw5K3oAPk.webp"
        cena="9250"
        name="Aplple Iphone PRo ultra" />
      <User 
        photo="https://yellow.ua/media/catalog/product/cache/9/small_image/196x196/9df78eab33525d08d6e5fb8d27136e95/0/1/x01ff427ac937042aaf67a273569c46b4_7.jpg.pagespeed.ic.GIw5K3oAPk.webp"
        cena="9250"
        name="Aplple Iphone PRo ultra" />
      <User 
        photo="https://yellow.ua/media/catalog/product/cache/9/small_image/196x196/9df78eab33525d08d6e5fb8d27136e95/0/1/x01ff427ac937042aaf67a273569c46b4_7.jpg.pagespeed.ic.GIw5K3oAPk.webp"
        cena="9250"
        name="Aplple Iphone PRo ultra" />
      <User 
        photo="https://yellow.ua/media/catalog/product/cache/9/small_image/196x196/9df78eab33525d08d6e5fb8d27136e95/0/1/x01ff427ac937042aaf67a273569c46b4_7.jpg.pagespeed.ic.GIw5K3oAPk.webp"
        cena="9250"
        name="Aplple Iphone PRo ultra" />
      
    </div>
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
