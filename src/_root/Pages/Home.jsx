import { useEffect, useState } from 'react'

// Context
import { useCanvas } from '../../context/CanvasContext';

// Components
import ButtonBar from '../../components/ButtonBar';

const Home = () => {
    const [initialPostion, setInitialPosition] = useState({ x: 0, y: 0 })
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const { canvasRef, isDrawing, isPencil, setIsDrawing } = useCanvas()

    const handleMouseMove = (e) => {
        const canvasRect = document.getElementById('drawing-canvas').getBoundingClientRect()

        // Calculate the mouse position relative to the user canvas
        const x = e.clientX - canvasRect.left
        const y = e.clientY - canvasRect.top

        setMousePosition({ x, y })
    }

    const handleMouseDown = () => {
        setInitialPosition({ x: mousePosition.x, y: mousePosition.y })
        setIsDrawing(true)
    }

    useEffect(() => {
        if (!isDrawing || !isPencil) return

        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        ctx.beginPath()
        ctx.lineWidth = 5
        ctx.lineCap = 'round'
        ctx.strokeStyle = 'black'

        ctx.moveTo(initialPostion.x, initialPostion.y)  // from
        ctx.lineTo(mousePosition.x, mousePosition.y); // to

        ctx.stroke(); // draw it!

        setInitialPosition({ x: mousePosition.x, y: mousePosition.y });
    }, [mousePosition])

    return (
        <>
            <div className='flex flex-col items-center'>
                <canvas
                    id='drawing-canvas'
                    ref={canvasRef}
                    className='bg-white cursor-'
                    width={1080}
                    height={600}
                    onMouseMove={handleMouseMove}
                    onMouseDown={handleMouseDown}
                    onMouseUp={() => setIsDrawing(false)}
                />
                <ButtonBar />
            </div>
        </>
    )
}

export default Home