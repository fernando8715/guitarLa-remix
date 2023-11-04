import { isRouteErrorResponse, useLoaderData, useRouteError } from '@remix-run/react';
import { getGuitarra } from '../helpers/getGuitarras.server';
import { Error } from '../components'
import styles from '../styles/guitarras.css'


export async function loader({ params }) {
  const { guitarraUrl } = params;
  const guitarra = await getGuitarra(guitarraUrl);

  if (guitarra.data.length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'GuitarLa - Guitarra no encontrada',
      data: {}
    })
  }

  return guitarra;
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <Error error={error} />
    );
  }
}


// el parametro data se obtiene del loader y puede ser utilizado en la funcion meta

export function meta({ data }) {

  if (!data || Object.keys(data).length === 0) {
    return [
      {
        title: `GuitarLa - Guitarra no encontrada`,
      },
      {
        name: 'description',
        content: `contenido no encontradp, verifique la ruta ingresada o de click en el boton para que lo lleve  a la pagina inicial`
      }
    ]
  }

  return [
    {
      title: `GuitarLa - ${data.data[0].attributes.nombre}`
    },
    {
      name: 'description',
      content: `${data.data[0].attributes.description}`
    }
  ]
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}




const Guitarra = () => {

  const datos = useLoaderData();
  const { nombre, description, image, precio, updateAt } = datos.data[0].attributes;

  return (
    <div className='guitarra__grid'>
      <img className='guitarra__imagen' src={image.data.attributes.formats.medium.url} alt="Imagen de la guitarra ${nombre}" />
      <div className='contenido'>
        <h3 className='guitarra__heading'>{nombre}</h3>
        <p className='texto'>{description}</p>
        <strong className='precio'>${precio}</strong>
        <p>{updateAt}</p>
      </div>
    </div>
  )
}

export default Guitarra


