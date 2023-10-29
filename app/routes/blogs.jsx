import { useLoaderData } from "react-router";
import { getBlogs } from "../helpers/getBlog.server"
import { ListadoBlogs } from '../components'
import styles from '../styles/blog.css'

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    }
  ]
}


export async function loader() {
  const blog = await getBlogs();
  return blog.data
}

const Blogs = () => {

  const blogs = useLoaderData();

  return (

    <main className="contenedor">
      <ListadoBlogs blogs={blogs}/>
    </main>
  )
}

export default Blogs