import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/shared/Navbar.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
        <Navbar/>
        <App />
    </BrowserRouter>
  </StrictMode>,
)