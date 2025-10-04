import React from 'react'
import BlogHero from './BlogHero/BlogHero'
import BlogSection from './BlogSection/BlogSection'
import Trial from '../Trial/Trial'
import Footer from '../Footer/footer'
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton'

function Movie() {
  return (
    <div>
         <BlogHero/>
         <BlogSection/>
         <Trial/>
         <Footer/>
         <ScrollToTopButton/>
    </div>
    
  )
}

export default Movie

