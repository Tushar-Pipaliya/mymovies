
import React from 'react';
import Hero from '../../HeroForAllPage/Hero';

function PricingHero() {
  const movieBreadcrumb = ['Home', 'Movie'];
  const movieTitle = 'Our';
  const pageName = 'Pricing';

  return (
    <Hero title={movieTitle} breadcrumb={movieBreadcrumb} page={pageName}/>
  );
}

export default PricingHero;
