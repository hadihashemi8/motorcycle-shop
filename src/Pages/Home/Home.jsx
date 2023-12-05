import React from 'react'
import Categories from '../../Components/Categories/Categories'
import NewProducts from '../../Components/NewProducts/NewProducts'
import Articles from '../../Components/Articles/Articles'
import Questions from '../../Components/Questions/Questions'
import Properties from '../../Components/Properties/Properties'
import Footer from '../../Components/Footer/Footer'
import NavBar from '../../Components/NavBar/NavBar'
import HomeMainSlider from '../../Components/HomeMainSlider/HomeMainSlider'

export default function Home() {



  return (
    <div>
      <NavBar />
      <HomeMainSlider/>
      <Categories title="دسته بندی محصولات" />
      <NewProducts />
      <Articles  title="مقالات "/>
      <Questions />
      <Properties />
      <Footer />
    </div>
  )
}
