
import React from 'react';
import Hero from '../../HeroForAllPage/Hero'

function ContactsHero() {
  const movieBreadcrumb = ['Home', 'Contacts'];
  const movieTitle = 'Contacts Us';

  return (
    <Hero title={movieTitle} breadcrumb={movieBreadcrumb} />
  );
}

export default ContactsHero;
