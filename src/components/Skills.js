import React from 'react'

function Skills() {

    const skill={
        position:"relative",
        zIndex:"-1"
    }
    return (
        <div className="container py-5 " id='skill' style={skill}>
            <div className="row">
                <div className="col-12" data-aos="fade-up">
                    <h1 className='fw-bolder' style={{ color: "#173b6c", borderBottom: "2px solid #173b6c", display: "inline-block" }}>Skills</h1>

                    <p>
                    Worked with clients and senior user experience designers to understand the branding strategies and design goals to define strategy, layout and features for the web sites/applications design.
                    Worked with clients to develop layout, color scheme for their website and implemented it into a final interface design with the HTML/CSS and JavaScript.      </p>
                </div>
            </div>
            <div className="row" >
                <div className="col-lg-6 col-md-6 col-12" data-aos="fade-up">
                    <p style={{ color: "#173b6c", fontWeight: "900" }}>HTML</p>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{ width: "90%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
                    </div>

                    <p style={{ color: "#173b6c", fontWeight: "900" }}>CSS</p>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{ width: "70%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
                    </div>

                    <p style={{ color: "#173b6c", fontWeight: "900" }}>JAVASCRIPT</p>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">60%</div>
                    </div>

                    <p style={{ color: "#173b6c", fontWeight: "900" }}>BOOTSTRAP </p>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
                    </div>

                </div>

                <div className="col-lg-6 col-md-6 col-12" data-aos="fade-up">


                    <p style={{ color: "#173b6c", fontWeight: "900" }}>REACT JS</p>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
                    </div>

                    <p style={{ color: "#173b6c", fontWeight: "900" }}>NODE JS</p>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">75%</div>
                    </div>

                    <p style={{ color: "#173b6c", fontWeight: "900" }}>EXPRESS JS</p>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">85%</div>
                    </div>
                    <p style={{ color: "#173b6c", fontWeight: "900" }}>MONGODB</p>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style={{ width: "75%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">85%</div>
                    </div>


                </div>
            </div>
        </div>

    )
}

export default Skills;