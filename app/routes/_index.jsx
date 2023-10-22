import {
  Meta,
} from '@remix-run/react'

export function meta(){
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

const Index = () => {
  return (
    <div>Aprendiendo a utilizar remix ruun</div>
  )
}

export default Index