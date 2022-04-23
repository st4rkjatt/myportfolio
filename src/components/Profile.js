import React from 'react'
import Typical from 'react-typical';

import './profile.css';

function Profile() {
    return (
        <>
        <div className="container bg1 py-5 " id='home'>
          <div className="row">
            <div className=" col-md-8 main_text1    ">
              <h1 className='fw-bolder  '>
                Hello, <br />
                I'am <br />
                H4c3r5t4rk

              </h1>
              <Typical className="text_animation fw-bolder "
                steps={

                  ['Full Mern Stack ', 4000, 'Fronted Developer', 4000, 'React Js Developer', 4000]}
                loop={Infinity}

              />
              <h2>Web designer, Bug Bounty Hunter and Pentration tester

              </h2>

            </div>


            <div className="col-md-4  text-center mb-5 ">
            <div className="   mx-auto " >
               <img className='img-fluid' style={{ width:"400px",height:"480px", borderRadius:"100px"}} src="./pic.jpeg" alt="" />
               </div>
               
               </div>

          </div>

        </div>





        </>
    )
}

export default Profile;