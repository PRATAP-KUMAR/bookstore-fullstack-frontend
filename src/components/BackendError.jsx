function BackendError() {
    return (
        <div className='bg-lite'>
            <div className="max-width bg-toolite tol min-height justify-between items-center p-5 flex flex-col font-custom bg-[url('/images/books.jpg')] bg-cover bg-center bg-no-repeat">
                <div className="bg-black p-5 backdrop-opacity-10 text-white">
                    <p>
                        Welcome to Book Store.
                    </p>
                    <p>
                        Sorry, Backend is not connected.
                    </p>
                    <p>
                        Please follow the instructions from <span>
                            <a
                                href='https://github.com/PRATAP-KUMAR/bookstore-mern-be'
                                aria-label='GitHub Link'
                                target="_blank"
                                rel="noreferrer"
                                className='text-orange-500 hover:text-blue-500'
                            >
                                GitHub
                            </a><span> to start Backend server.</span>
                        </span>
                    </p>
                </div>
                <a
                    className="text-sm"
                    href="https://www.freepik.com/free-vector/hand-drawn-flat-design-stack-books-illustration_24307396.htm#fromView=search&page=1&position=1&uuid=c7a97806-98b2-4dc1-858a-0ea4db4c0b17"
                >
                    Image by freepik
                </a>
            </div>
        </div>
    )
}

export default BackendError