export const getGuitarras = async()=> {
    const guitarras = await fetch(`${process.env.API_URL}/api/guitarras?populate=*`);
    return await guitarras.json();
}

export const getGuitarra = async(url)=>{
    const guitarra = await fetch(`${process.env.API_URL}/api/guitarras?filters[url]=${url}&populate=image`);
    return await guitarra.json();
}