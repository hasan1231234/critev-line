import React from 'react'
import logo from '../images/Screenshot 2024-05-27 001709 1.png'
import '../App.css'
import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
    <div className='py-3 d-flex align-items-center justify-content-between container'>
         <img src={logo} alt="" width='198'/>
         <ul className="d-flex align-items-center gap-3 list">
             <Link to='/'><li className='fw-bold'>Home</li></Link>
             <Link to='/about'><li className='fw-bold'>about us</li></Link>
             <Link to='/services'><li className='fw-bold'>services</li></Link>
             <Link to='/portfolio'><li className='fw-bold'>portfolio</li></Link>
             <Link to='/price'><li className='fw-bold'>prices</li></Link>
             <Link to='/privacy'><li className='fw-bold'>privacy & policy</li></Link>
             <Link to='/contact'><li className='fw-bold'>contact us</li></Link>
             <Link to='/shipping'><li className='fw-bold'>Sipping</li></Link>
         </ul>
         <div className='d-flex gap-3 align-items-center'>
            <p className='fw-bold  log-about'>login</p>
            <p className='fw-bold  sign-about'>sign up</p>
         </div>
    </div>
  )
}
