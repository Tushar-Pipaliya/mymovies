import React from 'react'
import Navbar from '../Navbar/Navbar'
import TvShowHero from './TvShowHero/TvShowHero.jsx'
import Card from '../Card/Card'
import Trial from '../Trial/Trial.jsx'
import Footer from '../Footer/footer.jsx'
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton.jsx'


function Movie() {
  return (
    <div>
      <TvShowHero />
      <Card />
      <Trial />
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

export default Movie

