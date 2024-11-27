import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import Body from './components/Body.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <>
    <div className="flex flex-col min-h-screen">
     <Header/>
    <Body/>
    <Footer/>

     </div>
    
    </> 
    
  </StrictMode>,
)
