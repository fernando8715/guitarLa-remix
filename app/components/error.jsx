import { Link } from '@remix-run/react'


export const Error = ({ error }) => {
    return (
        <div className='contenedor__error'>
            <h2 className='heading' >Oops algo salio mal, ruta no encontrada</h2>
            <p className='error'>Status: {error.status}</p>
            <p className='errorText'>{error.statusText}</p>

            <Link 
                className='enlace'
                to={'/tienda'}
            >
                retornar a la tienda
            </Link>

        </div>
    )
}
