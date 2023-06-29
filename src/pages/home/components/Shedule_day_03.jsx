function Shedule_day_03() {
  return (
    <section
      id="sponsors"
      className="section-padding"
      style={{ backgroundColor: "#f3f4f3" }}
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className="schedule-area row wow fadeInDown"
              data-wow-delay="0.3s"
            >
              <div className="schedule-tab-content col-12 clearfix">
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="monday"
                    role="tabpanel"
                    aria-labelledby="monday-tab"
                  >
                    <div id="accordion2">
                      <div className="card">
                        <div id="headingOne1">
                          <div className="schedule-slot-time">
                            <span> 9.00 - 10.50 AM</span>
                            {/* Workshop */}
                          </div>
                          <div
                            className="collapsed card-header"
                            data-toggle="collapse"
                            data-target="#collapseTwo2"
                            aria-expanded="false"
                            aria-controls="collapseTwo2"
                          >
                            {/* <div className="images-box">
                              <img
                                className="img-fluid"
                                src={speacker2}
                                alt=""
                              />
                            </div> */}
                            <h4>Conference - Common Sessions</h4>
                            {/* <h5 className="name">David Warner</h5> */}
                          </div>
                        </div>
                        <div
                          id="collapseOne1"
                          className="collapse show"
                          aria-labelledby="headingOne1"
                          data-parent="#accordion2"
                        >
                          <div className="card-body">
                            <span>Keynote Presentations</span>
                            <br />
                            <span>Panel Discussion and Q&A</span>
                            {/* <div className="location">
                              <span>Location:</span> Hall 1 , Building A, Golden
                              Street, Southafrica
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div id="accordion2">
                      <div className="card">
                        <div id="headingOne1">
                          <div className="schedule-slot-time">
                            <span> 10.50-12.30 AM</span>
                            {/* Workshop */}
                          </div>
                          <div
                            className="collapsed card-header"
                            data-toggle="collapse"
                            data-target="#collapseTwo2"
                            aria-expanded="false"
                            aria-controls="collapseTwo2"
                          >
                            {/* <div className="images-box">
                              <img
                                className="img-fluid"
                                src={speacker2}
                                alt=""
                              />
                            </div> */}
                            <h4>Investment Summit</h4>
                            {/* <h5 className="name">David Warner</h5> */}
                          </div>
                        </div>
                        <div
                          id="collapseOne1"
                          className="collapse show"
                          aria-labelledby="headingOne1"
                          data-parent="#accordion2"
                        >
                          {/* <div className="card-body">
                            <span>
                              Aistinguished invitees from State, Private Sector,
                              Industry, Academia
                            </span>
                            <br />
                            <span>
                              Address by the Chief Guest - State Minister of IT
                            </span>
                            <div className="location">
                              <span>Location:</span> Hall 1 , Building A, Golden
                              Street, Southafrica
                            </div>
                          </div> */}
                        </div>
                      </div>

                      <div className="card">
                        <div id="headingOne1">
                          <div className="schedule-slot-time">
                            <span> 12.30 - 1.30 PM</span>
                            {/* Workshop */}
                          </div>
                          <div
                            className="collapsed card-header"
                            data-toggle="collapse"
                            data-target="#collapseTwo2"
                            aria-expanded="false"
                            aria-controls="collapseTwo2"
                          >
                            {/* <div className="images-box">
                              <img
                                className="img-fluid"
                                src={speacker2}
                                alt=""
                              />
                            </div> */}
                            <h4>Lunch</h4>
                            {/* <h5 className="name">David Warner</h5> */}
                          </div>
                        </div>
                        <div
                          id="collapseOne1"
                          className="collapse show"
                          aria-labelledby="headingOne1"
                          data-parent="#accordion2"
                        >
                          {/* <div className="card-body">
                            <span>
                              Aistinguished invitees from State, Private Sector,
                              Industry, Academia
                            </span>
                            <br />
                            <span>
                              Address by the Chief Guest - State Minister of IT
                            </span>
                            <div className="location">
                              <span>Location:</span> Hall 1 , Building A, Golden
                              Street, Southafrica
                            </div>
                          </div> */}
                        </div>
                      </div>

                      <div className="card">
                        <div id="headingOne1">
                          <div className="schedule-slot-time">
                            <span> 1.30 - 5.00 AM</span>
                            {/* Workshop */}
                          </div>
                          <div
                            className="collapsed card-header"
                            data-toggle="collapse"
                            data-target="#collapseTwo2"
                            aria-expanded="false"
                            aria-controls="collapseTwo2"
                          >
                            {/* <div className="images-box">
                              <img
                                className="img-fluid"
                                src={speacker2}
                                alt=""
                              />
                            </div> */}
                            <h4>Conference - Breakout Sessions</h4>
                            {/* <h5 className="name">David Warner</h5> */}
                          </div>
                        </div>
                        <div
                          id="collapseOne1"
                          className="collapse show"
                          aria-labelledby="headingOne1"
                          data-parent="#accordion2"
                        >
                          <div className="card-body">
                            <span>Conference Tracks</span>
                            <br />
                            <span>SSL Research Colloquium</span>
                            {/* <div className="location">
                              <span>Location:</span> Hall 1 , Building A, Golden
                              Street, Southafrica
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <Shedule_day_01 /> */}
        </div>
      </div>
    </section>
  );
}

export default Shedule_day_03;
