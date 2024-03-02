import { createContext, useContext, useRef, useState } from "react";

// initial states
const initialState = {
    canvasRef: null,
    isDrawing: false,
    isPencil: false,
    isEraser: false,
    color: '000000',
    setIsDrawing: () => { },
    setIsPencil: () => { },
    setIsEraser: () => { },
    setColor: () => { }
}

// Create a context for the canvas
const CanvasContext = createContext(initialState)

export const useCanvas = () => {
    return useContext(CanvasContext)
}

const CanvasProvider = ({ children }) => {
    const canvasRef = useRef()
    const [isDrawing, setIsDrawing] = useState(false);
    const [isPencil, setIsPencil] = useState(true);
    const [isEraser, setIsEraser] = useState(false);
    const [color, setColor] = useState('000000');

    const value = {
        canvasRef,
        isDrawing,
        isPencil,
        isEraser,
        color,
        setIsDrawing,
        setIsPencil,
        setIsEraser,
        setColor
    }

    return (
        <CanvasContext.Provider value={value}>
            {children}
        </CanvasContext.Provider>
    )
}

export default CanvasProvider