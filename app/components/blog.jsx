import { Link } from '@remix-run/react';

export const Blog = ({ blog }) => {
  const { title, description, image, updateAt, url } = blog;
  const date = Intl.DateTimeFormat('es-ES', {day: "numeric", month: "long", year: "numeric", timeZone: "UTC",}).format(updateAt)

  return (
    <article className="blog">
      <img src={image.data.attributes.formats.small.url} alt={`Imagen de ${title}`} />
      <div className='contenido'>
        <h3 >{title}</h3>
        <strong className='date'>Actualizado: {date}</strong>
        <p className="text">{description}</p>
      </div>
        <Link className='enlace' to={`/blogs/${url}`}> Ver mas información</Link>

    </article>
  )
}
