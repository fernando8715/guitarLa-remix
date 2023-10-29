export const getCurso = async()=> {
    const respuesta = await fetch(`${process.env.API_URL}/api/curso?populate=image`);
    return await respuesta.json();
}

