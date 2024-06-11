import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const BookshelfPage = () => {
    const [bookshelf, setBookshelf] = useState([]);

    useEffect(() => {
        const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
        setBookshelf(storedBookshelf);
    }, []);

    return (
        <div>
            <h1>My Bookshelf</h1>
            <div className='bookself'>
                {bookshelf.map((book, index) => (
                    <div className='bookCard' key={index}>
                        <div>
                            <div>Book Title: {book.title}</div>
                            <p>Edition Count: {book.edition_count}</p>
                        </div>
                        <div></div>
                    </div>
                ))}
            </div>
            <Link to="/">
                <button>Back to Search</button>
            </Link>
        </div>
    );
};

export default BookshelfPage;
