import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  const [headData, setHeadData] = useState({});
  const url = "http://127.0.0.1:8000/api/get-page-data/headertop";

  useEffect(() => {
    getData();
  },[])

  const getData = async () => {
    try{
        const response = await fetch(url); 
        const res = await response.json();

        const headerTopData = Object.fromEntries(
          res.data.map((item)=>[
            item.key, item.keyValue
          ])
        );
 
        setHeadData(headerTopData);
       console.log(headerTopData);
        
    }catch(err){
      console.log("catch=>", err)
    }
  }

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
            <li><i className="fa fa-envelope"></i> { headData?.email  && headData.email}</li>
            <li><i className="fa fa-map"></i> { headData?.address && headData.address}</li>
          </ul>
        </div>
        <div className="col-lg-4 col-md-4">
          <ul className="social-links">
            <li><a href={ headData?.fb_link && headData.fb_link }><i className="fab fa-facebook"></i></a></li>
            <li><a href={ headData?.twit_link  && headData.twit_link} target="_blank"><i className="fab fa-twitter"></i></a></li>
            <li><a href={ headData?.linked_link  && headData.linked_link}><i className="fab fa-linkedin"></i></a></li>
            <li><a href={ headData?.insta_link  && headData.insta_link}><i className="fab fa-instagram"></i></a></li>
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
                    <Link to="/" className="logo">
                        <h1>Villa</h1>
                    </Link>
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