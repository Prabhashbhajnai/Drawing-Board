import { useCanvas } from "../context/CanvasContext"

const Button = ({ type }) => {
    const { canvasRef, setIsDrawing, isDrawing, isPencil, setIsPencil } = useCanvas()

    const handleClear = () => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }

    const handleDraw = () => {
        setIsPencil(!isPencil)
    }

    const handleErase = () => {

    }

    const handleClick = () => {
        if (type.name === 'pencil') handleDraw()
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