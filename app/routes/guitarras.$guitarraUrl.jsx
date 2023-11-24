import { useState } from 'react';
import { isRouteErrorResponse, useLoaderData, useOutletContext, useRouteError, Link } from '@remix-run/react';
import { getGuitarra } from '../helpers/getGuitarras.server';
import { Error } from '../components';
import styles from '../styles/guitarras.css';


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

  const { agregarCarrito } = useOutletContext();
  const [cantidad, setCantidad] = useState(1);
  const datos = useLoaderData();
  const { nombre, description, image, precio } = datos.data[0].attributes;

  const handleSubmit = (e) => {
    e.preventDefault();

    const productoSeleccionado = {
      id: datos.data[0].id,
      nombre,
      precio,
      image: image.data.attributes.formats.small.url,
      cantidad,
    }

    agregarCarrito(productoSeleccionado);

    return productoSeleccionado;
  }

  return (
    <div className='guitarra__grid'>
      <img className='guitarra__imagen' src={image.data.attributes.formats.medium.url} alt="Imagen de la guitarra ${nombre}" />
      <div className='guitarra__contenido'>
        <h3 className='guitarra__heading'>{nombre}</h3>
        <p className='texto'>{description}</p>
        <strong className='precio'>${precio}</strong>

        <form
          onSubmit={handleSubmit}
          className='formulario'>
          <label htmlFor="cantidad">Cantidad</label>
          <select
            onChange={e => setCantidad(parseInt(e.target.value))}
            id="cantidad">
            <option disabled>-- Seleccione --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input type="submit" value="agregar al carrito" className='enlace' />
          <Link to={'/guitarras'}>Regresar a tienda</Link>
        </form>
      </div>
    </div>
  )
}

export default Guitarra


