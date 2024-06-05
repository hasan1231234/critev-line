import React from 'react'
import NavBar from '../components/NavBar'
import img1 from '../images/Rectangle 24.png'
import img2 from '../images/Rectangle 23.png'
import imgbox1 from '../images/resource-allocation (2).png'
import imgbox2 from '../images/continuous-improvement (3).png'
import imgbox3 from '../images/reputation (3).png'
import logo1 from '../images/NBE_logo.png'
import logo2 from '../images/0000000000000.png'
import logo3 from '../images/Banque_Misr.png'
import logo4 from '../images/images.png'
import logo5 from '../images/logo (2).png'
import polit from '../images/Rectangle 20.png'
import logo01 from '../images/256-2562560_gyproc-logo-saint-gobain-gyproc-india-hd-png.png'
import logo02 from '../images/sportec_logo_2017_no_slogan.png'
import logo03 from '../images/gratis-png-logo-knauf-organizacion-construccion-paneles-de-yeso-medellin-thumbnail.png'
import logo04 from '../images/unnamed.png'
import logo05 from '../images/590x375-1685755593_d99bd128db176437cfc4.png'
import Footer from '../components/Footer'
export default function Services() {
  return (
    <div>
                <NavBar/>
        <div className="section-1-about background-blue py-5 position-relative">
             <img src={img1} alt="" width='525'  className='img1-about'/>
             <img src={img2} alt="" width='525'  className='img2-about'/>
             <h3 className='text-center fw-bold text-white pt-5'>Services</h3>
             <p className='para-about'>We are into Supplies of various finishing products such as:</p>
        </div>
        <div className=" m-0 section-3">
                <div className='div1 text-white'>
                    <div className="text">
                        <h3 className='fw-bold fs-1'>Carpet Tiles</h3>
                        <p className='fw-bold'>We are specialized to supply project Specific and Design Specification based material for Finishing purpose.</p>
                    </div>
                </div>
                <div className='div2'>
                    <p className='text-white'>Sports Flooring</p>
                </div>
                <div className='div3'>
                    <p className='text-white text-center'>Metal Ceiling System</p>
                </div>
                <div className='div4'>
                    <p className='text-white text-center'>Acoustic Ceiling Tiles</p>
                </div>
            </div>
            <div className="m-0 py-5 background-blue text-white">
                <h3 className='fw-bold fs-1 text-center'>Our philosophy</h3>
                <div className="container my-5 d-flex align-items-center justify-content-between">
                    <div className="box-section4">
                        <img src={imgbox1} alt="" />
                        <h5>Human Resource Management</h5>
                        <p>We believe that the future of our organization depends on the attitude and competence of each member, perseverance, selfdevelopment, and create a corporate culture of respect for talent.</p>
                    </div>
                    <div className="box-section4">
                        <img src={imgbox3} alt="" />
                        <h5>Human Resource Management</h5>
                        <p>We believe that the future of our organization depends on the attitude and competence of each member, perseverance, selfdevelopment, and create a corporate culture of respect for talent.</p>
                    </div>
                    <div className="box-section4">
                        <img src={imgbox2} alt="" />
                        <h5>Human Resource Management</h5>
                        <p>We believe that the future of our organization depends on the attitude and competence of each member, perseverance, selfdevelopment, and create a corporate culture of respect for talent.</p>
                    </div>
                </div>
                <p className='read-more'>Read More</p>
            </div>
            <div className="section-8 m-0 py-5">
                <div className="container  d-flex justify-content-between">
                    <div className='section-8-div-1'>
                        <h3 className='text-white fw-bold mb-3'>Our products</h3>
                        <p className='text-white'>We have a strong business development drive, and hence, our product portfolio and partnership has been growing with time. We have successfully listed our International Manufacturers with whom we deal in the Egypt Market Vendor List.</p>
                    </div>
                    <div className='section-8-div-2'>
                        <p className='text-white mb-5'>Our product portfolio currently includes Supply & Installation of:</p>
                        <ul className='m-0 p-0'>
                            <li className='d-flex align-items-center gap-3 mb-3'><img src={polit} alt="" /><span className='text-white'>Carpet Tiles – From Tarkett</span></li>
                            <li className='d-flex align-items-center gap-3 mb-3'><img src={polit} alt="" /><span className='text-white'>Sports Flooring – From Sportec</span></li>
                            <li className='d-flex align-items-center gap-3 mb-3'><img src={polit} alt="" /><span className='text-white'>Drywall Partition & Ceiling System – From Knauf</span></li>
                            <li className='d-flex align-items-center gap-3 mb-3'><img src={polit} alt="" /><span className='text-white'>Acoustic Ceiling Tiles – From Gyptone / Gyproc</span></li>
                            <li className='d-flex gap-3 mb-3'><img src={polit} alt="" width='25' height='25' /><span className='text-white'>High quality Architectural Metal Solutions ranging from innovative metal ceiling, integrated lighting, movable decorative walls, to internal and external architectural wall cladding – From RAM Metals</span></li>
                            <li className='d-flex align-items-center gap-3 mb-3'><img src={polit} alt="" /><span className='text-white'>Fire Rated & Non-Fire Rated Metal Doors & Frames.</span></li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div className='m-0 py-5 mb-5'>
                <h3 className='text-center fw-bold fs-1'>Our clients</h3>
                <div className="container d-flex align-items-center mt-5 justify-content-between">
                    <img src={logo1} alt="" width='220' />
                    <img src={logo2} alt="" width='220' />
                    <img src={logo3} alt="" width='220' />
                    <img src={logo4} alt="" width='220' />
                    <img src={logo5} alt="" width='220' />
                </div>
            </div>
            
            <div className='m-0 py-5 mb-5'>
                <h3 className='text-center fw-bold fs-1'>Our brands</h3>
                <div className="container d-flex align-items-center mt-5 justify-content-between">
                    <img src={logo01} alt="" width='220' />
                    <img src={logo02} alt="" width='220' />
                    <img src={logo03} alt="" width='220' />
                    <img src={logo04} alt="" width='220' />
                    <img src={logo05} alt="" width='220' />
                </div>
            </div>
          <Footer/>
    </div>
  )
} 
