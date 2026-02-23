// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useContext } from "react";
// import classes from "./App.module.css"
import mainLogo from "./Asset/screenshot--8--1.png";
import rider from "./Asset/rectangle-13.svg";
import truck from "./Asset/rectangle-14.svg";
import trucks from "./Asset/rectangle-17.svg";
import NigeriaMap from "./Asset/vector-1.svg";
import Delivery from "./Asset/group-11.png";
import newsImg from "./Asset/rectangle-19.svg";
import newsImage from "./Asset/rectangle-20.svg";
import minLogo from "./Asset/screenshot--8--1.png";

function App() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    
    function getCurrentYear() {
        return new Date().getFullYear();
      }

      useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth > 768) {
            setIsOpen(false);
          }
        };
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
      }, []);

  return (
   <body>
    {/* <!-- Hero Banner Section --> */}
    <section className="herosection">
        {/* <!-- Navigation Header --> */}
        <header className="siteheader">
            <div className="headercontent">
                {/* <!-- Logo --> */}
                <img className="logo" alt="Admiral Trucker Logo" src={mainLogo} />
                
 {/* Desktop Navigation */}
 <ul className="nav-links">
        <li><a href="#" className="heading-7-bold brand-color">Home</a></li>
        <li><a href="#about" className="heading-7 brand-color">About</a></li>
        <li><a href="#services" className="heading-7 brand-color">Services</a></li>
        {/* <li><a href="#tracking" className="heading-7 brand-color">Tracking</a></li>
        <li><a href="#career" className="heading-7 brand-color">Career</a></li> */}
        <li><a href="#contact" className="heading-7 brand-color">Contact Us</a></li>
      </ul>

     
            </div>

             {/* Hamburger Icon */}
             {/* <div > */}
      <div className="harmcont">
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span className="top"></span>
        <span className="middle"></span>
        <span className="bottom"></span>
      </div>
      </div>

      {/* Mobile Navigation */}
      <ul className={`mobile-nav ${isOpen ? "open" : ""}`}>
        <li><a href="#" onClick={toggleMenu}>Home</a></li>
        <li><a href="#about" onClick={toggleMenu}>About</a></li>
        <li><a href="#services" onClick={toggleMenu}>Services</a></li>
        {/* <li><a href="#tracking" onClick={toggleMenu}>Tracking</a></li>
        <li><a href="#career" onClick={toggleMenu}>Career</a></li> */}
        <li><a href="#contact" onClick={toggleMenu}>Contact Us</a></li>
      </ul>
      {/* </div> */}

      
        </header>
        
        {/* <!-- Hero Overlay --> */}
        <div style={{width: "100%"}} className="hero-overlay"></div>
        
        {/* <!-- Hero Content --> */}
        <div className={`hero-content ${isOpen ? "heroactivemobile" : ""}`}> 
            <h1 className={`heading-1-bold text-white ${isOpen ? "textactive" : ""}`}>
                Your partner for first class haulage services
            </h1>
            
            <p className="heading-5 text-white" style={{marginTop: "60px", maxWidth: "800px"}}>
                We provide nationwide inter-state equipment cum logistics shipment support and general goods haulage services to individuals and corporate establishments across several sectors in Nigeria.
            </p>
            
            <a href="#contact" className="btn btn-primary heading-5-bold" style={{marginTop: "20px", padding: "24px 32px"}}>
                Contact Us
            </a>
        </div>
    </section>
    
    {/* <!-- Resources Section --> */}
    <section className="section">
        <div className="container">
            <div className="card" style={{maxWidth: "654px", margin: "30px auto", padding: "2rem"}}>
                <h2 className="section-title heading-5-bold brand-color">Resources</h2>
                <div className="flex justify-center items-center gap-8" style={{flexWrap: "wrap"}}>
                    <a href="#" className="text-black anchor" style={{fontSize: "24px", textDecoration: "underline"}}>Road Maps</a>
                    <div style={{width: "1px", height: "60px", backgroundColor: "#ccc", display: "none"}} className="separator"></div>
                    <a href="#" className="text-black anchor" style={{fontSize: "24px", textDecoration: "underline"}}>Transportation News</a>
                    <div style={{width: "1px", height: "60px", backgroundColor: "#ccc", display: "none"}} className="separator"></div>
                    <a href="#" className="text-black anchor" style={{fontSize: "24px", textDecoration: "underline"}}>Weather</a>
                </div>
            </div>
        </div>
    </section>
    
    {/* <!-- About Us Section --> */}
    <section id="about" className="section">
        <div className="container">
            <div className="grid grid-cols-2 gap-8 items-center">
                <div>
                    <img src={rider} alt="Delivery person with packages" style={{width: "100%", height: "auto", borderRadius: "10px"}} />
                </div>
                
                <div className="flex flex-col gap-4">
                    <h2 className="heading-3-bold brand-color">About Us</h2>
                    
                    {/* <p class="heading-7 text-black">
                        We provide nationwide inter-state equipment cum logistics shipment support and general goods haulage services to individuals and corporate establishments across several sectors in Nigeria.
                        <br><br>
                        Our proven expertise is in providing haulage services.
                        <br><br>
                        Following our sustained growth, we are dynamic in responding to the demands of market forces. This is by tailoring services to suit individual customers.
                    </p> */}
                    
                    <a href="#" className="btn btn-primary heading-6-bold" style={{width: "fit-content", marginTop: "1rem"}}>Read More</a>
                </div>
            </div>
        </div>
    </section>
    
    {/* <!-- Featured Services Section --> */}
    <section id="services" className="section bg-brand">
        <div className="container">
            <h2 className="section-title heading-3-bold text-white">Featured Services</h2>
            
            <div className="grid grid-cols-2 gap-8 items-center">
                <div>
                    <img src={truck} alt="Transport truck" style={{width: "100%", height: "auto", borderRadius: "10px"}} />
                </div>
                
                <div>
                    <div className="text-white heading-7" style={{marginBottom: "2rem"}}>
                        <p style={{marginBottom: "1.5rem"}}>
                            Besides Haulage & Logistics, Distribution & WareHousing, and Good-In-Transit Insurance, Equipment Leasing is another important service offered by Admiral Trucker (Nig) Ltd.
                        </p>
                        
                        <p style={{marginBottom: "1.5rem"}}>
                            Equipment leasing is an excellent way to grow your business without significant out of pocket expenses. Leasing offers real advantages including better value, more convenience and greater control.
                        </p>
                        
                        <p>
                            In most cases, the full amount of the equipment, as well as the service, shipping, installation costs and maintenance can be included in the lease. This spreads the cost out evenly over the term of the lease freeing up your money to work harder for you.
                        </p>
                    </div>
                    
                    <div className="text-white heading-7">
                        <a href="#contact" className="anchorcont">Contact Us</a>
                        <span> for our Equipments Leasing services.</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    {/* <!-- Our Edge Section --> */}
    <section className="section bg-neutral-ash">
        <div className="container">
            <div className="grid grid-cols-2 gap-8">
                {/* <!-- Left side with image --> */}
                <div>
                    <img src={trucks} alt="Logistics trucks" style={{width: "100%", height: "100%", objectFit: "cover"}} />
                </div>
                
                {/* <!-- Right side with content --> */}
                <div className="flex flex-col" style={{paddingLeft: "2rem"}}>
                    <h2 className="heading-3-bold brand-color mb-16">Our Edge</h2>
                    
                    <div className="flex flex-col" style={{gap: "2.5rem"}}>
                        <div className="flex items-center">
                            <div className="edge-point-bg flex items-center justify-center" style={{width: "49px", height: "54px", marginRight: "22px"}}>
                                <span className="heading-5-bold text-white">1</span>
                            </div>
                            <div className="heading-7 text-black">
                                State of the art infrastructure for efficient customer services
                            </div>
                        </div>
                        
                        <div className="flex items-center">
                            <div className="edge-point-bg flex items-center justify-center" style={{width: "49px", height: "54px", marginRight: "22px"}}>
                                <span className="heading-5-bold text-white">2</span>
                            </div>
                            <div className="heading-7 text-black">
                                Flexibility in response to client's needs
                            </div>
                        </div>
                        
                        <div className="flex items-center">
                            <div className="edge-point-bg flex items-center justify-center" style={{width: "49px", height: "54px", marginRight: "22px"}}>
                                <span className="heading-5-bold text-white">3</span>
                            </div>
                            <div className="heading-7 text-black">
                                Our services are scalable; which means flexibility to take care of business sizes
                            </div>
                        </div>
                        
                        <div className="flex items-center">
                            <div className="edge-point-bg flex items-center justify-center" style={{width: "49px", height: "54px", marginRight: "22px"}}>
                                <span className="heading-5-bold text-white">4</span>
                            </div>
                            <div className="heading-7 text-black">
                                Highly committed and motivated staff
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    {/* <!-- Destinations Section --> */}
    <section className="section">
        <div className="container text-center">
            <h2 className="section-title heading-3-bold brand-color">Our Destinations</h2>
            
            <div className="destinations-bg mx-auto mb-16 img-resize" style={{width: "750px", height: "610px", maxWidth: "100%", position: "relative"}}>
                <div style={{position: "relative", width: "503px", height: "501px", top: "59px", margin: "0 auto"}}>
                    <img src={NigeriaMap} className="hidden-img" alt="Vector map of Nigeria" style={{position: "absolute", width: "482px", height: "483px", top: "13px", left: "10px"}} />
                    <img src={Delivery} className="hidden-img" alt="Delivery locations across Nigeria" style={{position: "absolute", width: "503px", height: "501px", top: 0, left: 0}} />
                </div>
            </div>
            
            <p className="heading-5 text-black max-w-4xl mx-auto">
                From the major cities to extremely remote locations, our services, geographically hold no bounds in Nigeria.
            </p>
        </div>
    </section>
    
    {/* <!-- News & Events Section --> */}
    <section className="section bg-neutral-ash">
        <div className="container">
            <h2 className="section-title heading-3-bold brand-color">News & Events</h2>
            
            <div className="grid grid-cols-2 gap-8">
                {/* <!-- News Item 1 --> */}
                <div style={{backgroundColor: "black", borderRadius: "20px", overflow: "hidden"}}>
                    <div style={{position: "relative"}}>
                        <img src={newsImg} alt="News image" style={{width: "100%", maxWidth: "100%", height: "395px", objectFit: "cover"}} />
                        <div className="sub-1-med" style={{position: "absolute", bottom: "1rem", left: "38px", backgroundColor:"white", color: "black", borderRadius: "10px", padding: "0.5rem"}}>
                            January 10, 2009
                        </div>
                    </div>
                    
                    <div style={{padding: "1.25rem 38px"}}>
                        <h3 className="heading-5-bold text-white mb-4">Best Fleet Service - 2008</h3>
                        <p className="heading-8 text-white mb-4">
                            Admiral Trucker won the prestigious 'Best Fleet Service' award for 2008. The MD of the company, Mr Henry Sonowo, was at the event to receive the award
                        </p>
                        <hr style={{borderColor: "rgba(255, 255, 255, 0.2)", margin: "1.5rem 0"}} />
                    </div>
                    
                    <div className="flex justify-between items-center" style={{padding: "0 37px 1.5rem"}}>
                        <a href="#" className="heading-8-bold text-white">Read More</a>
                        <svg
                        style={{ width: "24px", height: "24px", color: "white" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                        />
                        </svg>
                    </div>
                </div>
                
                {/* <!-- News Item 2 --> */}
                <div style={{backgroundColor: "black", borderRadius: "20px", overflow: "hidden"}}>
                    <div style={{position: "relative"}}>
                        <img src={newsImage} alt="News image" style={{width: "100%", maxWidth: "100%", height: "395px", objectFit: "cover"}} />
                        <div className="sub-1-med" style={{position: "absolute", bottom: "1rem", left: "38px", backgroundColor: "white", color: "black", borderRadius: "10px", padding: "0.5rem"}}>
                            January 25, 2009
                        </div>
                    </div>
                    
                    <div style={{padding: "1.25rem 38px"}}>
                        <h3 className="heading-5-bold text-white mb-4">3G GPS Tracking System</h3>
                        <p className="heading-8 text-white mb-4">
                            Admiral Trucker (Nig) Limited has just signed a 4-year contract with Globacomm Nigeria, to use its new 3G Tracking System to track her fleets nationwide.
                        </p>
                        <hr style={{borderColor: "rgba(255, 255, 255, 0.2)", margin: "1.5rem 0"}} />
                    </div>
                    
                    <div className="flex justify-between items-center" style={{padding: "0 37px 1.5rem"}}>
                        <a href="#" className="heading-8-bold text-white">Read More</a>
                        <svg
                    style={{ width: "24px", height: "24px", color: "white" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                    />
                    </svg>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    {/* <!-- Contact Us Section --> */}
    <footer id="contact" style={{width: "100%"}} className="section bg-brand text-white">
        <div className="container">
            <div className="grid grid-cols-4 gap-8">
                {/* <!-- Logo column --> */}
                <div>
                    <img src={minLogo} alt="Admiral Trucker Logo" style={{height: "67px", width: "auto"}} />
                </div>
                
                {/* <!-- Company links column --> */}
                <div >
                    <h3 className="heading-6-bold mb-4">Company</h3>
                    <ul className='footernav' style={{listStyle: "none", padding: "0"}}>
                        <li style={{marginBottom: "1rem"}}><a href="#" className="heading-7 text-white">Home</a></li>
                        <li style={{marginBottom: "1rem"}}><a href="#about" className="heading-7 text-white">About</a></li>
                        <li style={{marginBottom: "1rem"}}><a href="#services" className="heading-7 text-white">Services</a></li>
                        {/* <li style={{marginBottom: "1rem"}}><a href="#tracking" className="heading-7 text-white">Tracking</a></li>
                        <li style={{marginBottom: "1rem"}}><a href="#career" className="heading-7 text-white">Career</a></li> */}
                    </ul>
                </div>
                
                {/* <!-- Services links column --> */}
                <div>
                    <h3 className="heading-6-bold mb-4">Services</h3>
                    <ul className='footernav' style={{listStyle: "none", padding: "0"}}>
                        <li style={{marginBottom: "1rem"}}><a href="#" className="heading-7 text-white">Road Haulage & Logistics</a></li>
                        <li style={{marginBottom: "1rem"}}><a href="#" className="heading-7 text-white">Distribution & Warehousing</a></li>
                        <li style={{marginBottom: "1rem"}}><a href="#" className="heading-7 text-white">Equipment Leasing</a></li>
                        <li style={{marginBottom: "1rem"}}><a href="#" className="heading-7 text-white">Support Services</a></li>
                        <li style={{marginBottom: "1rem"}}><a href="#" className="heading-7 text-white">Auto Recovery</a></li>
                    </ul>
                </div>
                
                {/* <!-- Contact information column --> */}
                <div>
                    <h3 className="heading-6-bold mb-4">Contact Us</h3>
                    <ul className='footernav marginauto' style={{listStyle: "none", padding: "0"}}>
                        <li style={{marginBottom: "1rem"}}><a href="tel:+2347000009098" className="heading-7 text-white">+234-7000009098</a></li>
                        <li style={{marginBottom: "1rem", whiteSpace: "wrap" }}><a href="mailto:info@admiraltrucker.net" className="heading-7 text-white">info@admiraltrucker.net</a></li>
                        <li style={{marginBottom: "1rem"}}><span className="heading-7 text-white">77th James Street, Lagos State.</span></li>
                        <li style={{marginBottom: "1rem"}}><a href="" className="heading-7 text-white">admiraltrucker.net</a></li>
                    </ul>
                </div>
            </div>
            
            {/* <!-- Divider -->Name */}
            <hr style={{margin: "2rem 0", borderColor: "rgba(255, 255, 255, 0.2)"}} />
            
            {/* <!-- Copyright --> */}
            <div className="text-center">
                <p className="text-white">
                    Copyright © {getCurrentYear()} <span className="">Admiral Trucker Limited</span>. All Rights Reserved.
                </p>
            </div>
        </div>
    </footer>
    
</body>
  );
}

export default App;
