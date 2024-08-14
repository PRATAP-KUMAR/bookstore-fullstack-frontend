import { Link } from 'react-router-dom';

function BooksWithTableStyle(props) {
    const obj = props;
    const { books } = obj;
    return (
        <div className='max-width min-height bg-toolite p-5'>
            <div className='font-custom'>List of Books</div>
            <table className='w-full'>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Publish Year</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book, index) => (
                        <tr key={book.id} className='h-8 font-custom'>
                            <td>{index+1}</td>
                            <td className='capitalize'>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.year}</td>
                            <td>
                                <div className='flex justify-center gap-x-4'>
                                    <Link to={`books/details/${book.id}`}
                                        className='text-green-600 hover:text-blue-500'>
                                        Book Details
                                    </Link>
                                    <Link to={`books/edit/${book.id}`}
                                        className='text-orange-500 hover:text-blue-500'>
                                        Edit Book
                                    </Link>
                                    <Link to={`books/delete/${book.id}`}
                                        className='text-red-500 hover:text-blue-500'>
                                        Delete Book
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>)
}

export default BooksWithTableStyle