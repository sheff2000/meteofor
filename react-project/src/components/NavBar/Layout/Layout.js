import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
    const location = useLocation(); // Получаем текущий путь

    // Функция для проверки, является ли ссылка активной
    const isActive = (pathname) => location.pathname === pathname;
    return (
        <div className="main-content">
        <nav>
        <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Menu Drop
                </button>
                <ul className="dropdown-menu">
                    <li><Link to="/" className={isActive('/') ? 'dropdown-item active' : 'dropdown-item'}>Home</Link></li>
                    <li><Link to="/privatbank" className={isActive('/privatbank') ? 'dropdown-item active' : 'dropdown-item'}>PrivatBank</Link></li>
                    <li><Link to="/google-book" className={isActive('/google-book') ? 'dropdown-item active' : 'dropdown-item'}>Google Book</Link></li>
                </ul>
            </div>
        </nav>

        <Outlet />
        </div>
  )
};

export default Layout;