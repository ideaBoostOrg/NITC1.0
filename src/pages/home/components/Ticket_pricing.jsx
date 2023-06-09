function Ticket_pricing (){
    return (
      <section id="pricing" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-header text-center">
                <h2
                  className="section-title wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  Ticket Pricing
                </h2>
                <p className="wow fadeInDown" data-wow-delay="0.2s">
                  Lorem ipsum dolor sit amet, in quodsi vulputate pro. Ius illum
                  vocent mediocritatem an <br /> cule dicta iriure at phaedrum.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-xa-12 mb-3">
              <div
                className="price-block-wrapper wow fadeInLeft"
                data-wow-delay="0.2s"
              >
                <div className="colmun-title">
                  <h5>Outsiders</h5>
                </div>
                <div className="price">
                  <h2>Rs.1500.00</h2>
                  <span>Per Day</span>
                </div>
                <div className="pricing-list">
                  <ul>
                    <li>
                      <i className="lni-check-mark-circle"></i>
                      <span className="text">Entrance</span>
                    </li>
                    <li>
                      <i className="lni-check-mark-circle"></i>
                      <span className="text">Coffee Break</span>
                    </li>
                    <li>
                      <i className="lni-check-mark-circle"></i>
                      <span className="text">Lunch on all days</span>
                    </li>
                    <li>
                      <i className="lni-close"></i>
                      <span className="text">Access to all areas</span>
                    </li>
                    <li>
                      <i className="lni-close"></i>
                      <span className="text">Certificate</span>
                    </li>
                  </ul>
                </div>
                <a href="/register" className="btn btn-common">
                  Buy Ticket
                </a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-xa-12 mb-3">
              <div
                className="price-block-wrapper active wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="colmun-title">
                  <h5>CSSL members</h5>
                </div>
                <div className="price">
                  <h2>Rs.1350.00</h2>
                  <span>Per Day</span>
                </div>
                <div className="pricing-list">
                  <ul>
                    <li>
                      <i className="lni-check-mark-circle"></i>
                      <span className="text">Entrance</span>
                    </li>
                    <li>
                      <i className="lni-check-mark-circle"></i>
                      <span className="text">Coffee Break</span>
                    </li>
                    <li>
                      <i className="lni-check-mark-circle"></i>
                      <span className="text">Lunch on all days</span>
                    </li>
                    <li>
                      <i className="lni-close"></i>
                      <span className="text">Access to all areas</span>
                    </li>
                    <li>
                      <i className="lni-check-mark-circle"></i>
                      <span className="text">Certificate</span>
                    </li>
                  </ul>
                </div>
                <a href="/register?type=CSSL" className="btn btn-common">
                  Buy Ticket
                </a>
              </div>
            </div>
            {/* <div className="col-lg-4 col-md-6 col-xa-12 mb-3">
                <div className="price-block-wrapper wow fadeInRight" data-wow-delay="0.4s">
                <div className="colmun-title">
                    <h5>Premium Pass</h5>
                </div>
                <div className="price">
                    <h2>$68</h2>
                    <span>Per Day</span>
                </div>
                <div className="pricing-list">
                    <ul>
                    <li><i className="lni-check-mark-circle"></i><span className="text">Entrance</span></li>
                    <li><i className="lni-check-mark-circle"></i><span className="text">Coffee Break</span></li>
                    <li><i className="lni-close"></i><span className="text">Lunch on all days</span></li>
                    <li><i className="lni-check-mark-circle"></i><span className="text">Access to all areas</span></li>
                    <li><i className="lni-check-mark-circle"></i><span className="text">Certificate</span></li>
                    </ul>
                </div>
                <a href="#" className="btn btn-common">Buy Ticket</a>
                </div>
            </div> */}
          </div>
        </div>
      </section>
    );
}

export default Ticket_pricing;