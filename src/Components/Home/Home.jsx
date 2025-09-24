import React from 'react'
import Header from './Header/Header'
import MoviesCard from './MoviesCard/MoviesCard.jsx'
import Feature from './Feature/Feature.jsx'

function Home() {
  return (
    <div>
      <Header/>
      <MoviesCard/>
      <Feature/>
    </div>
  )
}

export default Home
