import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handlebookmarks }) => {
    const { title, cover_img, author_name, author_img, reading_time, posted_date, hashtags } = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-4' src={cover_img} alt="" />
            <div className='flex justify-between items-center mb-4'>
                <div className='flex gap-6' >
                    <img className='w-14' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author_name}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handlebookmarks(blog)} ><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h2 className="text-3xl mb-3">{title}</h2>
            <p>
                {
                    hashtags.map((hash, index) =>
                        <span key={index}> <a>#{hash} </a> </span>)
                }
            </p>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isrequired,
    handlebookmarks: PropTypes.func
}
export default Blog;