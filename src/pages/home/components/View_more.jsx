import { XLg } from "react-bootstrap-icons";
import { useState } from "react";
const View_more = (props) => {
  // eslint-disable-next-line react/prop-types
  const { isOpen, onClose} = props;

  return (
    <div className="backdrop" style={{ display: isOpen ? "block" : "none" }}>
      <div className="modal" style={{ display: isOpen ? "block" : "none" }}>
        <div className="terms-heading">
          <h5>CSSL NITC Awards</h5>
          <button
            onClick={() => {
              onClose(false);
            }}
          >
            <XLg />
          </button>
        </div>
        <div className="terms-wrapper">{/* content */}</div>
        <div className="term-footer">{/* content */}</div>
      </div>
    </div>
  );
};

export default View_more;
