import { Blog } from './'

export const ListadoBlogs = ({ blogs }) => {
    return (
        <>
            <h2 className="heading">Blog</h2>
            <div className="blogs">

                {blogs.map(blog => (
                    <Blog
                        key={blog.id}
                        blog={blog.attributes}
                    />
                ))}

            </div>
        </>
    )
}
