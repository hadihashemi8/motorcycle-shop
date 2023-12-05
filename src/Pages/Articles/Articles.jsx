import React, { useEffect, useState } from 'react'
import ArticleBox from '../../Components/ArticleBox/ArticleBox'
import Footer from '../../Components/Footer/Footer'
import NavBar from '../../Components/NavBar/NavBar'
import Properties from '../../Components/Properties/Properties'
import ArticleSmallBox from '../../Components/ArticleSmallBox/ArticleSmallBox'
import blogs from '../../datas/blogs'



export default function Articles() {

  const [showLgArticle, setShowLgArticle] = useState(false)

  useEffect(() => {

    const checkWindowSize = () => {
      if (window.innerWidth >= 768) {
        setShowLgArticle(true)
      } else {
        setShowLgArticle(false)

      }
    }
    checkWindowSize()

    window.addEventListener('resize', () => {
      checkWindowSize()
    })
  }, [])



  return (
    <div >
      <NavBar />

      {/* Articles parent */}
      <div className='mt-6 p-4 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3  md:px-10 lg:px-14   gap-4 lg:gap-8 small:px-14 sm:px-24  justify-items-center dark:bg-main-theme-3'>
        {
          showLgArticle ? (
            <>
             {blogs.map(item => (
              <ArticleBox key={item.id} {...item}/>
             ))}
            </>
          ) : (
            <>
            {blogs.map(item => (
         
              <ArticleSmallBox key={item.id} {...item}/>
            ))}
           
            </>

          )
        }
      </div>

      <Properties />
      <Footer />
    </div >
  )
}
