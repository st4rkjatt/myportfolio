import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
export default function Contact() {

  useEffect(() => {
    AOS.init({
        duration: 1000
    });
}, []);

const icons={
 textAlign:"center",
  color:"white",
  width:"50px",
  height:"50px",
 padding:"12px",
  borderRadius:"50%",
  background:"blue",
  color:"white",
  margin:"5px"

  
}

const contact={
     
  // border:"2px solid red",
  position:"relative",
  zIndex:"-1"


}
  
  return (
    <>
      <div className="container my-5" id='contact' style={contact}>
        <div className="row">
          
          <div className="col-lg-6 col-md-6 col-sm-12 py-5">
            
            <div class="container" data-aos="fade-up">
              <form action="action_page.php">

                <label for="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your name.." />

                <label for="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.." />

                <label for="country">Country</label>
                <select id="country" name="country">
                  <option value="australia">Australia</option>
                  <option value="canada">Canada</option>
                  <option value="usa">USA</option>
                </select>

                <label for="subject">Subject</label>
                <textarea id="subject" name="subject" placeholder="Write something.." ></textarea>

                <input type="submit" value="Submit" />

              </form>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12" data-aos="fade-up">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14012.938738008055!2d77.29727332982371!3d28.59273555979326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce48b866af1ef%3A0x58913d62225c2c0!2sNew%20Ashok%20Nagar%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1648570611414!5m2!1sen!2sin" width="100%" height="100%"   loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        
                </div >
            </div >

            <div className="row my-5">
              <div className="col-md-12 " data-aos="fade-up">
              <div class="row">
              <div class="col-md-3">
                <div class="dbox w-100 text-center">
                  <div class="icon d-flex align-items-center justify-content-center">
                    <span style={icons}>
                    <i class="fa  fa-map-marker " aria-hidden="true"></i>
                       </span>
                  </div>
                  <div class="text">
                    <p><span><strong>Address:</strong></span> New Ashok Nagar, Delhi</p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="dbox w-100 text-center">
                  <div class="icon d-flex align-items-center justify-content-center">
                    <span style={icons} class="fa fa-phone"></span>
                  </div>
                  <div class="text">
                    <p><span><strong>Phone:</strong></span> <a href="tel://1234567920">7817805747</a></p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="dbox w-100 text-center">
                  <div class="icon d-flex align-items-center justify-content-center">
                    <span style={icons} class="fa fa-paper-plane"></span>
                  </div>
                  <div class="text">
                    <p><span><strong>Email:</strong></span> <a href="#"><span >Ajaat5942362@gmail.com</span></a></p>
                  </div>
                </div>
              </div>
              <div class="col-md-3">
                <div class="dbox w-100 text-center">
                  <div class="icon d-flex align-items-center justify-content-center">
                    <span  style={icons} class="fa fa-globe"></span>
                  </div>
                  <div class="text">
                    <p><span><strong>Website:</strong></span>
                     <a href="https://h4c3rstarkjatt.000webhostapp.com/">h4c3rstarkjatt.com</a>
                      </p>
                  </div>
                </div>
              </div>
            </div>
              </div>
            </div>
          </div >
        </>
        )
}
