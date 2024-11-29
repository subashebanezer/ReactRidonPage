import React from 'react'
import Breadcrumb from '../Commen/Breadcrumb'

const ContactTop = () => {
  return (
    <>
      {/* /* <!-- Section-1 --> */ }
      <section>
            <div className="container-fluid back-1 text-dark d-flex flex-column align-items-center justify-content-center flex-wrap" style={{marginTop: "2.3rem"}} >
                <p className="fs-2 mb-1 mt-lg-4" >About Us</p>
                <div className="rounded mb-3 " style={{backgroundColor: "#CC4452",
                height: "2.4px",
                width: "4.5%" }}></div> 
                <Breadcrumb title = "Contact Us" />
            </div>
        </section>
    </>
  )
}

export default ContactTop
