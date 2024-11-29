import poster from '../../assets/Home/img-7.jpg';
import video from '../../assets/Home/video.mp4';

const Section4 = () => {
    const arrow = ">";
  return (
    <>
      {/* <!-- Section-4 --> */}
        <section className="py-4 ps-4">
            <div className="container py-3 pb-4 px-3 ps-md-5">
                <div className="row">
                    <div className="col-lg-6 ps-0">
                        <p className="display-6 fs-4 px-0">How We Work</p>
                        <div className="rounded mt-4 mb-3 " style={{backgroundColor: "#CC4452",
                        height: "2.3px",
                        width: "8%", 
                        marginTop: "1.5rem"}} ></div>
                         <video controls poster={poster} className="w-100 ">
                            <source src={video} type="video/mp4" />        
                            Your browser does not support the video tag.
                        </video>
                    </div>
                    <div className="col-lg-6 ">
                        <p className="display-6 fs-4 px-0">Our Mission</p>
                        <div className="rounded mt-4 mb-2" style={{backgroundColor: "#CC4452",
                        height: "2.3px",
                        width: "8%", 
                        marginTop: "1.5rem"}} ></div>
                        <p className="pb-4">lacinia leo, vel consectetur velit dui at nisi. Vestibulum non ante metus. Aliquam auctor lacus pretium, accumsan libero in, aliquam lacus.</p>
                        <p className="border-bottom pb-3"><span className="text-danger fs-5 pe-2">{arrow}</span>Cras efficitur iaculis vulputate curabitur eros dolor</p>                            
                        <p className="border-bottom pb-3"><span className="text-danger fs-5 pe-2">{arrow}</span>Aliquam in est sed dictum facilisis urna et commodo</p>
                        <p className="border-bottom pb-3"><span className="text-danger fs-5 pe-2">{arrow}</span>Suspendisse ex arcu, consequat ac blandit</p>
                        <p className="border-bottom pb-3"><span className="text-danger fs-5 pe-2">{arrow}</span>Morbi imperdiet ornare dui maecenas ultrices eget est</p>
                        <p className="pb-3"><span className="text-danger fs-5 pe-2">{arrow}</span>Proin at nisi sit amet nulla iaculis blandit</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Section4
