import { useEffect, useState } from 'react';
import Spinner from '../components/Spinner';
import BackEndError from '../components/BackendError';
import NoBooks from '../components/NoBooks';
import BooksWithTableStyle from '../components/BooksWithTableStyle';
import BooksWithCardStyle from '../components/BooksWithCardsStyle';

function Home() {
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);
    const [books, setBooks] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch("http://localhost:3000/books");
                const json = await response.json();
                setBooks(json);
                setLoading(false);
            } catch (error) {
                console.log(error.message);
                setError(error.message);
                setLoading(false);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            {
                loading && <Spinner />
            }
            {
                error && <BackEndError />
            }
            {
                books && !books.length && <NoBooks />
            }
            {
                books && books.length > 0 &&
                (
                    <>
                        <div className='bg-lite hidden md:block'>
                            <BooksWithTableStyle books={books} />
                        </div>
                        <div className='bg-lite md:hidden'>
                            <BooksWithCardStyle books={books} />
                        </div>
                    </>
                )
            }
        </>
    )
}

export default Home