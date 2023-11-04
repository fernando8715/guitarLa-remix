import { Outlet } from "@remix-run/react";
import styles from '../styles/blog.css'

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    }
  ]
}


const Blogs = () => {


  return (

    <main className="contenedor__blog">
      <Outlet />
    </main>
  )
}

export default Blogs