import { createContext, useContext, useRef } from "react";

// Create a context for the canvas
const CanvasContext = createContext()

export const useCanvas = () => {
    return useContext(CanvasContext)
}

const CanvasProvider = ({ children }) => {
    const canvasRef = useRef()

    return (
        <CanvasContext.Provider value={{ canvasRef }}>
            {children}
        </CanvasContext.Provider>
    )
}

export default CanvasProvider