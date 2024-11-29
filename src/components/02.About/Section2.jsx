import img22 from "../../assets/other/img-2.jpg"
import img23 from "../../assets/other/img-3.jpg"
import img10 from "../../assets/other/img-5.jpg"
import img24 from "../../assets/Home/img-10.jpg"

const Section2 = () => {
  return (
    <>
      {/* <!-- Section-2 --> */}
         <section>
            <div className="container px-5">
                <div className="row my-5"style={{fontSize: "1.02rem"}}  >
                    <div className="col-xl-6 ">
                        <p className=" fs-3">Our Company</p>
                        <div className="rounded my-4" style={{backgroundColor: "#CC4452",
                        height: "2.4px",
                        width: "6%"}} ></div>
                        <p className="pb-3" >Mauris placerat placerat ligula at scelerisque. Sed accumsan purus non turpis commodo fermentum. Curabitur efficitur faucibus blandit. Sed id sem ullamcorper, interdum metus 
                            hendrerit, mollis risus. Phasellus at ligula gravida, auctor ipsum non, posuere diam. Nam ac rutrum orci. Donec sed lorem tempor, dictum leo id, vulputate ante. Sed non maximus lacus, vel iaculis enim. Phasellus id diam quis odio egestas molestie sed placerat purus. Vivamus vel maximus diam.</p>
                        <p>Etiam ornare mollis ex. Nam eget quam lectus. Morbi consequat risus tortor, viverra vestibulum sapien venenatis vitae. Aenean sagittis mauris eget imperdiet maximus. Nunc pulvinar urna justo, eu pretium diam accumsan varius. Donec quis tellus tincidunt, semper nisi vitae, facilisis turpis. Nullam blandit feugiat convallis. Fusce neque ex, mattis vitae lacus nec, posuere vehicula orci. Morbi ut</p>
                    </div>
                    <div className="col-xl-6 ps-lg-4">
                        <div className="row ">
                            <div className="col-md-6 px-0 pe-md-2 p-2">
                                <img src={img22} alt="..." className="w-100 h-100" />
                            </div>
                            <div className="col-md-6 px-0 pe-lg-1 p-2">
                                <img src={img23} alt="..." className="w-100 h-100" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 px-0 pe-md-2 p-2">
                                <img src={img10} alt="..." className="w-100 h-100" />
                            </div>
                            <div className="col-md-6 px-0 ps-lg-1 p-2">
                                <img src={img24} alt="..." className="w-100 h-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </section>
    </>
  )
}

export default Section2
