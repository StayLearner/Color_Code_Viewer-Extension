import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "nes.css/css/nes.min.css" // This adds the pixel style globally

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)