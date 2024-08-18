import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import ContactUsImg from "./Contact us.png"
import Footer from "./../../components/Footer/footer"

function Contact() {
    return (
        <div>
            <Navbar />
            <h1 className='page-title'><u>Contact</u></h1>

            <img src={ContactUsImg} className='header-img'/>

            <Footer/>
        </div>
    )
}

export default Contact