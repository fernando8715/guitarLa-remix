import { Guitarra } from './'

export const ListadoGuitarras = ({ guitarras }) => {
    return (
        <>
            <h2 className='heading'>Nuestra colección</h2>
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
        </>

    )
}
