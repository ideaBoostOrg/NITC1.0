import { Link } from "react-scroll";

function Hero() {
  return (
    <div id="hero-area" className="hero-area-bg" style={{ height: "100vh" }}>
      <div className="overlay"></div>
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-sm-12">
            <div className="contents text-center">
              <div className="icon">
                <i className="lni-mic"></i>
              </div>
              <p className="banner-info">
                11th - 13th of Oct 2023, Shangri-La Hotel, Colombo, Sri-Lanka
              </p>
              <h2 className="head-title">National IT Conference</h2>
              {/* <p className="banner-desc">
                NITC 2023 - Towards a Sustainable Digital Society is a
                multi-faceted business conference which features series of
                activities namely NITC Conference, CSSL Awards, CSSL Colloquium
                and a Digital Investment Summit.
              </p> */}
              <div className="banner-btn">
                <Link
                  className="btn btn-common"
                  spy={true}
                  to="pricing"
                  offset={-80}
                  duration={300}
                  smooth={true}
                >
                  Register Now
                </Link>
                {/* <a href="#pricing" className="btn btn-common">
                    Register Now
                  </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
