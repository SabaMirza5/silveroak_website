import React from 'react'
import Navbar2 from './Navbar2.jsx'
import Contactmain from './Contactmain.jsx'
import Contact_form from './Contact_form.jsx'
import Contact_box from './Contact_box.jsx'
import Contact_map from './Contact_map.jsx'
import Footer from './Footer.jsx'



function Contact() {
  return (
    <>
         <Navbar2/>
       <Contactmain/>
       <Contact_form />
       <Contact_box />
       <Contact_map/> 
        <Footer/>
    </>
  )
}

export default Contact
