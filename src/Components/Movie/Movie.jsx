import React from 'react'
import MovieHero from './MovieHero/MovieHero.jsx'
import Card from '../Card/Card'
import Trial from '../Trial/Trial.jsx'
import Footer from '../Footer/footer.jsx'
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton.jsx'

function Movie() {
  return (
    <section>
      <MovieHero />
      <Card />
      <Trial/>
      <Footer/>
      <ScrollToTopButton/>
    </section>


  )
}

export default Movie

