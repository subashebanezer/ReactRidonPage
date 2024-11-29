import ComButton from "./ComButton"

const stylePad = {
    padding: "0.8rem 2rem",
  };


const Footer = () => {
  return (
    <>
      <footer className="bg-dark p-2">
        <div className="container-fluid text-white p-3 p-md-0">
            <div className="row py-md-5 mx-md-5 px-md-5 ">
                <div className="col-lg-6 pe-md-5">
                    <p className=" display-5 fs-6">ABOUT US</p>
                    <div className="rounded" style={{backgroundColor: "#CC4452",
                        height: "2.4px",
                        width: "9%",
                        marginBottom: "1.7rem" }}>
                    </div>
                    <p className="mb-md-4">Pellentesque feugiat feugiat ipsum, nec sollicitudin tortor convallis et. In venenatis, turpis eu condimentum ultrices, dui erat elementum ante, vitae finibus nisi libero a justo. Mauris ex ante, imperdiet et elementum id, mollis.</p>
                    <p>Quis felis. Praesent aliquet porttitor sem, at pretium erat tristique at. Proin molestie eros et ipsum pretium efficitur. Curabitur ligula sem, auctor at malesuada non, lobortis ornare dolor. Ut vitae ante non lectus fermentum</p>
                </div>
                <div className="col-lg-3 pe-lg-5">
                    <p className="display-5 fs-6">NEWSLETTER</p>
                    <div className="rounded " style={{backgroundColor: "#CC4452",
                        height: "2.4px",
                        width: "23%",
                        marginBottom: "1.5rem" }} >
                    </div>
                    <p className="mb-4">Subscribe to our newsletter for news, updates, exclusive discounts and offers</p>
                    <form  className="mb-3">
                        <input type="text" className="form-control form-control-lg border-0  rounded-0 mb-1" name="text" />
                        <ComButton padding={stylePad} content="Subscribe" />
                    </form>
                </div>
                <div className="col-lg-3 pe-lg-5">
                    <p className="display-5 fs-6">CONTACT DETAILS</p>
                    <div className="rounded " style={{backgroundColor: "#CC4452",
                        height: "2.4px",
                        width: "26%",
                        marginBottom: "1.2rem" }} >
                    </div>
                    <div className="d-flex">
                    <i className="fa-solid fa-location-dot fs-4 me-3 py-3"></i><a href="#Top" className="nav-link pb-3" style={{fontSize: "1.1rem"}}>700 5th Avenue, New York City, United States</a> 
                    </div>
                    <div className="d-flex">
                        <i className="fa-solid fa-phone fs-4 me-3 py-3"></i> <a href="#Top" className="nav-link py-2" style={{fontSize: "1.1rem"}}>1800-1111-2222 <p style={{fontSize: "0.8rem"}}> Mon-Fri, 9.00am until 6.30pm</p></a>
                    </div>
                    <div className="d-flex">
                        <i className="fa-solid fa-envelope fs-4 me-3 py-3"></i><a href="#Top" className="nav-link py-1" style={{fontSize: "1.1rem"}}>booking@example.com <p style={{fontSize: "0.8rem"}}>We reply within 24 hrs</p></a>
                    </div>
                </div>
            </div>
            <hr />
            <div className="row">
                <div className="col my-4">
                    <p className="text-center text-white fs-6">© 2024 Brassyacademy. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
