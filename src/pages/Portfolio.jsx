import React from 'react'
import NavBar from '../components/NavBar'
import img1 from '../images/Rectangle 24.png'
import img2 from '../images/Rectangle 23.png'
import logo from '../images/NBE_logo.png'
import Footer from '../components/Footer'
import images from '../images/Frame 536.png'
export default function Portfolio() {
  return (
    <div>
                <NavBar/>
        <div className="section-1-about background-blue py-5 mb-5 position-relative">
             <img src={img1} alt="" width='525'  className='img1-about'/>
             <img src={img2} alt="" width='525'  className='img2-about'/>
             <h3 className='text-center fw-bold text-white pt-5'>portfolio</h3>
        </div>

        <h2 className='text-center fw-bold fs-1 py-5'>NBE BRANCH PROJECTS</h2>
        <img src={logo} alt="" className='text-center mx-auto d-block mb-5'/>

        <div className="container">
        <img src={images} alt="" width='100%'/>
        </div>


        <Footer/>

    </div>
  )
}
