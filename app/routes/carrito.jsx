import styleCarrito from '../styles/carrito.css';

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styleCarrito,
    }
  ]
}

export function meta() {
  return [
    {
      title: 'GuitarLa - carrito'
    },
    {
      name: 'description',
      content: 'Proyecto de desarrollo de software Frontend de e-commerce para una tienda de guitarras y cursos virtuales, empleando HTML, CSS, JavaScript, React, Remix-Run, CMS de Strapi, git y gitHub'
    },
  ]
}


const Carrito = () => {
  return (
    <main className="contenedor">
      <h1 className="heading">Carito de compras</h1>
      
      <div className="carrito__grid">
        <div className="carrito">
          <h2>Articulos</h2>
        </div>

        <aside className="resumen" >
          <h3>Resumen de pedido</h3>
          <p>Total a pagar: $</p>
        </aside>

      </div>
    </main>

  )
}

export default Carrito