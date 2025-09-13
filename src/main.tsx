import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "./i18n"
import { FloatingButtons } from './components/gadgets/FloatingButtons.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <FloatingButtons />
  </React.StrictMode>,
)
