import { useCanvas } from "../context/CanvasContext"

const Button = ({ type }) => {
    const { canvasRef, isPencil, setIsPencil, isEraser, setIsEraser } = useCanvas()

    const handleClear = () => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }

    const handleDraw = () => {
        setIsPencil(!isPencil)
        setIsEraser(false)
    }

    const handleErase = () => {
        setIsPencil(false)
        setIsEraser(!isEraser)
    }

    const handleClick = () => {
        if (type.name === 'pencil') handleDraw()
        else if (type.name === 'eraser') handleErase()
        else if (type.name === 'clear') handleClear()
    }

    return (
        <div
            onClick={handleClick}
            className={`flex justify-center items-center bg-slate-500 w-16 h-16 cursor-pointer rounded-b-lg hover:bg-slate-700 ${isPencil && type.name === 'pencil' ? 'bg-slate-600' : ''} ${isEraser && type.name === 'eraser' ? 'bg-slate-600' : ''}`}
        >
            {type.icon}
        </div>
    )
}

export default Button