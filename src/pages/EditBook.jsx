import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import FetchError from '../components/FetchError';

function EditBook() {

    const { id } = useParams();

    const [title, setTitle] = useState(undefined);
    const [author, setAuthor] = useState(undefined);
    const [publishYear, setPublishYear] = useState(undefined);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(`http://localhost:5555/books/${id}`);
                const json = await response.json();
                setTitle(json.title);
                setAuthor(json.author);
                setPublishYear(json.publishYear);
                setLoading(null);
            } catch (error) {
                console.log(error)
                setError(error);
                setLoading(null);
            }
        }
        fetchData();
    }, [id])

    const handleEdit = async (e) => {
        e.preventDefault();

        const data = {
            title,
            author,
            publishYear,
        }

        setLoading(true);

        const response = await fetch(`http://localhost:5555/books/${id}`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const json = await response.json();

        if (!response.ok) {
            console.log(json.message);
            setError(json.message);
            setLoading(false);
        }

        if (response.ok) {
            e.target.reset();
            setTitle(null);
            setAuthor(null);
            setPublishYear(null);
            setLoading(false);
            navigate('/');
        }
    }

    return (
        <div>
            {
                loading && <Spinner />
            }
            {
                error && <FetchError />
            }
            {
                !loading && !error &&
                <div className='bg-lite'>
                    <div className='max-width min-height font-custom flex flex-col space-y-2 items-center bg-toolite p-5'>
                        <h1>Edit Book</h1>
                        <form onSubmit={handleEdit} className='flex flex-col space-y-2 w-full'>
                            <div className='flex items-center justify-center'>
                                <input
                                    type='text'
                                    required
                                    placeholder='Title'
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className='input'
                                    autoFocus
                                />
                            </div>
                            <div className='flex items-center justify-center'>
                                <input
                                    type='text'
                                    required
                                    placeholder='Author'
                                    value={author}
                                    onChange={(e) => setAuthor(e.target.value)}
                                    className='input'
                                />
                            </div>
                            <div className='flex items-center justify-center'>
                                <input
                                    type='number'
                                    required
                                    placeholder='Publish Year'
                                    min={1901}
                                    max={new Date().getFullYear()}
                                    value={publishYear}
                                    onChange={(e) => setPublishYear(e.target.value)}
                                    className='input'
                                />
                            </div>
                            <div className='flex items-center justify-center'>
                                <button className="btn" type='submit'>Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </div>
    )
}

export default EditBook