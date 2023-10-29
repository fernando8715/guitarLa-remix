
export const Curso = ({ curso }) => {
    const { title, image, description, updateAt } = curso.attributes;
    const date = Intl.DateTimeFormat('es-ES',
        {
            day: "numeric",
            month: "long",
            year: "numeric",
            timeZone: "UTC",
        }).format(updateAt);


    return (

        <section className="curso">
            <style jsx="true">{`
                .curso {
                    background-image: linear-gradient(to left, rgb(0 0 0 /.9), rgb(0 0 0 /.7)), url(${image.data.attributes.url});
                }
            `}</style>
            <div className='contenedor curso__grid'>
                <div className="contenido">
                    <h2 className="heading">{title}</h2>
                    <p className="texto">{description}</p>
                </div>
            </div>
        </section>
    )
}
