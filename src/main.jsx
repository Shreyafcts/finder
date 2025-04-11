import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
