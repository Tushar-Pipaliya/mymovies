
import React from 'react';
import Hero from '../../HeroForAllPage/Hero';

function TvShowHero() {
  const movieBreadcrumb = ['Home', 'Tv Show'];
  const movieTitle = 'Tv';
  const pageName = ' Show';

  return (
    <Hero title={movieTitle} breadcrumb={movieBreadcrumb} page={pageName}/>
  );
}

export default TvShowHero;
