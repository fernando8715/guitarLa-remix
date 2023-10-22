import { useLoaderData } from '@remix-run/react'
import { Guitarra } from '~/components/guitarra';
import { getGuitarras } from "../helpers/getGuitarras.server"
import styles from '~/styles/guitarras.css'

export function meta() {
  return [
    {
      title: 'GuitarLa - tienda de guitarras',
    },
    {
      name: "description",
      content: "Aqui encontraras nuestro catalogo con todas las guitarras disponibles y su precio.",
    },
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


export async function loader() {
  const guitarras = await getGuitarras();
  return guitarras.data
}


const Tienda = () => {

  const guitarras = useLoaderData();

  return (
    <main className='contenedor'>
      <h3 className='heading'>Nuestra colección</h3>
      {guitarras?.length && (
        <div className='guitarras__grid'>
          {guitarras.map(guitarra => (
            <Guitarra
              key={guitarra?.id}
              guitarra={guitarra?.attributes}
            />
          ))}
        </div>
      )}
    </main>
  )
}

export default Tienda
