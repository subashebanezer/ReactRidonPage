import React from 'react'
import ComButton from '../Commen/ComButton';

const ContactInput = () => {
    const stylePad = {
        padding: "0.7rem 2rem",
      };

  return (
    <>
      {/* <!-- Section-2 --> */}
         <section className="py-3 ps-md-4 p-3">
            <div className="container px-md-3 ps-md-5">
                <div className="row py-md-5 py-3">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <form >
                            <label htmlFor="name" className="pb-3 fs-5">Name <span className="text-danger">*</span></label>
                            <input type="text" className="form-control form-control-lg mb-3 rounded-0" id="name" aria-describedby="nameHelp" />
                            <label htmlFor="Email" className="py-3 fs-5">Email <span className="text-danger">*</span></label>
                            <input type="email" name="email" className="form-control form-control-lg mb-3 rounded-0" id="Email" />
                            <label htmlFor="Subject"className="py-3 fs-5">Subject <span className="text-danger">*</span></label>
                            <input type="text" className="form-control form-control-lg mb-3 rounded-0" id="Subject" />
                            <label htmlFor="Message"className="py-3 fs-5">Message <span className="text-danger">*</span></label>
                            <textarea className="form-control form-control-lg mb-3 rounded-0" id="Message" rows="7"></textarea>
                            <ComButton padding={stylePad} content="Submit"   />
                        </form>
                    </div>
                    <div className="col-lg-6 ps-lg-3 ">
                        <p className="display-6 fs-3">Get In Touch</p>
                        <div className="rounded mt-4" style={{backgroundColor: "#CC4452",
                        height: "2.4px",
                        width: "8.5%", 
                        marginBottom: "2rem" }}></div> 
                        <p className="mb-0" style={{fontSize: "1.03rem"}}>Duis commodo ipsum quis ante venenatis rhoncus. Vivamus imperdiet felis ac facilisis hendrerit. Nulla eu elementum ex, ut pulvinar est. Nam aliquet et tortor sed aliquet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer sit amet aliquet leo sed aliquam ex.</p>
                        <p className="display-5 fs-3 mt-5">Contact Details</p>
                        <div className="rounded my-4" style={{backgroundColor: "#CC445",
                            height: "2.4px",
                            width: "10%" }} >
                        </div>
                        <div className="d-flex border-bottom border-top py-2" style={{marginTop: "2.4rem"}}>
                        <i className="fa-solid fa-location-dot fs-4 mx-4 py-3 text-danger"></i><a href="#Top" className="nav-link pb-3 align-self-end " >700 5th Avenue, New York City, United States</a> 
                        </div>
                        <div className="d-flex border-bottom border-top py-2">
                            <i className="fa-solid fa-phone fs-4 mx-4 py-3 text-danger"></i> <a href="#Top" className="nav-link py-2 align-self-center" >1800-1111-2222 </a>
                        </div>
                        <div className="d-flex border-bottom border-top py-2 mb-5">
                            <i className="fa-solid fa-envelope fs-4 mx-4 py-3 text-danger"></i><a href="#Top" className="nav-link py-1 align-self-center" >booking@example.com </a>
                        </div>
                        <div>
                            <p className="display-6 fs-3">Social Media</p>
                            <div className="rounded " style={{backgroundColor: "#CC4452",
                            height: "2.4px",
                            width: "8.8%", 
                            marginBottom: "2.4rem", 
                            marginTop: "2rem"}} ></div> 
                            <div className=" d-flex justify-content-between text-danger" style={{width: "40%"}}>
                                <i className="fa-brands fa-facebook-f fa-xl"></i>
                                <i className="fa-brands fa-instagram fa-xl"></i>
                                <i className="fa-brands fa-pinterest fa-xl"></i>
                                <i className="fa-brands fa-twitter fa-xl"></i>
                                <i className="fa-brands fa-youtube fa-xl"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
         </section>
    </>
  )
}

export default ContactInput
