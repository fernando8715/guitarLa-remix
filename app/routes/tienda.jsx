import { useLoaderData } from '@remix-run/react'
import { getGuitarras } from "../helpers/getGuitarras.server"
import styles from '~/styles/guitarras.css'
import { ListadoGuitarras } from '../components';

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
  console.log(guitarras);

  return (
    <main className='contenedor'>
      <ListadoGuitarras 
        guitarras={guitarras} />

    </main>
  )
}

export default Tienda
