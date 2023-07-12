import { XLg } from "react-bootstrap-icons";
import { useState } from "react";
import { Award } from "react-bootstrap-icons";



const View_more = (props) => {
  // eslint-disable-next-line react/prop-types
  const { isOpen, onClose} = props;

  return (
    <div className="backdrop" style={{ display: isOpen ? "block" : "none" }}>
      <div
        className="modal"
        style={{ display: isOpen ? "block" : "none", height: "500px" }}
      >
        <div className="terms-heading">
          <h5>CSSL NITC Awards</h5>
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
          {/* <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center mb-1">
              <h4 className="section-title wow fadeInUp" data-wow-delay="0.2s">
                NITC Awards 2022
              </h4>
            </div>
          </div>
          </div> */}

          <div className="row intro-wrapper">
            <div className="col-lg-12 col-md-12 col-xs-12">
              <div className="single-intro-text">
                <h5 className="pb-2">CSSL Elite Awards</h5>
                <ul style={{ fontSize: "14px" }}>
                  <li>
                    <span
                      style={{
                        paddingRight: "8px",
                        color: "blue",
                        size: "25px",
                      }}
                    >
                      <Award />
                    </span>
                    CSSL ICT Leader of the year - Male
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "8px",
                        color: "blue",
                        size: "25px",
                      }}
                    >
                      <Award />
                    </span>
                    CSSL ICT Leader of the year - Female
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "8px",
                        color: "blue",
                        size: "25px",
                      }}
                    >
                      <Award />
                    </span>
                    CSSL ICT Researcher of the year
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "8px",
                        color: "blue",
                        size: "35px",
                      }}
                    >
                      <Award />
                    </span>
                    CSSL ICT Educator of the year
                  </li>
                </ul>
                <span className="count-number">01</span>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-xs-12">
              <div className="single-intro-text">
                <i className="lni-users"></i>
                <h5 className="pb-2">ICT Startup and Eco System Awards</h5>
                <ul style={{ fontSize: "14px" }}>
                  <li>
                    <span
                      style={{
                        paddingRight: "8px",
                        color: "blue",
                        size: "35px",
                      }}
                    >
                      <Award />
                    </span>
                    CSSL Emerging ICT Leader of the Year
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "8px",
                        color: "blue",
                        size: "35px",
                      }}
                    >
                      <Award />
                    </span>
                    CSSL Best Founder Award
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "8px",
                        color: "blue",
                        size: "35px",
                      }}
                    >
                      <Award />
                    </span>
                    CSSL Digital Investor of the Year
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "8px",
                        color: "blue",
                        size: "35px",
                      }}
                    >
                      <Award />
                    </span>
                    CSSL Social Innovator of the Year
                  </li>
                </ul>
                <span className="count-number">02</span>
              </div>
              <div className="border-shap left"></div>
            </div>
            <div className="col-lg-12 col-md-12 col-xs-12">
              <div className="single-intro-text mb-70">
                <i className="lni-bullhorn"></i>
                <h5 className="pb-2">ICT Management Awards</h5>
                <ul style={{ fontSize: "14px" }}>
                  <li>
                    <span
                      style={{
                        paddingRight: "8px",
                        color: "blue",
                        size: "35px",
                      }}
                    >
                      <Award />
                    </span>
                    CSSL Chief Information Officer of the Year
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "8px",
                        color: "blue",
                        size: "35px",
                      }}
                    >
                      <Award />
                    </span>
                    CSSL Chief Information Security Officer of the Year
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "8px",
                        color: "blue",
                        size: "35px",
                      }}
                    >
                      <Award />
                    </span>
                    CSSL Chief Digital Information Officer (Gov.) of the Year
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "8px",
                        color: "blue",
                        size: "35px",
                      }}
                    >
                      <Award />
                    </span>
                    CSSL IT Manager of the Year
                  </li>
                </ul>
                <span className="count-number">03</span>
              </div>
            </div>
            <div className="col-lg-12 col-md-12 col-xs-12">
              <div className="single-intro-text mb-70">
                <i className="lni-heart"></i>
                <h5 className="pb-2">ICT Student Awards</h5>
                <ul style={{ fontSize: "14px" }}>
                  <li>
                    <span
                      style={{
                        paddingRight: "8px",
                        color: "blue",
                        size: "35px",
                      }}
                    >
                      <Award />
                    </span>
                    CSSL ICT Student Awards - Postgraduate Category
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "8px",
                        color: "blue",
                        size: "35px",
                      }}
                    >
                      <Award />
                    </span>
                    CSSL ICT Student Awards - Undergraduate Category
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "8px",
                        color: "blue",
                        size: "35px",
                      }}
                    >
                      <Award />
                    </span>
                    CSSL ICT Student Awards - School Category
                  </li>
                </ul>
                <span className="count-number">04</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-12 col-xs-12">
              <p>
                Nomination Deadline:{" "}
                <p className="nominationDeadline">
                  30 <sup>th</sup> July 2023{" "}
                </p>
              </p>
            </div>

            <div className="col-lg-6 col-md-12 col-xs-12">
              <p>Awards Ceremony will be held:</p>
              <span className="heldDate">
                <p>
                  11<sup>th</sup> Octomber 2023.
                </p>
                <p>Shangri-La Hotel - Colombo</p>
              </span>
            </div>
          </div>

          <div className="row pt-4">
            <div className="col-lg-4 col-md-12 col-xs-12">
              <p>T: +94 11 2592762 </p>
            </div>

            <div className="col-lg-4 col-md-12 col-xs-12">
              <p>E: ict-awards@cssl.lk</p>
            </div>
            <div className="col-lg-4 col-md-12 col-xs-12">
              <p>W: www.nitc.lk</p>
            </div>

          </div>
        </div>
      </div>

      {/* <div className="term-footer"></div> */}
    </div>
  );
};

export default View_more;
