import './Product.css';

function Product({ id, title, photo, price, teg = '' }) {
    teg = teg.toUpperCase();
    const href = 'https://site.ua/product/' + id;
    return (
        <div className='product-box'>
            <div className='product-teg-row'>
                <div className='product-teg'>
                    {teg}
                </div>
            </div>
            <div className='product-main-row'>
                <div className='product-text-info'>
                    <div className='product-title'>
                        <a href={href} title='dsfds' alt='dfsdf'>{title}</a>
                    </div>
                    <div className='product-price'>{price} 
                        <span className='currency'>грн.</span>
                    </div>
                </div>
                <div className='product-foto'>
                    <img src={photo} alt={title} />
                </div>
            </div>
            <div className='product-fotter-row'>
                <div className='product-btn-buy'>
                    <span>Купити</span>
                </div>
            </div>
        </div>    
    );
  }
  
export default Product;