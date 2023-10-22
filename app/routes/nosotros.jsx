import { useLoaderData } from '@remix-run/react';
import { getNosotros } from '../helpers/getNosotros.server'
import styles from '../styles/nosotros.css'
// import imagen from '../../public/img/nosotros.jpg';

export async function loader() {
  return await getNosotros()
}


export function meta() {
  [
    {
      title: 'GuitarLa - Nosotros'
    },
    {
      name: 'description',
      content: 'En GuitarLa nos especializamos en entregar al cliente un producto de calidad y dictar cursos de guitarra para mejorar la fortaleza en la musica'
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
  const { title, contenido, image } = datos.data.attributes;

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