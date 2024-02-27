import { createContext, useContext, useRef, useState } from "react";

// initial states
const initialState = {
    canvasRef: null,
    isDrawing: false,
    isPencil: false,
    isEraser: false,
    setIsDrawing: () => { },
    setIsPencil: () => { },
    setIsEraser: () => { }
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

    const value = {
        canvasRef,
        isDrawing,
        isPencil,
        isEraser,
        setIsDrawing,
        setIsPencil,
        setIsEraser
    }

    return (
        <CanvasContext.Provider value={value}>
            {children}
        </CanvasContext.Provider>
    )
}

export default CanvasProvider