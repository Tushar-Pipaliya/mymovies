
import React from 'react';
import Hero from '../../HeroForAllPage/Hero';

function Movie() {
  const movieBreadcrumb = ['Home', 'Movie'];
  const movieTitle = 'Our';
  const pageName = 'Movie';

  return (
    <Hero title={movieTitle} breadcrumb={movieBreadcrumb} page={pageName}/>
  );
}

export default Movie;
