import img1 from "../../../assets/img/about/img1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { CheckCircle } from "react-bootstrap-icons";

function About() {
  return (
    <section
      id="about"
      className="section-padding"
      style={{ paddingTop: "150px" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-xs-12">
            <div className="img-thumb">
              <img className="img-fluid" src={img1} alt="" />
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-xs-12">
            <div className="about-content">
              <div>
                <div className="about-text">
                  <h2>About The Conference</h2>
                  <p>
                    <b>NITC 2023 Conference</b> will feature 6 tracks and will
                    have 30+ local and foreign high-profile Speakers and a
                    series of prior events. This year, NITC 2023 will be held in
                    conjunction with DIGIECON 2023, which was initiated by HE
                    President Ranil Wickremesinghe and symbolizes a new chapter
                    in Sri Lanka’s quest to create an inclusive digital economy.
                  </p>
                </div>
                <ul className="stylish-list mb-3">
                  <li>
                    <span
                      style={{
                        paddingRight: "8px",
                        color: "blue",
                        size: "25px",
                      }}
                    >
                      <CheckCircle />
                    </span>
                    FinTech - Finantial Technology
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "8px",
                        color: "blue",
                        size: "25px",
                      }}
                    >
                      <CheckCircle />
                    </span>
                    EduTech - Education Technology
                  </li>

                  <li>
                    <span
                      style={{
                        paddingRight: "8px",
                        color: "blue",
                        size: "25px",
                      }}
                    >
                      <CheckCircle />
                    </span>
                    TravelTech - Travel Technology
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "8px",
                        color: "blue",
                        size: "25px",
                      }}
                    >
                      <CheckCircle />
                    </span>
                    InfoSec - Information Security
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "8px",
                        color: "blue",
                        size: "25px",
                      }}
                    >
                      <CheckCircle />
                    </span>
                    AgriTech - Agriculture Technology
                  </li>
                  <li>
                    <span
                      style={{
                        paddingRight: "8px",
                        color: "blue",
                        size: "25px",
                      }}
                    >
                      <CheckCircle />
                    </span>
                    eHealth - Electronic Health care
                  </li>
                </ul>
                {/* <a className="btn btn-common" href="#">
                  Learn More
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
