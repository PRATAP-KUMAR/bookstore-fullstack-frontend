import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import FetchError from '../components/FetchError';

let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: "2-digit", minute: "2-digit", second: 'numeric' };

function ShowBook() {
    const [book, setBook] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchBook = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch(`http://localhost:3000/books/${id}`);
                const json = await response.json();
                setBook(json);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setError(error);
                setLoading(false);
            }
        }
        fetchBook();
    }, [id]);

    return (
        <div>
            {loading && <Spinner />}
            {error && <FetchError />}
            {
                book &&
                (
                    <div className='bg-lite'>
                        <div className='max-width min-height font-custom flex flex-col space-y-2 items-center bg-toolite p-5'>
                            <h1>Book Details</h1>
                            <div className='bg-dark p-5 shadow-custom flex flex-col space-y-2 w-full'>
                                <div className="border border-toodark px-4 py-2">
                                    <p className='text-toolite text-sm'>Id</p>
                                    <p className="font-bold font-custom text-green-500">{book.id}</p>
                                </div>
                                <div className="border border-toodark px-4 py-2">
                                    <p className='text-toolite text-sm'>Title</p>
                                    <p className="font-bold font-custom text-orange-500 capitalize">{book.title}</p>
                                </div>
                                <div className="border border-toodark px-4 py-2">
                                    <p className='text-toolite text-sm'>Author</p>
                                    <p className="font-bold font-custom text-orange-500">{book.author}</p>
                                </div>
                                <div className="border border-toodark px-4 py-2">
                                    <p className='text-toolite text-sm'>Publish year</p>
                                    <p className="font-bold font-custom text-orange-500">{book.year}</p>
                                </div>
                                <div className="border border-toodark px-4 py-2">
                                    <p className='text-toolite text-sm'>Created at</p>
                                    <p className="font-bold font-custom text-green-500">{new Date(book.created_at).toLocaleDateString("en-US", options)}</p>
                                </div>
                                <div className="border border-toodark px-4 py-2">
                                    <p className='text-toolite text-sm'>Updated at</p>
                                    <p className="font-bold font-custom text-green-500">{new Date(book.updated_at).toLocaleDateString("en-US", options)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ShowBook