import React from 'react'
import img1 from '../images/Rectangle 3.png'
import img2 from '../images/Frame 7.png'
import img3 from '../images/Frame 10.png'
import imgbox1 from '../images/resource-allocation (2).png'
import imgbox2 from '../images/continuous-improvement (3).png'
import imgbox3 from '../images/reputation (3).png'
import img5 from '../images/Rectangle 13.png'
import img6 from '../images/right.png'
import img7 from '../images/img7.png'
import img8 from '../images/Rectangle 14.png'
import img9 from '../images/left.png'
import img10 from '../images/right-1.png'
import boxlogo from '../images/mark (1).png'
import logo1 from '../images/NBE_logo.png'
import logo2 from '../images/0000000000000.png'
import logo3 from '../images/Banque_Misr.png'
import logo4 from '../images/images.png'
import logo5 from '../images/logo (2).png'
import logocore1 from '../images/logo1.png'
import logocore2 from '../images/logo2.png'
import logocore3 from '../images/logo3.png'
import logocore4 from '../images/logo4.png'
import logocore5 from '../images/logo5.png'
import core1 from '../images/18.png'
import core2 from '../images/19.png'
import polit from '../images/Rectangle 20.png'
import logo01 from '../images/256-2562560_gyproc-logo-saint-gobain-gyproc-india-hd-png.png'
import logo02 from '../images/sportec_logo_2017_no_slogan.png'
import logo03 from '../images/gratis-png-logo-knauf-organizacion-construccion-paneles-de-yeso-medellin-thumbnail.png'
import logo04 from '../images/unnamed.png'
import logo05 from '../images/590x375-1685755593_d99bd128db176437cfc4.png'
import contat from '../images/contannt.png'
import Footer from '../components/Footer'
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Home() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        <div>
            <div className="hero">
                <img src={img1} alt="" className='img1' width='100%' />
                <div className="nav m-0 container d-flex align-items-center justify-content-between">
                    <div className='none'> </div>
                    <ul className='d-flex align-items-center m-0 gap-3'>
                        <Link to='/'><li className='text-white fw-bold'>Home</li></Link>
                        <Link to='/about'><li className='text-white fw-bold'>About Us</li></Link>
                        <Link to='/services'><li className='text-white fw-bold'>Services</li></Link> 
                       <Link to='/portfolio'><li className='text-white fw-bold'>Portfolio</li></Link>    
                        <Link to='/price'><li className='text-white fw-bold'>Prices</li></Link>
                        <Link to='/privacy'><li className='text-white fw-bold'>Privacy & Policy</li></Link>
                        <Link to='/contact'><li className='text-white fw-bold'>Contact Us</li></Link>
                    </ul>
                    <div className='d-flex align-items-center'>
                        <span className='text-white  btn-hero'>Login</span>
                        <span className='background-blue text-white btn-hero'>Sign Up</span>
                    </div>
                </div>
                {/* <div className="d-flex align-items-center justify-content-between mt container">
                    <h3 className='text-white right-hero'>
                        We are Creative Line for General Trading, Finishing, Fit-out and Wood Works established in Egypt since 2014.
                    </h3>
                    <img src={img2} alt="" />
                </div> */}
                <Slider className='slider' {...settings}>
      <div>
      <h3 className='text-white right-hero'>
                        We are Creative Line for General Trading, Finishing, Fit-out and Wood Works established in Egypt since 2014.
                    </h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>

                <div className='container mt-5'>
                    <img src={img3} alt="" className='mt-5' />
                </div>

            </div>
            <div className="background-blue m-0 section-2 d-flex justify-content-center align-items-center text-white">
                <p className="text-center fs-3 fw-bold">
                    We are into Supplies of various finishing <br /> products such as:
                </p>
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
                <h3 className='text-center fw-bold fs-1'>Our brands</h3>
                <div className="container d-flex align-items-center mt-5 justify-content-between">
                    <img src={logo01} alt="" width='220' />
                    <img src={logo02} alt="" width='220' />
                    <img src={logo03} alt="" width='220' />
                    <img src={logo04} alt="" width='220' />
                    <img src={logo05} alt="" width='220' />
                </div>
            </div>

            <div className='m-0 py-5 mb-5'>
                <h3 className='text-center fw-bold fs-1'>contact us</h3>
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
