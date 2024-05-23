import { Link } from 'react-router-dom';

function BooksWithCardStyle(props) {
    const obj = props;
    const { books } = obj;
    return (
        <div className='max-width min-height bg-toolite p-5'>
            <div className='flex flex-col space-y-5'>
                <div className='font-custom'>List of Books</div>
                {books.map((book, index) => (
                    <div key={book._id} className='relative flex flex-col items-start font-custom tod bg-dark p-5'>
                        <div className='flex flex-col gap-x-4'>
                            <p className='absolute top-1 right-1'>{books.length - index}</p>
                            <p className='capitalize'>{book.title}</p>
                            <p className='text-toolite'>Authored by {book.author}</p>
                            <p className='font-custom text-lite'>Year - {book.publishYear}</p>
                            <div className='flex justify-center space-x-5 items-center'>
                                <Link to={`books/details/${book._id}`}
                                    className='text-green-600 hover:text-blue-500'>
                                    Book Details
                                </Link>
                                <Link to={`books/edit/${book._id}`}
                                    className='text-orange-500 hover:text-blue-500'>
                                    Edit Book
                                </Link>
                                <Link to={`books/delete/${book._id}`}
                                    className='text-red-500 hover:text-blue-500'>
                                    Delete Book
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default BooksWithCardStyle