import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
          {/* <!-- Navbar --> */}
    <div className="container px-0 fixed-top ">
        <nav className="navbar navbar-expand-md bg-dark navbar-dark text-white  py-3 px-4 gap-3 mx-lg-5 mx-md-5" >
            
            <NavLink  className="navbar-brand text-danger fs-5" to="/">RideON</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-Bar-All" aria-controls="nav-Bar-All" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon "></span></button>
            
            <div className="collapse navbar-collapse" id="nav-Bar-All" >
                <ul className="navbar-nav me-auto gap-3" >
                    <li className="nav-item"><NavLink className="nav-link text-white h4" to ="/" >Home</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-white h4" to ="/About" >About Us</NavLink></li>
                    <li className="nav-item"><NavLink className="nav-link text-white h4" to ="/Contact" >Contact Us</NavLink></li>
                </ul>
                <div className="search"> 
                    <i className="fas fa-search h4 search" ></i>
                </div>
            </div>
            
        </nav>
    </div>
    </>
  )
}

export default NavBar
