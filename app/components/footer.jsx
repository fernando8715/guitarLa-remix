import { Navegacion } from './navegacion';

export const Footer = () => {

    return (
        <footer className="footer">
            <div className="contenedor contenido">
                <Navegacion />
                <p className='copyRight'>Copyright Todos los derechos reservados</p>
            </div>
        </footer>
    )
}
