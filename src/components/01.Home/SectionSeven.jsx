import ComButton from '../Commen/ComButton'

const stylePad = {
    padding: "1rem 2rem",
  };

const SectionSeven = () => {
  return (
    <>
       {/* <!-- Section-7 --> */}
        <section className="section-5 py-5">
            <div className="container d-flex flex-column align-items-center justify-content-center pt-5">
                <p className="display-6 fs-1 mb-3 text-center">Book Online Today And Travel In Comfort <br /> On Your Next Trip</p>
                <div className="rounded mb-4 " style={{backgroundColor: "#CC4452",
                height: "2.4px",
                width: "5%"}} ></div>
                <p className="text-center fs-6 mb-md-4">Call Us On 1800-1111-2222 or Email booking@website.com</p>
                <ComButton padding={stylePad} content="Online Booking >" />                   
            </div>
        </section>
    </>
  )
}

export default SectionSeven
