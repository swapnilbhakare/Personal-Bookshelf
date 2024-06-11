import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const BookCard = ({ book }) => {
  const [isInBookshelf, setIsInBookshelf] = useState(false);

  useEffect(() => {
    const currentBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    const isBookInBookshelf = currentBookshelf.some(storedBook => storedBook.key === book.key);
    setIsInBookshelf(isBookInBookshelf);
  }, [book.key]);

  const addToBookshelf = () => {
    const currentBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    localStorage.setItem('bookshelf', JSON.stringify([...currentBookshelf, book]));
    setIsInBookshelf(true);
  };

  return (
    <div className='bookCard'>
      <div>
        <h3>Book Title: {book.title}</h3>
        <p>Edition Count: {book.edition_count}</p>
      </div>
      <div>
        {!isInBookshelf && <button onClick={addToBookshelf}>Add to Bookshelf</button>}
      </div>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    edition_count: PropTypes.number.isRequired,
    key: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookCard;
