import {
    Meta,
    Links, 
    Outlet,
    Scripts,
    LiveReload
} from '@remix-run/react';
import {Header, Footer} from '~/components';
import styles from '~/styles/index.css'


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
        }
    ]
}


export default function App() {
    return (
        <Document>
            <Header />
            <Outlet />
            <Footer />
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
                {children}

                <Scripts />
                <LiveReload /> {/* evita el renderizado del nav */}
            </body>
        </html>
    )
}
