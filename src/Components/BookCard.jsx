import PropTypes from 'prop-types';

const BookCard = ({ book }) => {
    const addToBookshelf = () => {
        const currentBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
        localStorage.setItem('bookshelf', JSON.stringify([...currentBookshelf, book]));
    };

    return (
        <div className='bookCard'>
            <div>
                <div>Book Title: {book.title}</div>
                <p>Edition Count: {book.edition_count}</p>
            </div>
            <div>
                <button onClick={addToBookshelf}>Add to Bookshelf</button>
            </div>
        </div>
    );
};

BookCard.propTypes = {
    book: PropTypes.shape({
        title: PropTypes.string.isRequired,
        edition_count: PropTypes.number.isRequired,
    }).isRequired,
};

export default BookCard;
