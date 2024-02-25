import { FaPencil } from "react-icons/fa6";
import { RxEraser } from "react-icons/rx";
import { FaRegTrashAlt } from "react-icons/fa";

// Components
import Button from './Button'

const ButtonBar = () => {
    const types = [
        {
            id: 1,
            name: 'pencil',
            icon: <FaPencil />,
        },
        {
            id: 2,
            name: 'eraser',
            icon: <RxEraser />,
        },
        {
            id: 3,
            name: 'clear',
            icon: <FaRegTrashAlt />
        }
    ]

    return (
        <>
            <div className='flex gap-5'>
                {types.map((type) => (
                    <Button key={type.id} type={type} />
                ))}
            </div>
        </>
    )
}

export default ButtonBar