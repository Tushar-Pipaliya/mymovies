import React from 'react'
import ContactsHero from './ContactsHero/ContactsHero';
import ContactForm from './ContactForm/ContactForm';
import Trial from '../Trial/Trial';
import Footer from '../Footer/footer';
import ScrollToTopButton from '../ScrollToTopButton/ScrollToTopButton';

function Contacts() {
  return (
    <div>
      <ContactsHero/>
      <ContactForm/>
      <Trial/>
      <Footer/>
      <ScrollToTopButton/>
    </div>
  )
}

export default Contacts
