import React from "react";

const SectionEight = (props) => {
  return (
    <>
      <div className="card rounded-0 pb-2">
        <img
          className="card-img-top border border-bottom rounded-0"
          src={props.img}
          alt="Card img"
        />

        <div className="card-body py-0 px-0" style={{ paddingLeft: "1.8em" }}>
          <p
            className=" card-title py-3 ps-4 pe-5"
            style={{ fontSize: "1.2rem" }}
          >
            {props.title}
          </p>
          <div className="border-bottom border-top py-3 mb-4">
            <p className="d-flex mb-0 ps-4" style={{ fontSize: "0.95rem" }}>
              <i
                className="pe-2  fa-regular fa-calendar "
                style={{ fontSize: "1.1rem", color: "#CC4452" }}
              ></i>
              {props.date}
              <i
                className="pe-2 ps-3 align-self-center fa-solid fa-comments"
                style={{ fontSize: "1.1rem", color: "#CC4452" }}
              ></i>
              {props.comments}
            </p>
          </div>
          <p
            className="ps-4"
            style={{
              fontSize: "1.1rem",
              maxHeight: "80px",
              overflow: "hidden"
            }}
          >
            {props.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default SectionEight;
