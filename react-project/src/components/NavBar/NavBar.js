import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
        Menu
        <Link to="/">Home</Link><br/>
        <Link to="/about">PixaBay</Link>
        <Link to="/about">PrivatBank</Link>
        <Link to="/about">Nasa</Link>
    </nav>
  );
}

export default NavBar;