import './User.css';

function User({ photo, cena, name }) {
    return (
      <div className="product">
        <div className='stroka'>
            <div className='info'>
                <div className='title'>
                    {name}
                </div>
                <div className='cena'>
                    {cena} грн.
                </div>
            </div>
            <div className='foto'>
                <img src={photo} alt="User" />
            </div>
        </div>
        <input type='submit' value="Buy" />
      </div>
    );
  }
  
export default User;