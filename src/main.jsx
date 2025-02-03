import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeContextProvider from './contexts/ThemeContext.jsx'
import LanguageContextProvider from './contexts/LanguageContext.jsx'

createRoot(document.getElementById('root')).render(
    <LanguageContextProvider>
        <ThemeContextProvider>
            <App />
        </ThemeContextProvider>
    </LanguageContextProvider>

)
