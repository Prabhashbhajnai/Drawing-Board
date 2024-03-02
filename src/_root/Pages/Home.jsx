import { useEffect, useState } from 'react'

// Context
import { useCanvas } from '../../context/CanvasContext';

// Components
import ButtonBar from '../../components/ButtonBar';
import ColorPalette from '../../components/ColorPalette';

const Home = () => {
    const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 })
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const { canvasRef, isDrawing, isPencil, setIsDrawing, isEraser, color } = useCanvas()

    const handleMouseMove = (e) => {
        const canvasRect = document.getElementById('drawing-canvas').getBoundingClientRect()

        // Calculate the mouse position relative to the user canvas
        const x = e.clientX - canvasRect.left
        const y = e.clientY - canvasRect.top

        setMousePosition({ x, y })
    }

    const handleMouseDown = () => {
        setInitialPosition({ x: mousePosition.x, y: mousePosition.y })

        if (isPencil)
            canvasRef.current.getContext('2d').globalCompositeOperation = 'source-over'
        else if (isEraser)
            canvasRef.current.getContext('2d').globalCompositeOperation = 'destination-out'

        setIsDrawing(true)
    }

    // for drawing
    useEffect(() => {
        if (!isDrawing || (!isPencil && !isEraser)) return

        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        ctx.beginPath()
        ctx.lineWidth = 5
        ctx.lineCap = 'round'
        ctx.strokeStyle = `#${color}`

        ctx.moveTo(initialPosition.x, initialPosition.y)  // from
        ctx.lineTo(mousePosition.x, mousePosition.y); // to

        ctx.stroke(); // draw it!

        setInitialPosition({ x: mousePosition.x, y: mousePosition.y });
    }, [mousePosition])

    return (
        <>
            <div className='flex flex-col items-center'>
                <div className='relative'>
                    <canvas
                        id='drawing-canvas'
                        ref={canvasRef}
                        className='bg-white cursor-none'
                        width={1080}
                        height={600}
                        onMouseMove={handleMouseMove}
                        onMouseDown={handleMouseDown}
                        onMouseUp={() => setIsDrawing(false)}
                    />
                    <div
                        id='cursor'
                        style={{
                            backgroundColor: `#${color}`,
                            position: 'absolute',
                            left: mousePosition.x-4,
                            top: mousePosition.y-4,
                            width: '5px',
                            height: '5px',
                            borderRadius: '50%',
                            zIndex: 1000,
                            pointerEvents: 'none'   // to prevent the cursor from being captured by the cursor div
                        }}
                    />
                </div>
                <div className='flex w-full justify-center gap-5'>
                    <div className='flex items-center w-2/6 gap-5'>
                        <div
                            style={{ backgroundColor: `#${color}` }}
                            className="w-10 h-10"
                        />
                        <ColorPalette />
                    </div>
                    <ButtonBar />
                </div>
            </div>
        </>
    )
}

export default Home