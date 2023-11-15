import {Link, useLocation} from '@remix-run/react';
import img_carrito from '../../public/img/carrito.png';

export const Navegacion = () => {

    const location = useLocation();

    return (
        <nav className="navegacion">
            <Link
                to='/'
                className={location.pathname === '/' ? 'active' : ''}
            >Inicio</Link>
            <Link
                to='/nosotros'
                className={location.pathname === '/nosotros' ? 'active' : ''}
            >Nosotros</Link>
            <Link
                to='/guitarras'
                className={location.pathname === '/guitarras' ? 'active' : ''}
            >Tienda</Link>
            <Link
                to='/blogs'
                className={location.pathname === '/blogs' ? 'active' : ''}
            >Blog</Link>
            <Link 
                className={location.pathname === '/carrito' ? 'active' : ''}
                to='/carrito'
            >
                <img src={img_carrito} alt="Imagen de carrito de compras" />
            </Link>
        </nav>

    )
}
