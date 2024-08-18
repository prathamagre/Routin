import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HomeImg from "./Home.png"
import Footer from "./../../components/Footer/footer"

function Home() {
    return (
        <div>
            <Navbar />
            <h1 className='page-title'><u>Home</u></h1>

            <img src={HomeImg} className='header-img'/>

            <Footer/>
        </div>
    )
}

export default Home