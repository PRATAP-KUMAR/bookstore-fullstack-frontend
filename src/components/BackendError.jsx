function BackendError() {
    return (
        <div className='bg-lite'>
            <div className="max-width bg-toolite tol center-div flex flex-col font-custom">
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
                        </a>
                    </span>
                </p>
            </div>
        </div>
    )
}

export default BackendError