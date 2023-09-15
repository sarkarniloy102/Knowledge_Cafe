import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div >
            <h3 className="text-2xl shadow-xl bg-slate-100 p-5 rounded-lg mb-4">{title}</h3>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark: PropTypes.object
}

export default Bookmark;