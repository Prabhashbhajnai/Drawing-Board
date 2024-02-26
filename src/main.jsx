import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import CanvasProvider from './context/CanvasContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CanvasProvider>
        <App />
      </CanvasProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
