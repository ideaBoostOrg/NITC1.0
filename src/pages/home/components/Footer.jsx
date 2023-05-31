import logo from '../../../assets/img/logo.png'

function Footer(){
    return (
      <footer>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-12 col-xs-12">
              <div className="social-icons-footer">
                <ul>
                  <li className="facebook">
                    <a target="_blank" href="3">
                      <i className="lni-facebook-filled"></i>
                    </a>
                  </li>
                  <li className="twitter">
                    <a target="_blank" href="3">
                      <i className="lni-twitter-filled"></i>
                    </a>
                  </li>
                  <li className="pinterest">
                    <a target="_blank" href="3">
                      <i className="lni-pinterest"></i>
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
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
}

export default Footer;