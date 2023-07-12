import { XLg } from "react-bootstrap-icons";
import { useState } from "react";
import CSSL_Awards_Flyer from "../../../assets/img/CSSL_Awards_Flyer.jpg";


const View_more = (props) => {
  // eslint-disable-next-line react/prop-types
  const { isOpen, onClose} = props;

  return (
    <div
      className="backdrop"
      style={{
        display: isOpen ? "block" : "none",
        backgroundColor: "transparent",
      }}
    >
      <div
        className="modal"
        style={{
          display: isOpen ? "block" : "none",
          height: "500px",
        }}
      >
        <div className="terms-heading">
          <h5></h5>
          {/* <h5></h5> */}
          <button
            onClick={() => {
              onClose(false);
            }}
          >
            <XLg />
          </button>
        </div>

        <div className="terms-wrapper" style={{ border: "none" }}>
          <img className="img-fluid" src={CSSL_Awards_Flyer} alt="" />
        </div>
      </div>

      {/* <div className="term-footer"></div> */}
    </div>
  );
};

export default View_more;
