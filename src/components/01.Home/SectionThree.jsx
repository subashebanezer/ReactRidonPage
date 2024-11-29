import React from 'react'
import ComButton from '../Commen/ComButton'

const SectionThree = () => {
        const stylePad = {
          padding: "1rem 2rem",
        };
  return (
    <>
      {/* <!-- section-3 --> */}
        <section>
           <div className="container-fluid text-white bg-dark" >
               <div className="row ">
                   <div className="col-lg-2 d-flex flex-column px-0">
                       <ul className="navbar-nav " >
                           <li className="nav-item bg-danger" style={{padding:"10px 0"}}><a className="nav-link text-center text-white h4 m-0" href="#Top">Distance</a></li>
                           <li className="nav-item " style={{padding: "10px 0"}}><a className="nav-link text-center text-white h4 m-0" href="#Top">Hourly</a></li>
                           <li className="nav-item " style={{padding: "10px 0"}}><a className="nav-link text-center text-white h4 m-0" href="#Top">Flat Rate</a></li>
                       </ul>
                   </div>
                   <div className="col-lg-10 d-flex ps-4  " style={{borderLeft: "1px solid #3A3A3A"}}>
                       <div className="row align-items-center px-3">
                           <div className="col-lg-3 col-xl-2 col-md-12">
                               <label htmlFor="address1" className="mb-2">Pick Up Address</label>
                               <input type="text" className="form-control form-control-lg rounded-0" id="address1" placeholder="Enter a location" />
                           </div>
                           <div className="col-lg-3 col-xl-2 col-md-12">
                               <label htmlFor="address" className="mb-2">Drop of Address</label>
                               <input type="text" className="form-control form-control-lg rounded-0" id="address" placeholder="Enter a location" autoComplete='address' />
                           </div>
                           <div className="col-lg-3 col-xl-2 col-md-12">
                               <label htmlFor="Return" className="mb-2">Return</label>
                               <select className="form-select form-select-lg rounded-0" id="Return"  defaultValue={"One Way"} >
                                   <option value="One Way">One Way</option>
                                   <option value="Other">Other</option>
                               </select>
                           </div>
                           <div className="col-lg-3 col-xl-2 col-md-12">
                               <label htmlFor="date" className="mb-2">Pick Up Date</label>
                               <input type="date" className="form-control form-control-lg rounded-0" id="date" />
                           </div>
                           <div className="col-lg-3 col-xl-2 col-md-12 pe-0">
                               <label htmlFor="time" className="mb-2 d-flex flex-column w-75">Pick Up Time</label>
                               <div className="d-inline-flex" >
                                   <select className="form-select form-select-lg rounded-0"  defaultValue={"01"} id="time">
                                       <option value="01">01</option><option value="02">02</option><option value="03">03</option><option value="04">04</option><option value="05">05</option><option value="06">06</option><option value="07">07</option><option value="08">08</option><option value="09">09</option><option value="10">10</option><option value="11">11</option><option>12</option>
                                   </select>
                                   <select className=" form-select form-select-lg rounded-0 " defaultValue={"00"} id='count'>
                                       <option value="00">00</option><option value="15">15</option><option value="30">30</option><option value="45">45</option>
                                   </select>
                               </div>
                           </div>
                           <div className="col-lg-3 col-xl-2 col-md-12 mt-sm-3 mb-2 ">
                               <ComButton padding={stylePad} content="Reserve Now >"/>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        </section>
    </>
  )
}

export default SectionThree
