import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import AboutImg from "./About us.png"
import Footer from "./../../components/Footer/footer"

function About() {
    return (
        <div>
            <Navbar />
            <h1 className='page-title'><u>About</u></h1>
            <img src={AboutImg} className='header-img'/>

            <Footer/>
        </div>
    )
}

export default About