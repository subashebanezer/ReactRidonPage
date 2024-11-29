import ComButton from "../../components/Commen/ComButton";

const SectionTop = () => {
    const stylePad = {
      padding: "1rem 2rem",
    };
    
  return (
    <>
       {/* <!-- Section-1 --> */}
       <div className="text-white ">
          <div
            className="container-fluid banner d-flex flex-column align-items-center justify-content-center"
            style={{ marginTop: "2.3rem" }}
          >
            <h5 className="display-2 pe-md-4 pb-md-2 ">Reliable Drivers</h5>
            <div className="divider"></div>
            <p
              className="text-center font-family-Reg"
              style={{ fontSize: "1.05rem", paddingTop: "1.9rem" }}
            >
              Expect only the best from our wide array of professionally <br />{" "}
              trained drivers they will get you there on time!
            </p>
            <ComButton padding={stylePad} content="About Us" />
          </div>
        </div>
    </>
  )
}

export default SectionTop
