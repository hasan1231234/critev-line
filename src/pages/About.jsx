import React from 'react'
import NavBar from '../components/NavBar'
import img1 from '../images/Rectangle 24.png'
import img2 from '../images/Rectangle 23.png'
import img5 from '../images/Rectangle 13.png'
import img6 from '../images/right.png'
import img7 from '../images/img7.png'
import img8 from '../images/Rectangle 14.png'
import logocore1 from '../images/logo1.png'
import logocore2 from '../images/logo2.png'
import logocore3 from '../images/logo3.png'
import logocore4 from '../images/logo4.png'
import logocore5 from '../images/logo5.png'
import core1 from '../images/18.png'
import core2 from '../images/19.png'
import img9 from '../images/left.png'
import img10 from '../images/right-1.png'
import boxlogo from '../images/mark (1).png'
import logo01 from '../images/256-2562560_gyproc-logo-saint-gobain-gyproc-india-hd-png.png'
import logo02 from '../images/sportec_logo_2017_no_slogan.png'
import logo03 from '../images/gratis-png-logo-knauf-organizacion-construccion-paneles-de-yeso-medellin-thumbnail.png'
import logo04 from '../images/unnamed.png'
import logo05 from '../images/590x375-1685755593_d99bd128db176437cfc4.png'
import Footer from '../components/Footer'
export default function About() {
  return (
    <div>
        <NavBar/>
        <div className="section-1-about background-blue py-5 position-relative">
             <img src={img1} alt="" width='525'  className='img1-about'/>
             <img src={img2} alt="" width='525'  className='img2-about'/>
             <h3 className='text-center fw-bold text-white pt-5'>About Us</h3>
             <p className='para-about'>We are into Supplies of various finishing products such as:</p>
        </div>
        <div className="m-0 section-5 position-relative">
                <img src={img5} className='img5' alt="" width='525' height='100%' />
                <img src={img6} className='img6' alt="" width='525' height='100%' />
                <div>
                    <h3 className='fs-1'>Our vision</h3>
                    <p className='fw-bold'>Creative Line envisions an aesthetical establishment <br /> in every place of the country with gratified <br /> customers.</p>
                    <p className="read-more-1 w-content background-blue text-white fw-bold">read more</p>
                </div>

            </div>
            <div className="m-0 section-6 position-relative">
                <img src={img7} className='img5' alt="" width='525' height='100%' />
                <img src={img8} className='img6' alt="" width='525' height='100%' />
                <div>
                    <h3 className='fs-1'>Our mission</h3>
                    <p className='fw-bold'>To come out with market shaping well-designed with <br /> utmost quality of products and services that <br /> satisfies the needs and want of our Clients, meeting <br /> beyond what is expected to be done.</p>
                    <p className="read-more-1 w-content background-blue text-white fw-bold">read more</p>
                </div>

            </div>
            <div className="m-0 section-7 position-relative">
                <img src={img9} className='img9' alt="" width='525' height='100%' />
                <img src={img10} className='img6' alt="" width='525' height='100%' />
                <h3 className='fs-1 text-center text-white my-5'>Our quality</h3>
                <div className="container d-flex alin-items-center justify-content-center mt1">
                    <div className="box-quality">
                        <img src={boxlogo} alt="" />
                        <p>We never compromise on Quality</p>
                    </div>
                    <div className="box-quality">
                        <img src={boxlogo} alt="" />
                        <p>We continuously try to improve our products, our process and our services</p>
                    </div>
                    <div className="box-quality">
                        <img src={boxlogo} alt="" />
                        <p>Customer satisfaction is our commitment.</p>
                    </div>
                </div>


            </div>
            <div className='m-0 py-5 mt-5 position-relative'>
                <img src={core1} className='core1' alt="" width='525' />
                <img src={core2} className='core2' alt="" width='525' />
                <h3 className='text-center fw-bold fs-1'>Our core value</h3>
                <div className="container d-flex align-items-center mt-5 flex-wrap justify-content-between">
                    <div className="box-core">
                        <div className="d-flex align-items-center mb-3 gap-3">
                            <img src={logocore1} alt="" />
                            <h4 className='fw-bold'>Character</h4>
                        </div>
                        <p className='fw-bold para-core'>We are respectful, honest, positive and fair to all Clients and Manufacturers.</p>
                    </div>

                    <div className="box-core">
                        <div className="d-flex align-items-center mb-3 gap-3">
                            <img src={logocore2} alt="" />
                            <h4 className='fw-bold'>Character</h4>
                        </div>
                        <p className='fw-bold para-core'>We embrace a culture of continuously improving our products, our process and ourselves.</p>
                    </div>

                    <div className="box-core">
                        <div className="d-flex align-items-center mb-3 gap-3">
                            <img src={logocore3} alt="" />
                            <h4 className='fw-bold'>Character</h4>
                        </div>
                        <p className='fw-bold para-core'>We strive to achieve our common goals through interdependency and collaboration</p>
                    </div>

                    <div className="box-core">
                        <div className="d-flex align-items-center mb-3 gap-3">
                            <img src={logocore4} alt="" />
                            <h4 className='fw-bold'>Character</h4>
                        </div>
                        <p className='fw-bold para-core'>We take ownership of achieving our mission to the complete satisfaction of all our Clients, Customers and Manufacturers.</p>
                    </div>

                    <div className="box-core">
                        <div className="d-flex align-items-center mb-3 gap-3">
                            <img src={logocore5} alt="" />
                            <h4 className='fw-bold'>Character</h4>
                        </div>
                        <p className='fw-bold para-core'>We manage our business on the diversified segment, within the building service industry for Distribution and Trading.</p>
                    </div>
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
