import React from 'react'
import './profile.css';
import Typical from 'react-typical';
function Profile2() {
  return (
   <div className="container">
       <div className="row">
           <div className="col-md-6 border">
           <h1 className='fw-bolder  '>
                Hello, <br />
                I'am <br />
                H4c3r5t4rk

              </h1>
              <Typical className="text_animation fw-bolder"
                steps={

                  ['Full Mern Stack ', 2000, 'Fronted Developer', 2000, 'React Js Developer', 2000]}
                loop={Infinity}

              />
              <h2>Web designer, Bug Bounty Hunter and Pentration tester

              </h2>

           </div>
           <div className="col-md-6  text-center">
            <div className="col-8  mx-auto " style={{width:"300px",height:"300px"}}>
               <img style={{width:"100%",height:"100%" , borderRadius:"50%"}} src="./stark.jpg" alt="" />
               </div>
               
               </div>
       </div>
   </div>
  )
}

export default Profile2