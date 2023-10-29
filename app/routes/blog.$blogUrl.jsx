import { Link, useLoaderData } from '@remix-run/react';
import styles from '../styles/blog.css'
import { getBlog } from '../helpers/getBlog.server'

export function meta({ data }) {

  return [
    {
      title: `GuitarLa - ${data.data[0].attributes.title}`
    },
    {
      name: `${data.data[0].attributes.title}`,
    }
  ]
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    }

  ]
}

export async function loader({ params }) {

  const { blogUrl } = params
  return await getBlog(blogUrl);
}

const BlogUrl = () => {

  const blog = useLoaderData();
  const { title, description, image, updateAt } = blog.data[0].attributes;
  const date = Intl.DateTimeFormat('es-ES', { day: "numeric", month: "long", year: "numeric", timeZone: "UTC", }).format(updateAt)


  return (
    <main className='contenedor__blog'>
      <img src={image.data.attributes.formats.medium.url} alt={`Información detallada de ${title}`} />
      <div className='contenido'>
        <h3>{title}</h3>
        <strong className='date'>Actualizado: {date}</strong>
        <p>{description}</p>
      </div>
      <Link className='enlace' to='/blogs'>Regresar</Link>
    </main>
  )
}

export default BlogUrl
