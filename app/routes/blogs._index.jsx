import { useLoaderData } from "@remix-run/react";
import { getBlogs } from "../helpers/getBlog.server"
import { ListadoBlogs } from '../components'

export async function loader() {
  const blog = await getBlogs();
  return blog.data
}

const Blogs = () => {

  const blogs = useLoaderData();

  return (
      <ListadoBlogs blogs={blogs}/>
  )
}

export default Blogs