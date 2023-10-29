import {
  useLoaderData,
} from '@remix-run/react';
import { ListadoBlogs, ListadoGuitarras, Curso } from '../components';
import stylesGuitarras from '../styles/guitarras.css';
import stylesBlogs from '../styles/blog.css';
import stylesCurso from '../styles/curso.css';
import { getBlogs, getGuitarras, getCurso } from '../helpers';

export async function loader() {

  // Promise.all inicia todas las peticiones al tiempo 
  const [guitarras, blogs, curso] = await Promise.all([
    getGuitarras(),
    getBlogs(),
    getCurso(),
  ]);

  console.log(curso.data);

  return {
    guitarras: guitarras.data,
    blogs: blogs.data,
    curso: curso.data
  }
}

export function meta() {
  return [
    {
      title: 'GuitarLa - inicio'
    },
    {
      name: 'description',
      content: 'Proyecto de desarrollo de software Frontend de una tienda de guitarras y cursos virtuales, empleando HTML, CSS, JavaScript, React, Remix-Run, CMS de Strapi, git y github'
    }
  ]
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: stylesGuitarras,
    },
    {
      rel: 'stylesheet',
      href: stylesBlogs,
    },
    {
      rel: 'stylesheet',
      href: stylesCurso,
    }
  ]
}

const Index = () => {

  const { guitarras, blogs, curso } = useLoaderData();

  return (
    <>
      <main className='contenedor'>
        <ListadoGuitarras
          guitarras={guitarras}
        />

      </main>

      <Curso
        curso={curso}
      />

      <section className='contenedor'>
        <ListadoBlogs
          blogs={blogs} />
      </section>
    </>
  )
}

export default Index