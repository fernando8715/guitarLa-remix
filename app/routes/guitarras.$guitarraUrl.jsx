import { useLoaderData } from '@remix-run/react';
import { getGuitarra } from '../helpers/getGuitarras.server';
import styles from '../styles/guitarras.css'

// el parametro data se obtiene del loader y puede ser utilizado en la funcion meta

export function meta({data}) {
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

export async function loader({ params }) {
  const { guitarraUrl } = params;

  return await getGuitarra(guitarraUrl);
}



const Guitarra = () => {

  const datos = useLoaderData();
  const { nombre, description, image, precio, updateAt } = datos.data[0].attributes;

  return (
    <main className='guitarra__grid'>
      <img className='guitarra__imagen' src={image.data.attributes.formats.medium.url} alt="Imagen de la guitarra ${nombre}" />
      <div className='contenido'>
        <h3 className='guitarra__heading'>{nombre}</h3>
        <p className='texto'>{description}</p>
        <strong className='precio'>${precio}</strong>
        <p>{updateAt}</p>
      </div>
    </main>
  )
}

export default Guitarra
