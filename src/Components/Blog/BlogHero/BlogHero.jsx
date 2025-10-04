

import React from 'react';
import Hero from '../../HeroForAllPage/Hero'

function BlogHero() {
  const movieBreadcrumb = ['Home', 'Contacts'];
  const movieTitle = 'News Update';

  return (
    <Hero title={movieTitle} breadcrumb={movieBreadcrumb} />
  );
}

export default BlogHero;

