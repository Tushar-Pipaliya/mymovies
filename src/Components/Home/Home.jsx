import React from 'react'
import Header from './Header/Header'
import MovieCard from './moviesCard/movieCard.jsx'
import Feature from './Feature/Feature.jsx'
// import Data from './moviesData/Data.jsx'
import Rated from './topRated/Rated.jsx'
import Overview from './Overview/Overview.jsx'
import TvSeries from './TvSeries/TvSeries.jsx'
import Trial from '../Trial/Trial.jsx'
import Footer from '../Footer/footer.jsx'
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton.jsx'


function Home() {
  return (
    <div>
      <Header/>
      <MovieCard/>
      <Feature/>
      <Rated/>
      <Overview/>
      <TvSeries/>
      <Trial/>
      <Footer/>
      <ScrollToTopButton/>
    </div>
  )
}

export default Home
