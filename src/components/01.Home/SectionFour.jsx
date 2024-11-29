
const SectionFour = (props) => {
  
  return (
    <>
      {/* <!-- Section-4 --> */}

      <div className="card rounded-0 border pb-2 ">
        <img
          className="card-img-top border border-bottom rounded-0"
          src={props.img}
          alt="Card"
        />

        <div className="card-body pt-0 pe-0" style={{ paddingLeft: "1.8em" }}>
          <a
            href="#Top"
            className="btn btn-danger rounded-0 "
            style={{ marginTop: "-2em" }}
          >
            {props.amount}
          </a>
          <h5 className="card-title mt-3">{props.brand}</h5>
          <div
            className="rounded mt-4 mb-3"
            style={{
              backgroundColor: "#CC4452",
              height: "2.4px",
              width: "18%",
            }}
          ></div>
          <ul className="cards-lists">
            <li className="pb-2"> {props.capacity} </li>
            <li> {props.bags}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SectionFour;
