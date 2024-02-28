import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Product from './components/Product/Product';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const products = [
  {
    id: '3',
    photo: "https://yellow.ua/media/catalog/product/cache/9/small_image/196x196/9df78eab33525d08d6e5fb8d27136e95/1/9/x193812675.jpg.pagespeed.ic.4Uj4pOwLja.webp",
    price: "3330",
    title: "Внешний аккумулятор Apple MagSafe Battery... ",
    tag: "popular"
  },
  {
    id: '3',
    photo: "https://yellow.ua/media/catalog/product/cache/9/small_image/196x196/9df78eab33525d08d6e5fb8d27136e95/8/7/x8759402.jpg.pagespeed.ic.mf8paL7NVb.webp",
    price: "3999",
    title: "Монитор Xiaomi Mi 23.8\" Desktop Monitor 1C... ",
    tag: "popular"
  },
  {
    id: '3',
    photo: "https://yellow.ua/media/catalog/product/cache/9/small_image/196x196/9df78eab33525d08d6e5fb8d27136e95/q/v/xqv8lef3cru472hg4fr6hfkhr4vmu20ie.png.pagespeed.ic.9EjIQLwAX2.webp",
    price: "16049",
    title: "Apple iPad 10.9\" 2022 Wi-Fi 64GB Yellow (MPQ23)",
    tag: "popular"
  },
  {
    id: '3',
    photo: "https://yellow.ua/media/catalog/product/cache/9/small_image/196x196/9df78eab33525d08d6e5fb8d27136e95/1/0/x10692073.jpg.pagespeed.ic.E6Kl0pwmmC.webp",
    price: "13699",
    title: "Экшн-камера GoPro HERO 11 Black (CHDHX-111-RW)",
    tag: "popular"
  },
  {
    id: '3',
    photo: "https://yellow.ua/media/catalog/product/cache/9/small_image/196x196/9df78eab33525d08d6e5fb8d27136e95/2/8/x281506329_1.jpg.pagespeed.ic.mbOPfL3Aw8.webp",
    price: "41799",
    title: "Смартфон Samsung Galaxy Fold4 12/512GB Beige... ",
    tag: "popular"
  },
  {
    id: '3',
    photo: "https://yellow.ua/media/catalog/product/cache/9/small_image/196x196/9df78eab33525d08d6e5fb8d27136e95/1/6/x1694173opt.jpg.pagespeed.ic.W0tKDdjUIQ.webp",
    price: "31799",
    title: "Зарядна станція BLUETTI AC180P 1440Wh/1800W",
    tag: "popular"
  },
];

root.render(
  <React.StrictMode>
    <div className='main-cont'>
      {products.map(product => (
          <Product
            key={product.id}
            id={product.id}
            photo={product.photo}
            price={product.price}
            title={product.title}
            teg={product.tag}
          />
        ))}
    </div>
    
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
