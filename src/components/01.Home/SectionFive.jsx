import img from '../../assets/Home/img-6.jpg'

const SectionFive = () => {
  return (
    <>
      {/* <!-- section-5 --> */}
        <section className="section-5 py-2">
           <div className="container d-flex flex-column align-items-center justify-content-center pt-5  ">
               <p className="fs-3 mb-3">Testimonials</p>
               <div className="rounded mb-5 " style={{backgroundColor: "#CC4452",
               height: "2.4px",
               width: "5%"}} ></div>
               <div className="row">
                   <div className="col-1 col-lg-2 d-flex justify-content-end pe-md-4 ms-3 ms-md-0  " style={{marginTop: "-1.3rem"}}>
                       <i className="fa-solid fa-quote-left display-4 text-danger"></i>
                   </div>
                   <div className="col-lg-8 col-9 mb-0">
                       <p className="text-center fs-5 mb-md-4">Fast and professional are the best words to best describe the Chauffeur team, they got me to my business meeting on time, looking forward to next time!</p>
                   </div>
                   <div className="col-lg-2 col-1 d-flex align-items-end align-items-md-center justify-content-start">
                       <i className="fa-solid fa-quote-right display-4 text-danger "></i>
                   </div>
               </div>
               
               <img src={img} alt="...." className="rounded-circle mb-4" />
               <p className="mb-5 text-center">Tony & Gary Biffer-Ford Party Bus</p>
           </div>
        </section>
    </>
  )
}

export default SectionFive
