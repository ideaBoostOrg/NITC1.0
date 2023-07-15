import { useState, useEffect } from "react";
import Awards from "../../../assets/img/Awards-2.svg";
import CSSL_Awards_Flyer from "../../../assets/img/CSSL_Awards_Flyer.jpg";


function CSSL_awards() {

  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };


  return (
    <section id="cssl-awards" style={{ paddingTop: "10px" }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-xs-12">
            <div className="img-thumb">
              <img className="img-fluid" src={Awards} alt="" />
            </div>
          </div>

          {isOpen && (
            <div className="popup-container">
              <div className="popup-content">
                <img
                  src={CSSL_Awards_Flyer}
                  alt="Popup Image"
                  className="popup-image"
                />
                <button className="close-button" onClick={closePopup}>
                  X
                </button>
              </div>
            </div>
          )}

          <div className="col-lg-6 col-md-12 col-xs-12">
            <div className="section-title-header mt-4 text-left">
              <h2 className="section-title wow fadeInUp" data-wow-delay="0.2s">
                CSSL NITC Awards
              </h2>
              <p className="wow fadeInDown" data-wow-delay="0.2s">
                Join us as we commemorate the extraordinary accomplishments of
                <br />
                the industry's brightest stars at the NITC Awards 2022.
              </p>
            </div>

            <p style={{ marginTop: "20px", marginBottom: "20px" }}>
              <b>CSSL Awards </b>recognizes significant national contributions
              by ICT Professionals and CSSL Elite awards will be held at the
              inauguration ceremony of the NITC Conference.
            </p>

            <div className="award_section_button">
              <span
                className="btn btn-common"
                id="view_more_btn"
                onClick={openPopup}
              >
                View more
              </span>

              <a href="" className="btn btn-common">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CSSL_awards;
