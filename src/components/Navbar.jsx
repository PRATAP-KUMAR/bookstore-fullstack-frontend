import { useEffect, useState } from 'react';
import { Link, useMatch } from 'react-router-dom';

function Navbar() {

    const [fetchingOk, setFetchingOk] = useState(null);

    let match = useMatch("/")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000/books");
                if(response.ok) {
                    setFetchingOk(true);
                }
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchData();
    }, []);

    return (
        <div className='bg-toodark sticky top-0 z-50'>
            <div className='max-width h-16 flex font-custom tod justify-center items-center px-5'>
                <div className='w-[120px] flex-none'>{!match ? <Link to={"/"}>Back</Link> : null}</div>
                <div className="text-center flex-grow text-xl md:text-2xl lg:text-3xl">BOOKSTORE</div>
                <div className="w-[120px] flex-none text-right">{match && fetchingOk ? <Link to={"/books/create"}>Add a Book</Link> : null}</div>
            </div>
        </div >
    )
}

export default Navbar