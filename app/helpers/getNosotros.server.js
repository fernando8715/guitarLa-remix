export const getNosotros = async()=> {
    const respuesta = await fetch(`${process.env.API_URL}/api/principal?populate=*`);
    return await respuesta.json();
}