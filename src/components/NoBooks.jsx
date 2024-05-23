import { Link } from 'react-router-dom';

function NoBooks() {
    return (
        <div className="bg-lite">
            <div className='bg-toolite tol max-width center-div font-custom'>
                <div>There are no books to display.</div>
                <Link className='text-blue-500 hover:tod' to={'books/create'}>
                    Add a book now?
                </Link>
            </div>
        </div>
    )
}

export default NoBooks;