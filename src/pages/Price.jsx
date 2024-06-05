import React from 'react'
import NavBar from '../components/NavBar'
import img1 from '../images/Rectangle 24.png'
import img2 from '../images/Rectangle 23.png'
import logo from '../images/mark 1.png'
import Footer from '../components/Footer'
export default function Price() {
  return (
    <div>
      <NavBar/>
      <div className="section-1-about background-blue py-5 mb-5 position-relative">
             <img src={img1} alt="" width='525'  className='img1-about'/>
             <img src={img2} alt="" width='525'  className='img2-about'/>
             <h3 className='text-center fw-bold text-white pt-5'>Price</h3>
        </div>
        <h2 className='text-center color-blue fs-1 pt-5'>packages</h2>
        <div className="d-flex justify-content-between my-5 container">
           <div className="box-price">
              <h3 className='fw-bold'>Premium</h3>
              <img src={logo} alt="" className='my-5'/>
              <p className='fw-bold fs-3'>1000$</p>
              <p className="sub-pric">subscribe</p>
           </div>
           <div className="box-price">
              <h3 className='fw-bold'>General</h3>
              <img src={logo} alt="" className='my-5'/>
              <p className='fw-bold fs-3'>550$</p>
              <p className="sub-pric">subscribe</p>
           </div>
        </div>
        <Footer/>
    </div>
  )
}
