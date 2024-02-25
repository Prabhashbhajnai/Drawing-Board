const Button = ({ type }) => {
    const handleClick = () => {
        if(type.name === 'pencil') console.log('Pencil')
        else if(type.name === 'eraser') console.log('Eraser')
        else if(type.name === 'clear') console.log('Clear')
    }

    return (
        <div 
            onClick={handleClick}
            className="flex justify-center items-center bg-slate-500 w-16 h-16 cursor-pointer rounded-b-lg"
        >
            {type.icon}
        </div>
    )
}

export default Button