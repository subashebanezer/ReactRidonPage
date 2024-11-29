import React from 'react'
import NavBar from '../../components/Commen/NavBar'
import ContactTop from '../../components/03.Contactus/ContactTop'
import ContactInput from '../../components/03.Contactus/ContactInput'
import ContactMap from '../../components/03.Contactus/ContactMap'
import Footer from '../../components/Commen/Footer'

const Contact = () => {
  return (
    <>
      <NavBar />
      <main>
      <ContactTop />
      <ContactInput />
      <ContactMap />
      </main>
      <Footer />
    </>
  )
}

export default Contact
