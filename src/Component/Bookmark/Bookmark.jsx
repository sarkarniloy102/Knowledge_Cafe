import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div>
            <h3 className="text-2xl bg-slate-200 p-5 rounded-lg mb-4">{title}</h3>
        </div>
    );
};
Bookmark.proptypes = {
    bookmark: PropTypes.object
}

export default Bookmark;