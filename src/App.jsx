import './App.css'
import { useState, useEffect } from 'react'
import routes from './router'
import { useRoutes } from "react-router-dom"
import BackToTopBtn from './Components/BackToTopBtn/BackToTopBtn'




function App() {

  const [showBackTopBtn, setShowBackTopBtn] = useState(false)
  let router = useRoutes(routes)


  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        setShowBackTopBtn(true)
      }
      if (window.scrollY == 0) {
        setShowBackTopBtn(false)

      }
    })
  }, [])


  const backTopHandlear = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  return (
    <div className='max-w-screen-2xl relative bg-[#F5F5F5] mx-auto min-h-screen dark:bg-main-theme-1'>

      {showBackTopBtn && (
        <BackToTopBtn backTopHandlear={backTopHandlear} />
      )}

      {router}


    
    </div>
  )
}

export default App
