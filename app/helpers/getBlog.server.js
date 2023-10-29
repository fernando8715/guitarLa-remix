export const getBlogs = async()=> {
    const respuesta = await fetch(`${process.env.API_URL}/api/blogs?populate=image`)
    return respuesta.json();
}

export const getBlog = async(url)=> {
    const respuesta = await fetch(`${process.env.API_URL}/api/blogs?filters[url]=${url}&populate=image`);
    return await respuesta.json();
}

// http://localhost:1337/api/blogs?filters[url]=guitarras-electricas-y-acusticas&populate=image

