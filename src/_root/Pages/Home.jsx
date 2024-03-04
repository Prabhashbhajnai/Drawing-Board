import { useEffect, useState } from 'react'

// Context
import { useCanvas } from '../../context/CanvasContext';

// Components
import ButtonBar from '../../components/ButtonBar';
import ColorPalette from '../../components/ColorPalette';

const Home = () => {
    const [initialPosition, setInitialPosition] = useState({ x: 0, y: 0 })
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [cursorSize, setCursorSize] = useState(5)

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

    const handleScroll = (e) => {
        e.preventDefault();

        if (e.deltaY > 0) {
            setCursorSize(prevCursorSize => Math.max(prevCursorSize - 1, 5)); // Ensure cursorSize doesn't go below 5
        } else if (e.deltaY < 0) {
            setCursorSize(prevCursorSize => Math.min(prevCursorSize + 1, 23)); // Ensure cursorSize doesn't go above 23
        }
    }

    useEffect(() => {
        const canvas = canvasRef.current

        if (canvas) {
            canvas.addEventListener('wheel', handleScroll, { passive: false });

            return () => {
                canvas.removeEventListener('wheel', handleScroll);
            };
        }
    }, [])

    // for drawing
    useEffect(() => {
        if (!isDrawing || (!isPencil && !isEraser)) return

        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        ctx.beginPath()
        ctx.lineWidth = cursorSize
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
                        className='bg-white cursor-none overflow-hidden'
                        width={1080}
                        height={600}
                        onMouseMove={handleMouseMove}
                        onMouseDown={handleMouseDown}
                        onMouseUp={() => setIsDrawing(false)}
                    />
                    <div
                        id='cursor'
                        style={{
                            backgroundColor: isEraser ? 'white' :`#${color}`,
                            border: isEraser ? '1px solid black' : 'none',
                            position: 'absolute',
                            left: mousePosition.x,
                            top: mousePosition.y - 5,
                            width: `${cursorSize}px`,
                            height: `${cursorSize}px`,
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
                    <div className='flex items-center justify-between gap-5'>
                        <div
                            id='cursor'
                            style={{
                                backgroundColor: '#000000',
                                width: '5px',
                                height: '5px',
                                borderRadius: '50%',
                            }}
                        />
                        <input type='range' min='5' max='23' value={cursorSize} onChange={(e) => setCursorSize(e.target.value)} className='' />
                        <div
                            id='cursor'
                            style={{
                                backgroundColor: '#000000',
                                width: '23px',
                                height: '23px',
                                borderRadius: '50%',
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home