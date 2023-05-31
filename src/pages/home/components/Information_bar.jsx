function Information_bar (){
    return (
        <section id="information-bar">
      <div className="container">
        <div className="row inforation-wrapper">
          <div className="col-lg-3 col-md-6 col-xs-12">
            <ul>
              <li>
                <i className="lni-map-marker"></i>
              </li>
              <li><span><b>Location</b>Shangri-La Hotel, Colombo 02</span></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-xs-12">
            <ul>
              <li>
                <i className="lni-calendar"></i>
              </li>
              <li><span><b>Date</b>11th October - 13th October</span></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-xs-12">
            <ul>
              <li>
                <i className="lni-mic"></i>
              </li>
              <li><span><b>Speakers</b>25 Professionals</span></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-xs-12">
            <ul>
              <li>
                <i className="lni-user"></i>
              </li>
              <li><span><b>Seats</b>600 People</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    )
}

export default Information_bar;