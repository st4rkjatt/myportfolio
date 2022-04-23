import React from 'react'

function Resume() {
  return (
    <>

      <section id="resume" class="resume" >
        <div class="container" id='resume'>

          <div class="section-title">
            <h1 className='fw-bolder' style={{ color: "#173b6c", borderBottom: "2px solid #173b6c", display: "inline-block" }}>Resume</h1>
            <p> Recent college graduate with background in web development. Excellent focus, communication, and ability
              to learn rapidly. Excels working in a team environment. Strong critical analysis and problem solving.
            </p>
          </div>

          <div class="row">
            <div class="col-lg-6" data-aos="fade-up">
              <h3 class="resume-title">Sumary</h3>
              <div class="resume-item pb-0">
                <h4>Ajeet Kumar</h4>
                <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
                <ul>
                  <li>New Ashok Nagar, Delhi</li>
                  <li>(91) 7817805747</li>
                
                </ul>
              </div>

              <h3 class="resume-title">Education</h3>
              <div class="resume-item">
                <h4>Bachelor of Computer Application </h4>
                <h5>2019-2022</h5> <br />
                <h5>College Name</h5>
                <p><em>SHRI KHUSHIRAM INSTITUTE OF MANAGEMENT & INFORMATION TECHNOLOGY </em></p>
                <h5>University Name</h5>
                <p>Makhanlal Chaturvedi National University of Journalism and Communication,Bhopal </p>
              </div>
              {/* <div class="resume-item">
                <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
                <h5>2010 - 2014</h5>
                <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
                <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
              </div> */}
            </div>
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <h3 class="resume-title">Professional Experience</h3>
              <div class="resume-item">
                <h4>Traninig Experiance</h4>
               
                <p><em><strong>Cetpa Infotech Pvt Ltd, Noida</strong> </em></p>
                <h5>Nov-2021 - Present</h5>
                <ul>
                  <li> As a Mern Stack developer</li>
                  <h5>Projects</h5>
                  <li><a href="https://h4c3rstarkjatt.000webhostapp.com/"><strong><u>Supercar</u></strong></a></li>

                  {/* <li>Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project. </li>
                  <li>Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design</li>
                  <li>Oversee the efficient use of production project budgets ranging from $2,000 - $25,000</li> */}
                </ul>
              </div>
              <div class="resume-item">
                <h4>Strengths</h4>
                {/* <h5>2017 - 2018</h5> */}
                {/* <p><em>Stepping Stone Advertising, New York, NY</em></p> */}
                <ul>
                  <li> Maintains an end user focus</li>
                  <li>Fast self learner</li>
                  <li>Ambition to suceed and willing to learn</li>
                  <li> ‘Never say die’ attitude</li>
                </ul> 
              </div>

              <div class="resume-item">
                <h4>Hobbies</h4>
                {/* <h5>2017 - 2018</h5> */}
                {/* <p><em>Stepping Stone Advertising, New York, NY</em></p> */}
                <ul>
                  <li> Sports and Exercise</li>
                  <li>Music to Music</li>
                  <li>Listing to Stories</li>
                  <li> Traveling</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </section>

    </>
  )
}

export default Resume;