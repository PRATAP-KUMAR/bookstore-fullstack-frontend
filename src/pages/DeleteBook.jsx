import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import FetchError from '../components/FetchError';

function DeleteBook() {
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    const [book, setBook] = useState(null);

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch(`http://localhost:5555/books/${id}`);
                const json = await response.json();
                setBook(json);
                setLoading(null);
            } catch (error) {
                console.log(error)
                setError(error);
                setLoading(null);
            }
        }
        fetchData();
    }, [id])

    const handleDeleteBook = () => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch(`http://localhost:5555/books/${id}`, {
                    method: "DELETE",
                    headers: {
                        'Content-Type': 'application/json',
                    }
                });
                if (response.ok) {
                    setLoading(null);
                    navigate("/");
                }
            } catch (error) {
                console.log(error);
                setError(error);
            }
        }
        fetchData();
    }

    return (
        <div>
            {loading && <Spinner />}
            {error && <FetchError />}
            {
                book &&
                <div className='bg-lite'>
                    <div className='max-width min-height font-custom flex flex-col space-y-2 items-center bg-toolite p-5'>
                        <h1>Delete Book</h1>
                        <div className='bg-dark tod flex flex-col p-5 space-y-5'>
                            <p className='text-center'>Are you sure to delte the Book titled &quot;{book.title}&quot; authored by &quot;{book.author}&quot; with id {book._id}</p>
                            <button onClick={handleDeleteBook} className='btn w-fit mx-auto bg-red-500 hover:bg-red-950'>Yes delete</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )

}

export default DeleteBook;