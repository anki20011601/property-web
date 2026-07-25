import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
      {/* <!-- ***** Preloader Start ***** --> */}
  {/* <div id="js-preloader" className="js-preloader">
    <div className="preloader-inner">
      <span className="dot"></span>
      <div className="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div> */}
  {/* <!-- ***** Preloader End ***** --> */}
     <div className="sub-header">
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-8">
          <ul className="info">
            <li><i className="fa fa-envelope"></i> info@company.com</li>
            <li><i className="fa fa-map"></i> Sunny Isles Beach, FL 33160</li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-4">
          <ul className="social-links">
            <li><a href="#"><i className="fab fa-facebook"></i></a></li>
            <li><a href="https://x.com/minthu" target="_blank"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  {/* <!-- ***** Header Area Start ***** --> */}
  <header className="header-area header-sticky">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <nav className="main-nav">
                    {/* <!-- ***** Logo Start ***** --> */}
                    <a href="index.html" className="logo">
                        <h1>Villa</h1>
                    </a>
                    {/* <!-- ***** Logo End ***** --> */}
                    {/* <!-- ***** Menu Start ***** --> */}
                    <ul className="nav">
                      <li><NavLink to="/" >Home</NavLink></li>
                      <li><NavLink to="/about">About</NavLink></li>
                      <li><NavLink to="/properties">Properties</NavLink></li>
                      {/* <li><NavLink to="/properties">Property Details</NavLink></li> */}
                      <li><NavLink to="/contact">Contact Us</NavLink></li>
                      <li><NavLink to="#"><i className="fa fa-calendar"></i> Schedule a visit</NavLink></li>
                  </ul>   
                    <a className='menu-trigger'>
                        <span>Menu</span>
                    </a>
                    {/* <!-- ***** Menu End ***** --> */}
                </nav>
            </div>
        </div>
    </div>
  </header>
  {/* <!-- ***** Header Area End ***** --> */}
    </>
  )
}

export default Header