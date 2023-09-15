import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'

const Blogs = ({ handlebookmarks, handlereadingtime }) => {

    const [blogs, setblogs] = useState([]);
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setblogs(data))
    }, []);
    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs</h1>
            {
                blogs.map(blog =>
                    <Blog
                        key={blog.id}
                        blog={blog}
                        handlebookmarks={handlebookmarks}
                        handlereadingtime={handlereadingtime}>
                    </Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    handlebookmarks: PropTypes.func,
    handlereadingtime: PropTypes.func
}

export default Blogs;