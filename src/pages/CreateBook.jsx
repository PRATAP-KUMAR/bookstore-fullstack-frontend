import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import FetchError from '../components/FetchError';

function CreateBook() {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            title,
            author,
            year,
        }

        try {
            setLoading(true);
            const response = await fetch("http://localhost:3000/books", {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const json = await response.json();
            if (!response.ok) {
                console.log(json.message);
                setError(json.message);
                setLoading(null);
            }

            if (response.ok) {
                e.target.reset();
                setTitle(null);
                setAuthor(null);
                setYear(null);
                setLoading(false);
                navigate('/');
            }
        } catch (error) {
            console.log(error);
            setError(error);
            setLoading(null);
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
                        <h1>Add Book</h1>
                        <form onSubmit={handleSubmit} className='flex w-full flex-col space-y-2'>
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
                                    value={year}
                                    onChange={(e) => setYear(e.target.value)}
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

export default CreateBook