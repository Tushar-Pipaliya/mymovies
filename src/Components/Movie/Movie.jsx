import React from 'react'
import Hero from '../Movie/Hero/Hero'
import Card from '../Card/Card'
import Trial from '../Trial/Trial.jsx'
import Footer from '../Footer/footer.jsx'
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton.jsx'

function Movie() {
  return (
    <section>
      <Hero />
      <Card />
      <Trial/>
      <Footer/>
      <ScrollToTopButton/>
    </section>


  )
}

export default Movie

