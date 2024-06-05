import React from 'react'
import NavBar from '../components/NavBar'
import img1 from '../images/Rectangle 24.png'
import img2 from '../images/Rectangle 23.png'
import contat from '../images/contannt.png'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div>
              <NavBar/>
      <div className="section-1-about background-blue py-5 mb-5 position-relative">
             <img src={img1} alt="" width='525'  className='img1-about'/>
             <img src={img2} alt="" width='525'  className='img2-about'/>
             <h3 className='text-center fw-bold text-white pt-5'>contact us</h3>
        </div>

        <div className='m-0 py-5 mb-5'>
                <div className="container d-flex p-0 my-5">
                    <div className="div-con-1 background-blue text-white">
                        <p className='p-0 m-1'>name</p>
                        <input type="text" className='input-con' placeholder='enter your name'/>

                        <p className='p-0 m-1'>email</p>
                        <input type="text" className='input-con' placeholder='enter your email'/>


                        <p className='p-0 m-1'>phone number</p>
                        <input type="text" className='input-con' placeholder='enter your phone number'/>


                        <p className='p-0 m-1'>message</p>
                        <textarea name="" id="" className='input-con' cols="30" rows="3" placeholder='enter your message here'></textarea>

                    </div>
                    <div className="div-con-2">
                        <img src={contat} alt="" />
                    </div>
                </div>
            </div>
            <Footer/>
    </div>
  )
}
