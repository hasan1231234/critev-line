import React from 'react'
import NavBar from '../components/NavBar'
import img1 from '../images/Rectangle 24.png'
import img2 from '../images/Rectangle 23.png'
import text from '../images/text.png'
import Footer from '../components/Footer'
export default function Privacy() {
  return (
    <div>
              <NavBar/>
      <div className="section-1-about background-blue py-5 mb-5 position-relative">
             <img src={img1} alt="" width='525'  className='img1-about'/>
             <img src={img2} alt="" width='525'  className='img2-about'/>
             <h3 className='text-center fw-bold text-white pt-5'>privacy & policy</h3>
        </div>

        <div className="container my-7">
          <img src={text} alt="" width='100%'/>
        </div>

        <Footer/>

    </div>
  )
}
