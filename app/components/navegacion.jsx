import {Link, useLocation} from '@remix-run/react';

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
                to='/tienda'
                className={location.pathname === '/tienda' ? 'active' : ''}
            >Tienda</Link>
            <Link
                to='/blogs'
                className={location.pathname === '/blogs' ? 'active' : ''}
            >Blog</Link>
        </nav>

    )
}
