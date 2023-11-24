import { Link, useLoaderData } from '@remix-run/react';
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

export async function loader({ params }) {

  const { blogUrl } = params
  return await getBlog(blogUrl);
}

const BlogUrl = () => {

  const blog = useLoaderData();
  const { title, description, image, updateAt } = blog.data[0].attributes;
  const date = Intl.DateTimeFormat('es-ES', { day: "numeric", month: "long", year: "numeric", timeZone: "UTC", }).format(updateAt)


  return (
    <>
      <img src={image.data.attributes.formats.medium.url} alt={`Información detallada de ${title}`} />
      <div className='contenido'>
        <h3>{title}</h3>
        <strong className='date'>Actualizado: {date}</strong>
        <p>{description}</p>
      </div>
      <Link className='enlace__regresar enlace' to='/blogs'>Regresar</Link>
    </>
  )
}

export default BlogUrl
