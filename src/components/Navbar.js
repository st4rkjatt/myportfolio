import React from 'react'
import './navbar.css';
// import Navbar_js from './Navbar_js.js';
import Typical from 'react-typical';
import Social_icons from './Social_icons';

import Main from './Profile';
import Profile from './Profile';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';


function Navbar() {
  return (
    <>
      <div class="page  ">
        {/* <header tabindex="0 ">Header</header> */}
        <div id="nav-container">
          <div class="bg">
            {/* <img className='img-fluid' src="./stark.jpg" alt="" /> */}
          </div>
          <div class="button " tabindex="0">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </div>
          <div id="nav-content" tabindex="0">

            <div className='text-center'>
              <img className='navlogo mb-2' src="./stark.jpg" alt="" />
              <h2 className='text-light fw-bolder' style={{ fontFamily: 'Lobster, cursive' }}>Ajeet Kumar</h2>

              <Social_icons />

            </div>

            <ul className=' text-light py-5 '>


              <li><a href="#home" class="fa fa-home  "> <span>home</span> </a></li><br />
              <li><a href="#about" class="fa fa-book  "> <span>about</span> </a></li><br />
              <li><a href="#skill" class="fa fa-user  "> <span>skill</span> </a></li><br />
              <li><a href="#resume" class="fa fa-file  "> <span>resume</span> </a></li><br />
              
              <li><a href="#contact" class="fa fa-envelope "><span> contact</span></a></li>
              <div className='pt-5'>
                <p className='text-center text-light pt-5'>	&#169; Copyright iPortfolio
                  Designed by <font style={{ color: "#0d6efd" }}>St4rk</font></p>
              </div>
            </ul>


          </div>
        </div>

        <main>
        
      <Profile/>
      {/* <About/>
      <Skills/> 
      <Contact/> */}
        </main>
      </div>
    </>
  )
}

export default Navbar;