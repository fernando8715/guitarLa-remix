import { useState, useEffect } from 'react';
import {
    Meta,
    Links,
    Outlet,
    Scripts,
    LiveReload,
    useRouteError,
    isRouteErrorResponse,
    Link
} from '@remix-run/react';
import { Header, Footer } from '~/components';
import styles from '~/styles/index.css'
import icono from '../public/antal-29697.svg';


export function meta() {

    return [
        {
            title: 'GuitarLa - Remix',
        },
        {
            name: "description",
            content: "Esta app de una tienda de guitarras y cursos es construida con strapi que es un CMS y el framwork de Remix Run que es un framework para el cliente y el servidor. Utilizando HTML, CSS, javaScript, el framework de react, postgresSQL, git y gitHub",
        },

    ]
}


export function links() {
    return [
        {
            rel: 'stylesheet',
            href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com'
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossOrigin: 'true'
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
        },
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: 'icon',
            href: icono,
            type: 'image/x-icon'
        }
    ]
}


export default function App() {

    const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('guitarLA')) ?? [] : null;
    const [carrito, setCarrito] = useState(carritoLS);

    useEffect(() => {
        localStorage.setItem('guitarLA', JSON.stringify(carrito))
    }, [carrito]);

    const agregarCarrito = guitarra => {

        if (carrito.some(guitarraState => guitarraState.id === guitarra.id)) {
            // actualizar el carrito con el producto modificado
            const carritoActualizado = carrito.map(guitarraState => {
                if (guitarraState.id === guitarra.id) {
                    guitarraState.cantidad = guitarra.cantidad
                }
                return guitarraState;
            })
            return setCarrito(carritoActualizado);
        }
        // nuevo registro
        setCarrito([...carrito, guitarra]);
    }

    const actualizarCantidad = guitarra => {
        // funcionalidad modifica cantidad articulos en carrito
        const actualizarCarrito = carrito.map(guitarraState => {
            if (guitarraState.id === guitarra.id) {
                guitarraState.cantidad = guitarra.cantidad;
            }
            return guitarraState
        })
        setCarrito(actualizarCarrito);
    }

    const handleEliminarProducto = (guitarraId) => {
        // funcionalidad boton eliminar producto del carrito
        const actualizarCarrito = carrito.filter(guitarraState => guitarraState.id !== guitarraId);
        setCarrito(actualizarCarrito);
    }

    return (
        <Document>
            <Outlet
                context={{
                    carrito,
                    agregarCarrito,
                    actualizarCantidad,
                    handleEliminarProducto,
                }} />
        </Document>
    )
}


function Document({ children }) {
    return (
        <html lang="es">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <Meta />
                <Links />
            </head>
            <body>
                <Header />
                {children}
                <Footer />
                <Scripts />
                <LiveReload /> {/* evita el renderizado del nav */}
            </body>
        </html>
    )
}

// Funcion para manejo de errores, se utiliza en todas las paginas a definir pagina error diferente

export function ErrorBoundary() {
    const error = useRouteError();

    if (isRouteErrorResponse(error)) {
        return (
            <Document>
                <div className='contenedor__error'>
                    <h2 className='heading' >Oops algo salio mal, ruta no encontrada</h2>
                    <p className='error'>Status: {error.status}</p>
                    <p className='errorText'>{error.statusText}</p>

                    <Link className='enlace'>
                        retornar a la pagina de inicio
                    </Link>

                </div>
            </Document>
        );
    }

}
// // Don't forget to typecheck with your own logic.
// // Any value can be thrown, not just errors!
// let errorMessage = "Unknown error";
// if (isDefinitelyAnError(error)) {
//   errorMessage = error.message;
// }

// return (
//   <div>
//     <h1>Uh oh ...</h1>
//     <p>Something went wrong.</p>
//     <pre>{errorMessage}</pre>
//   </div>
// );




