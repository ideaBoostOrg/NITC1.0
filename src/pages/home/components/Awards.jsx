/* icon */
import { Award } from "react-bootstrap-icons";


function Awards() {
  return (
    <section
      id="award"
      className=""
      style={{ paddingBottom: "50px", paddingTop: "50px" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center mb-4">
              <h2 className="section-title wow fadeInUp" data-wow-delay="0.2s">
                NITC Awards 2022
              </h2>
              <p className="wow fadeInDown" data-wow-delay="0.2s">
                At the NITC Awards 2022, come celebrate the outstanding
                achievements of the industry's shining stars.
              </p>
            </div>
          </div>
        </div>
        <div className="row intro-wrapper">
          <div className="col-lg-6 col-md-12 col-xs-12">
            <div className="single-intro-text">
              <i className="lni-microphone"></i>
              <h3>CSSL Elite Awards</h3>
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
          <div className="col-lg-6 col-md-12 col-xs-12">
            <div className="single-intro-text">
              <i className="lni-users"></i>
              <h3>ICT Startup and Eco System Awards</h3>
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
          <div className="col-lg-6 col-md-12 col-xs-12">
            <div className="single-intro-text mb-70">
              <i className="lni-bullhorn"></i>
              <h3>ICT Management Awards</h3>
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
          <div className="col-lg-6 col-md-12 col-xs-12">
            <div className="single-intro-text mb-70">
              <i className="lni-heart"></i>
              <h3>ICT Student Awards</h3>
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
      </div>
    </section>
  );
}

export default Awards;
