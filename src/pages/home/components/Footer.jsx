import logo_NITC from '../../../assets/img/logo.png'
import logo_IdeaBoost from "../../../assets/img/logo-IdeaBoost.png";

/* icon */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";

function Footer(){
    return (
      <footer>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12 col-xs-12">
              <div className="NITC-logo" style={{ padding: "20px 0 0 0" }}>
                <img
                  src={logo_NITC}
                  alt=""
                  style={{ width: 150, height: 100 }}
                />
              </div>
              <div
                className="social-icons-footer"
                style={{ padding: "20px 0 0 0" }}
              >
                <ul>
                  <li className="facebook">
                    <a target="_blank" href="3">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </li>
                  <li className="twitter">
                    <a target="_blank" href="3">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li className="pinterest">
                    <a target="_blank" href="3">
                      <FontAwesomeIcon icon={faPinterest} />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="site-info">
                <p>
                  Designed and Developed by{" "}
                  <a href="http://ideaboost.tech" rel="nofollow">
                    ideaBoost.
                  </a>
                </p>
                <img
                  src={logo_IdeaBoost}
                  alt=""
                  style={{ width: 150 }}
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;