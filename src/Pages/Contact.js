import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer' 
import ContactContainer from '../Components/Card/ContactContainer'

function Contact() {
    return (
        <div className= "contact">
            <Navbar/>
            <ContactContainer/>
            <Footer/>
        </div>
    )
}

export default Contact
