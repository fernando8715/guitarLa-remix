import { Link } from "@remix-run/react"

export const Guitarra = ({ guitarra }) => {
    const { nombre, description, precio, image, url } = guitarra
    
    return (
        <div className="guitarra">
            <img src={image.data.attributes.formats.medium.url} alt={`Imagen de guitarra ${guitarra.nombre}`} />
            <div className="guitarra__contenido">
                <h3>{nombre}</h3>
                <p className="guitarra__description">{description}</p>
                <strong className="precio">${precio}</strong>

            <Link 
                className="enlace"
                to={`/guitarras/${url}`}
            >Ver producto
            </Link>
            </div>
        </div>
    )
}
