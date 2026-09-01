import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import UseCard from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UseCard />
  </StrictMode>,
)
