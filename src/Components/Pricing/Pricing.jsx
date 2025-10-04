import React from 'react'
import PricingHero from './PricingHero/PricingHero.jsx'
import PricingMain from './PricingMain/PricingMain.jsx'
import Trial from '../Trial/Trial.jsx'
import Footer from '../Footer/footer.jsx'
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton.jsx'
function Movie() {
  return (
    <div>
       <PricingHero/>
       <PricingMain/>
       <Trial/>
       <Footer/>
       <ScrollToTopButton/>
    </div>
  )
}

export default Movie

