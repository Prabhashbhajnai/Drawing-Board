import { useCanvas } from "../context/CanvasContext"

const Button = ({ type }) => {
    const { canvasRef } = useCanvas()

    const handleClear = () => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }

    const handleClick = () => {
        if (type.name === 'pencil') console.log('Pencil')
        else if (type.name === 'eraser') console.log('Eraser')
        else if (type.name === 'clear') handleClear()
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