import { ImSpinner3 } from "react-icons/im";

function Spinner() {
    return (
        <div className='bg-dark'>
            <div className='max-width center-div bg-lite'>
                <ImSpinner3 className="animate-spin text-dark" fontSize={64} />
            </div>
        </div>
    )
}

export default Spinner;