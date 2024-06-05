import React from 'react'
import logo from '../images/Screenshot 2024-05-27 001709 1.png'
import email from '../images/Frame 532.png'
import phon from '../images/Frame 531.png'
import address from '../images/Frame 531 (1).png'
export default function 
() {
  return (
    <div className='m-0'> 
         <div className="footer-1 py-5 background-blue text-white">
             <div className="d-flex align-items-center container justify-content-between">
                 <h3>subscribe now</h3>
                 <div className='w-50'>
                    <input className='input-con w-75' placeholder='enter your email'/>
                    <p className='sub'>subscribe</p>
                 </div>
             </div>
         </div>
         <div className="footer-2 py-5 ">
             <div className="d-flex container justify-content-between">
                 <div>
                    <img src={logo} alt="" className='mb-3'/>
                    <p className='pfoot'>Office No. 10, Abd Al-Azeem Rashid Street, Al-Agouzah, Giza, Egypt</p>
                 </div>
                 <ul>
                    <h2 className='fw-bold mb-5'>quick links</h2>
                    <li className='fw-bold mb-3'>home</li>
                    <li className='fw-bold mb-3'>about us</li>
                    <li className='fw-bold mb-3'>services</li>
                    <li className='fw-bold mb-3'>prices</li>
                    <li className='fw-bold mb-3'>privacy policy</li>
                    <li className='fw-bold mb-3'>contact us</li>
                 </ul>
                 <div>
                    <h2 className='fw-bold mb-5 '>get in touch</h2>
                    <img src={email} alt=""  className='my-3'/>
                    <h4 className='fw-bold '>info@creativeline-e.g.com</h4>
                    <img src={phon} alt="" className='my-3' />
                    <h4 className='fw-bold '>002 02 37611090</h4>
                    <img src={address} alt=""  className='my-3'/>
                    <p className='fw-bold'>Office No. 10, Abd Al- <br /> Azeem Rashid Street, Al- <br /> Agouzah, Giza, Egypt</p>
                 </div>
             </div>
         </div>
    </div>
  )
}
