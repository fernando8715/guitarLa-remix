import { useLoaderData } from '@remix-run/react';
import { getNosotros } from '../helpers/getNosotros.server'
import styles from '../styles/nosotros.css'
// import imagen from '../../public/img/nosotros.jpg';

export async function loader() {
  const datos = await getNosotros();
  if (Object.keys(datos).length === 0) {
    throw new Response('', {
      status: 404,
      statusText: 'GuitarLa - URL No encontrada',
      data: {},
    })
  }
  return datos.data;
}

export function meta({ data }) {
  if (!data || Object.keys(data).length === 0) {
    return [
      {
        title: 'GuitarLa - ruta no encontrada'
      }
    ]
  }
  return [
    {
      title: `GuitarLa - ${data.attributes.title}`
    },
    {
      name: 'description',
      content: `${data.attributes.contenido}`
    },
    // {
    //   rel: 'preload',
    //   href: imagen,
    //   as: 'image'
    // }

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

const Nosotros = () => {

  const datos = useLoaderData();
  const { title, contenido, image } = datos.attributes;

  return (
    <main className='contenedor'>
      <h2 className="heading">{title}</h2>
      <section className='nosotros'>

        <img src={image.data.attributes.formats.medium.url} alt="Imagen de la guitarra exclusiva de la tienda" />

        <div className='nosotros__texto'>
          <p>{contenido}</p>
        </div>

      </section>
    </main>
  )
}

export default Nosotros