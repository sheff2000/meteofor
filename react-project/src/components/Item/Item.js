import procent from '../../graphics/procent.png';
import hart from '../../graphics/hart.png';
import vesu from '../../graphics/vesu.png';
import mainfoto from '../../graphics/itemfoto.png';
import stars from '../../graphics/stars.png';
import cart from '../../graphics/cart.png';
import './Item.css';

function Item() {
  return (
    <div className="item">
        <div className='row col-2'>
            <div className='sale'>
                <img src={procent} className='image-sale' alt='sale'/>
            </div>
            <div className='icon'>
                <img src={hart} className='image-sale' alt='sale'/> 
                <img src={vesu} className='image-sale' alt='sale'/>
            </div>
        </div>
        <div className='row'>
            <div className='main-foto-div'>
                <img src={mainfoto} className='main-foto' alt='main foto'/>
            </div>
        </div>
        <div className='row'>
            <div className='item-title'>
                Набір монет України ЗСУ "ППО - надійний щит"
            </div>
        </div>
        <div className='row'>
            <div className='item-star'>
                <img src={stars} alt='stars' className='item-stars-img'/>
            </div>
        </div>
        <div className='row col-2'>
            <div className='item-price'>
                <span className='price-old'>450 $</span>
                <span className='price-new'>379$</span>
            </div>
            <div className='item-cart'>
                <img src={cart} className='item-cart-img' alt='cart' />
            </div>
        </div>
        <div className='row'>
            <div className='item-avialible'>
                Есть в наличии
            </div>
        </div>
    </div>
  );
}

export default Item;
