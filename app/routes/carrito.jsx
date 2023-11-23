import { useEffect, useState } from 'react';
import { useOutletContext } from '@remix-run/react';
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

  const [total, setTotal] = useState(0);
  const { carrito, actualizarCantidad, handleEliminarProducto } = useOutletContext();

  useEffect(() => {
    const calcularTotal = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0);
    setTotal(calcularTotal);
  }, [carrito]);


  return (
    <main className="contenedor">
      <h1 className="heading">Carito de compras</h1>

      <div className="carrito__grid">
        <div className="carrito">
          <h2>Articulos</h2>
          <ul className='listaCarrito'>
            {carrito?.length === 0 ? 'Carrito vacio' : (
              carrito.map(producto => (
                <li key={producto.id} className='producto'>
                  <img src={producto.image} alt={`guitarra ${producto.nombre}`} />
                  <div className="infoProducto">
                    <p className='infoProducto__nombre'>{producto.nombre}</p>
                    <p className='infoProducto__precio'>Precio: <span>${producto.precio}</span></p>
                    <p>Cantidad:
                      <select value={producto.cantidad}
                        className='select'
                        onChange={e => actualizarCantidad({
                          cantidad: e.target.value,
                          id: producto.id
                        })}
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>

                    </p>
                    <p className='infoProducto__subtotal'>Subtotal: <span>${producto.precio * producto.cantidad}</span></p>
                    <button
                      type='button'
                      className='btnEliminar'
                      onClick={()=> handleEliminarProducto(producto.id)}
                    >
                      X
                    </button>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>

        <aside className="resumen" >
          <h3>Resumen de pedido</h3>
          <p className='total'>Total a pagar: <span>${total}</span></p>
        </aside>

      </div>
    </main>

  )
}

export default Carrito