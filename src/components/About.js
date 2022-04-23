import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
function About() {

    useEffect(() => {
        AOS.init({
            duration: 1000
        });
    }, []);


    const about={
     
        // border:"2px solid red",
        position:"relative",
        zIndex:"-1"


    }
    return (
        <>
            <div className="container   " id='about' style={about} data-aos="fade-up">
                <div className="row" style={{marginTop:"100px"}}>
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <h1 className='fw-bolder' style={{ color: "#173b6c", borderBottom: "2px solid #173b6c ",display: "inline-block" }}>About</h1>
                        <p className='py-4'>There are multiple types of programmers in the world from front-end and back-end professionals to specialized application developers and software testers. With that being said, at some point in your IT career path, you will probably choose which area to focus on. Well unless you're passionate about every aspect of the software development process. If that's your case then becoming a full stack developer might be the best option for you since these professionals have functional knowledge and extensive experience in diverse and basically all aspects of computer software development. Simply said, they are able to take a concept and turn it into a finished product.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-4 ">
                        <img className='img-fluid ' data-aos="fade-up" style={{ width: "380px", height: "450px", borderRadius: "20px" }} src="./pic3.jpeg" alt="pic" />
                    </div>
                    <div className="col-lg-8 col-md-8 col-sm-4 ">
                        <div className="row ">
                            <div className="col-lg-12 col-md-12 col-sm-12 pt-3">
                                <h1 style={{ color: "#173b6c", fontWeight: "700" }} >Full Stack/Mern Stack Developer</h1>
                            </div>
                            <br />
                            <p>Innovative optimized solution seeker. Excited to be at the deployment phase of my new career as a Mern Stack Developer. I am ambitious, adventurous, assiduous, animated, and an alliteration advocate.

                            </p>
                        </div>


                        <div className="row py-2">
                            <div className="col-lg-6">
                                <ul>
                                    <li>
                                        <span className='text-primary'>	&#62;&nbsp;</span>
                                        <strong>Birthday:</strong>
                                        <p className='d-inline-block'>&nbsp; 02 Jan 2001</p>
                                    </li>
                                    <li>
                                        <span className='text-primary'>	&#62;&nbsp;</span>
                                        <strong>Website:</strong>
                                        <p className='d-inline-block'> &nbsp;www.google.com</p>
                                    </li>
                                    <li>
                                        <span className='text-primary'>	&#62;&nbsp;</span>
                                        <strong>Phone:</strong>
                                        <p className='d-inline-block'>&nbsp; (+91) 7817805747</p>
                                    </li>
                                    <li>
                                        <span className='text-primary'>	&#62;&nbsp;</span>
                                        <strong>City:</strong>
                                        <p className='d-inline-block'>	&nbsp; Delhi</p>


                                    </li>

                                </ul>

                            </div>
                            <div className="col-lg-6 ">
                                <ul>
                                    <li>
                                        <span className='text-primary'>	&#62;&nbsp;</span>
                                        <strong>Age:</strong>
                                        <p className='d-inline-block'>&nbsp; 21</p>


                                    </li>
                                    <li>
                                        <span className='text-primary'>	&#62;&nbsp;</span>
                                        <strong>Degree:</strong>
                                        <p className='d-inline-block'></p>


                                        <p className='d-inline-block'>	&nbsp; B.C.A</p>


                                    </li>
                                    <li>
                                        <span className='text-primary'>	&#62;&nbsp;</span>
                                        <strong>Email:</strong>
                                        <p className='d-inline-block'>	&nbsp; Ajaat5942362@gmail.com</p>

                                    </li>

                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About;