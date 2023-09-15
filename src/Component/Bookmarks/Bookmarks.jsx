import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/bookmark';

const Bookmarks = ({ bookmarks, readingtime }) => {
    return (


        <div className="md:w-1/3 space-y-5 ">
            <div className='bg-slate-300 p-6 rounded-xl'>
                <h2 className="text-3xl font-semibold">Spent time on read : {readingtime} min</h2>
            </div>
            <div className='bg-green-200 p-6 rounded-lg'>
                <h2 className="text-3xl font-bold  ">Bookmarked Blog: {bookmarks.length}</h2>
                {
                    bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
                }
            </div>

        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.object,
    readingtime: PropTypes.number
}
export default Bookmarks;