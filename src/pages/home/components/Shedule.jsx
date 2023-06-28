import Shedule_day_01 from "./Shedule_day_01";
import Shedule_day_02 from "./Shedule_day_02";
import Shedule_day_03 from "./Shedule_day_03";

import React, { useState } from "react";

function Shedule() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section
      id="schedules"
      className="schedule section-padding"
      style={{ paddingTop: "150px" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h2 className="section-title wow fadeInUp" data-wow-delay="0.2s">
                Event Schedules
              </h2>
              <p className="wow fadeInDown" data-wow-delay="0.2s">
                Discover the cutting-edge event schedules at the NITC IT
                Conference, bringing together tech enthusiasts <br /> to explore
                the latest industry trends.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 mb-5 text-center">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className={toggleState === 1 ? "nav-link active" : "nav-link"}
                  id="monday-tab"
                  data-toggle="tab"
                  // href="#monday"
                  role="tab"
                  aria-controls="monday"
                  aria-expanded="true"
                  onClick={() => toggleTab(1)}
                >
                  <div className="item-text">
                    <h4>Inaguration Ceremony</h4>
                    <h5>11th October 2023</h5>
                    <h5 style={{ color: "white" }}>
                      6.00 PM onwards
                    </h5>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={toggleState === 2 ? "nav-link active" : "nav-link"}
                  id="tuesday-tab"
                  data-toggle="tab"
                  // href="#tuesday"
                  role="tab"
                  aria-controls="tuesday"
                  onClick={() => toggleTab(2)}
                >
                  <div className="item-text">
                    <h4>Day 01</h4>
                    <h5>12th October 2023</h5>
                    <h5>
                      9.00 AM - 5.00 PM
                    </h5>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={toggleState === 3 ? "nav-link active" : "nav-link"}
                  id="wednesday-tab"
                  data-toggle="tab"
                  // href="#wednesday"
                  role="tab"
                  aria-controls="wednesday"
                  onClick={() => toggleTab(3)}
                >
                  <div className="item-text">
                    <h4>Day 02</h4>
                    <h5>13th October 2023</h5>
                    <h5>
                      9.00 AM - 5.00 PM
                    </h5>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          {/*<div className="col-12">
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
                    <div id="accordion">
                      <div className="card">
                        <div id="headingOne">
                          <div className="schedule-slot-time">
                            <span> 9.30 - 10.30 AM</span>
                            Workshop
                          </div>
                          <div
                            className="collapsed card-header"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                          >
                            <div className="images-box">
                              <img
                                className="img-fluid"
                                src={speacker1}
                                alt=""
                              />
                            </div>
                            <h4>Web Design Principles and Best Practices</h4>
                            <h5 className="name">David Warner</h5>
                          </div>
                        </div>
                        <div
                          id="collapseOne"
                          className="collapse show"
                          aria-labelledby="headingOne"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Amet minima dolores rerum
                              maiores qui at commodi quas, reprehenderit eius
                              consectetur quae magni molestias veniam, provident
                              illum facere iure libero asperiores! Lorem ipsum
                              dolor sit amet, consectetur adipisicing elit.
                              Veniam earum nihil ex ipsa magni eligendi fugiat
                              assumenda suscipit, accusantium, necessitatibus
                              reiciendis odit sed, vero amet blanditiis?
                            </p>
                            <div className="location">
                              <span>Location:</span> Hall 1 , Building A, Golden
                              Street, Southafrica
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div id="headingTwo">
                          <div className="schedule-slot-time">
                            <span> 10.30 - 11.30 AM</span>
                            Workshop
                          </div>
                          <div
                            className="collapsed card-header"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            <div className="images-box">
                              <img
                                className="img-fluid"
                                src={speacker2}
                                alt=""
                              />
                            </div>
                            <h4>15 Free Productive Design Tools</h4>
                            <h5 className="name">David Warner</h5>
                          </div>
                        </div>
                        <div
                          id="collapseTwo"
                          className="collapse"
                          aria-labelledby="headingTwo"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Amet minima dolores rerum
                              maiores qui at commodi quas, reprehenderit eius
                              consectetur quae magni molestias veniam, provident
                              illum facere iure libero asperiores! Lorem ipsum
                              dolor sit amet, consectetur adipisicing elit.
                              Veniam earum nihil ex ipsa magni eligendi fugiat
                              assumenda suscipit, accusantium, necessitatibus
                              reiciendis odit sed, vero amet blanditiis?
                            </p>
                            <div className="location">
                              <span>Location:</span> Hall 1 , Building A, Golden
                              Street, Southafrica
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div id="headingThree">
                          <div className="schedule-slot-time">
                            <span> 11.30 - 12.30 AM</span>
                            Workshop
                          </div>
                          <div
                            className="collapsed card-header"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            <div className="images-box">
                              <img
                                className="img-fluid"
                                src={speacker3}
                                alt=""
                              />
                            </div>
                            <h4>Getting Started With SketchApp</h4>
                            <h5 className="name">David Warner</h5>
                          </div>
                        </div>
                        <div
                          id="collapseThree"
                          className="collapse"
                          aria-labelledby="headingThree"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Amet minima dolores rerum
                              maiores qui at commodi quas, reprehenderit eius
                              consectetur quae magni molestias veniam, provident
                              illum facere iure libero asperiores! Lorem ipsum
                              dolor sit amet, consectetur adipisicing elit.
                              Veniam earum nihil ex ipsa magni eligendi fugiat
                              assumenda suscipit, accusantium, necessitatibus
                              reiciendis odit sed, vero amet blanditiis?
                            </p>
                            <div className="location">
                              <span>Location:</span> Hall 1 , Building A, Golden
                              Street, Southafrica
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="tuesday"
                    role="tabpanel"
                    aria-labelledby="tuesday-tab"
                  >
                    <div id="accordion2">
                      <div className="card">
                        <div id="headingOne1">
                          <div className="schedule-slot-time">
                            <span> 1.30 - 2.30 AM</span>
                            Workshop
                          </div>
                          <div
                            className="collapsed card-header"
                            data-toggle="collapse"
                            data-target="#collapseTwo2"
                            aria-expanded="false"
                            aria-controls="collapseTwo2"
                          >
                            <div className="images-box">
                              <img
                                className="img-fluid"
                                src={speacker2}
                                alt=""
                              />
                            </div>
                            <h4>Web Design Principles and Best Practices</h4>
                            <h5 className="name">David Warner</h5>
                          </div>
                        </div>
                        <div
                          id="collapseOne1"
                          className="collapse show"
                          aria-labelledby="headingOne1"
                          data-parent="#accordion2"
                        >
                          <div className="card-body">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Amet minima dolores rerum
                              maiores qui at commodi quas, reprehenderit eius
                              consectetur quae magni molestias veniam, provident
                              illum facere iure libero asperiores! Lorem ipsum
                              dolor sit amet, consectetur adipisicing elit.
                              Veniam earum nihil ex ipsa magni eligendi fugiat
                              assumenda suscipit, accusantium, necessitatibus
                              reiciendis odit sed, vero amet blanditiis?
                            </p>
                            <div className="location">
                              <span>Location:</span> Hall 1 , Building A, Golden
                              Street, Southafrica
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div id="headingTwo2">
                          <div className="schedule-slot-time">
                            <span> 9.30 - 10.30 AM</span>
                            Workshop
                          </div>
                          <div
                            className="collapsed card-header"
                            data-toggle="collapse"
                            data-target="#collapseOne1"
                            aria-expanded="false"
                            aria-controls="collapseOne1"
                          >
                            <div className="images-box">
                              <img
                                className="img-fluid"
                                src={speacker1}
                                alt=""
                              />
                            </div>
                            <h4>Web Design Principles and Best Practices</h4>
                            <h5 className="name">David Warner</h5>
                          </div>
                        </div>
                        <div
                          id="collapseTwo2"
                          className="collapse"
                          aria-labelledby="headingTwo2"
                          data-parent="#accordion2"
                        >
                          <div className="card-body">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Amet minima dolores rerum
                              maiores qui at commodi quas, reprehenderit eius
                              consectetur quae magni molestias veniam, provident
                              illum facere iure libero asperiores! Lorem ipsum
                              dolor sit amet, consectetur adipisicing elit.
                              Veniam earum nihil ex ipsa magni eligendi fugiat
                              assumenda suscipit, accusantium, necessitatibus
                              reiciendis odit sed, vero amet blanditiis?
                            </p>
                            <div className="location">
                              <span>Location:</span> Hall 1 , Building A, Golden
                              Street, Southafrica
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="wednesday"
                    role="tabpanel"
                    aria-labelledby="wednesday-tab"
                  >
                    <div id="accordion3">
                      <div className="card">
                        <div id="headingOne3">
                          <div className="schedule-slot-time">
                            <span> 10.30 - 11.30 AM</span>
                            Workshop
                          </div>
                          <div
                            className="collapsed card-header"
                            data-toggle="collapse"
                            data-target="#collapseOne3"
                            aria-expanded="false"
                            aria-controls="collapseOne3"
                          >
                            <div className="images-box">
                              <img
                                className="img-fluid"
                                src={speacker1}
                                alt=""
                              />
                            </div>
                            <h4>Web Design Principles and Best Practices</h4>
                            <h5 className="name">David Warner</h5>
                          </div>
                        </div>
                        <div
                          id="collapseOne3"
                          className="collapse show"
                          aria-labelledby="headingOne3"
                          data-parent="#accordion3"
                        >
                          <div className="card-body">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Amet minima dolores rerum
                              maiores qui at commodi quas, reprehenderit eius
                              consectetur quae magni molestias veniam, provident
                              illum facere iure libero asperiores! Lorem ipsum
                              dolor sit amet, consectetur adipisicing elit.
                              Veniam earum nihil ex ipsa magni eligendi fugiat
                              assumenda suscipit, accusantium, necessitatibus
                              reiciendis odit sed, vero amet blanditiis?
                            </p>
                            <div className="location">
                              <span>Location:</span> Hall 1 , Building A, Golden
                              Street, Southafrica
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div id="headingTwo3">
                          <div className="schedule-slot-time">
                            <span> 11.30 - 12.30 AM</span>
                            Workshop
                          </div>
                          <div
                            className="collapsed card-header"
                            data-toggle="collapse"
                            data-target="#collapseTwo3"
                            aria-expanded="false"
                            aria-controls="collapseTwo3"
                          >
                            <div className="images-box">
                              <img
                                className="img-fluid"
                                src={speacker2}
                                alt=""
                              />
                            </div>
                            <h4>Web Design Principles and Best Practices</h4>
                            <h5 className="name">David Warner</h5>
                          </div>
                        </div>
                        <div
                          id="collapseTwo3"
                          className="collapse"
                          aria-labelledby="headingTwo3"
                          data-parent="#accordion3"
                        >
                          <div className="card-body">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Amet minima dolores rerum
                              maiores qui at commodi quas, reprehenderit eius
                              consectetur quae magni molestias veniam, provident
                              illum facere iure libero asperiores! Lorem ipsum
                              dolor sit amet, consectetur adipisicing elit.
                              Veniam earum nihil ex ipsa magni eligendi fugiat
                              assumenda suscipit, accusantium, necessitatibus
                              reiciendis odit sed, vero amet blanditiis?
                            </p>
                            <div className="location">
                              <span>Location:</span> Hall 1 , Building A, Golden
                              Street, Southafrica
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div id="headingThree3">
                          <div className="schedule-slot-time">
                            <span> 1.30 - 2.30 AM</span>
                            Workshop
                          </div>
                          <div
                            className="collapsed card-header"
                            data-toggle="collapse"
                            data-target="#collapseThree3"
                            aria-expanded="false"
                            aria-controls="collapseThree3"
                          >
                            <div className="images-box">
                              <img
                                className="img-fluid"
                                src={speacker3}
                                alt=""
                              />
                            </div>
                            <h4>Web Design Principles and Best Practices</h4>
                            <h5 className="name">David Warner</h5>
                          </div>
                        </div>
                        <div
                          id="collapseThree3"
                          className="collapse"
                          aria-labelledby="headingThree3"
                          data-parent="#accordion3"
                        >
                          <div className="card-body">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Amet minima dolores rerum
                              maiores qui at commodi quas, reprehenderit eius
                              consectetur quae magni molestias veniam, provident
                              illum facere iure libero asperiores! Lorem ipsum
                              dolor sit amet, consectetur adipisicing elit.
                              Veniam earum nihil ex ipsa magni eligendi fugiat
                              assumenda suscipit, accusantium, necessitatibus
                              reiciendis odit sed, vero amet blanditiis?
                            </p>
                            <div className="location">
                              <span>Location:</span> Hall 1 , Building A, Golden
                              Street, Southafrica
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="thursday"
                    role="tabpanel"
                    aria-labelledby="thursday-tab"
                  >
                    <div id="accordion4">
                      <div className="card">
                        <div id="headingOne">
                          <div className="schedule-slot-time">
                            <span> 9.30 - 10.30 AM</span>
                            Workshop
                          </div>
                          <div
                            className="collapsed card-header"
                            data-toggle="collapse"
                            data-target="#collapseOne4"
                            aria-expanded="false"
                            aria-controls="collapseOne4"
                          >
                            <div className="images-box">
                              <img
                                className="img-fluid"
                                src={speacker2}
                                alt=""
                              />
                            </div>
                            <h4>Web Design Principles and Best Practices</h4>
                            <h5 className="name">David Warner</h5>
                          </div>
                        </div>
                        <div
                          id="collapseOne4"
                          className="collapse show"
                          aria-labelledby="headingOne"
                          data-parent="#accordion4"
                        >
                          <div className="card-body">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Amet minima dolores rerum
                              maiores qui at commodi quas, reprehenderit eius
                              consectetur quae magni molestias veniam, provident
                              illum facere iure libero asperiores! Lorem ipsum
                              dolor sit amet, consectetur adipisicing elit.
                              Veniam earum nihil ex ipsa magni eligendi fugiat
                              assumenda suscipit, accusantium, necessitatibus
                              reiciendis odit sed, vero amet blanditiis?
                            </p>
                            <div className="location">
                              <span>Location:</span> Hall 1 , Building A, Golden
                              Street, Southafrica
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div id="headingTwo">
                          <div className="schedule-slot-time">
                            <span> 10.30 - 11.30 AM</span>
                            Workshop
                          </div>
                          <div
                            className="collapsed card-header"
                            data-toggle="collapse"
                            data-target="#collapseTwo4"
                            aria-expanded="false"
                            aria-controls="collapseTwo4"
                          >
                            <div className="images-box">
                              <img
                                className="img-fluid"
                                src={speacker1}
                                alt=""
                              />
                            </div>
                            <h4>Web Design Principles and Best Practices</h4>
                            <h5 className="name">David Warner</h5>
                          </div>
                        </div>
                        <div
                          id="collapseTwo4"
                          className="collapse"
                          aria-labelledby="headingTwo"
                          data-parent="#accordion4"
                        >
                          <div className="card-body">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Amet minima dolores rerum
                              maiores qui at commodi quas, reprehenderit eius
                              consectetur quae magni molestias veniam, provident
                              illum facere iure libero asperiores! Lorem ipsum
                              dolor sit amet, consectetur adipisicing elit.
                              Veniam earum nihil ex ipsa magni eligendi fugiat
                              assumenda suscipit, accusantium, necessitatibus
                              reiciendis odit sed, vero amet blanditiis?
                            </p>
                            <div className="location">
                              <span>Location:</span> Hall 1 , Building A, Golden
                              Street, Southafrica
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div id="headingThree4">
                          <div className="schedule-slot-time">
                            <span> 11.30 - 12.30 AM</span>
                            Workshop
                          </div>
                          <div
                            className="collapsed card-header"
                            data-toggle="collapse"
                            data-target="#collapseThree4"
                            aria-expanded="false"
                            aria-controls="collapseThree4"
                          >
                            <div className="images-box">
                              <img
                                className="img-fluid"
                                src={speacker3}
                                alt=""
                              />
                            </div>
                            <h4>Web Design Principles and Best Practices</h4>
                            <h5 className="name">David Warner</h5>
                          </div>
                        </div>
                        <div
                          id="collapseThree4"
                          className="collapse"
                          aria-labelledby="headingThree"
                          data-parent="#accordion4"
                        >
                          <div className="card-body">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Amet minima dolores rerum
                              maiores qui at commodi quas, reprehenderit eius
                              consectetur quae magni molestias veniam, provident
                              illum facere iure libero asperiores! Lorem ipsum
                              dolor sit amet, consectetur adipisicing elit.
                              Veniam earum nihil ex ipsa magni eligendi fugiat
                              assumenda suscipit, accusantium, necessitatibus
                              reiciendis odit sed, vero amet blanditiis?
                            </p>
                            <div className="location">
                              <span>Location:</span> Hall 1 , Building A, Golden
                              Street, Southafrica
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="friday"
                    role="tabpanel"
                    aria-labelledby="friday-tab"
                  >
                    <div id="accordion">
                      <div className="card">
                        <div id="headingOne">
                          <div className="schedule-slot-time">
                            <span> 9.30 - 10.30 AM</span>
                            Workshop
                          </div>
                          <div
                            className="collapsed card-header"
                            data-toggle="collapse"
                            data-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            <div className="images-box">
                              <img
                                className="img-fluid"
                                src={speacker2}
                                alt=""
                              />
                            </div>
                            <h4>Web Design Principles and Best Practices</h4>
                            <h5 className="name">David Warner</h5>
                          </div>
                        </div>
                        <div
                          id="collapseOne"
                          className="collapse show"
                          aria-labelledby="headingOne"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Amet minima dolores rerum
                              maiores qui at commodi quas, reprehenderit eius
                              consectetur quae magni molestias veniam, provident
                              illum facere iure libero asperiores! Lorem ipsum
                              dolor sit amet, consectetur adipisicing elit.
                              Veniam earum nihil ex ipsa magni eligendi fugiat
                              assumenda suscipit, accusantium, necessitatibus
                              reiciendis odit sed, vero amet blanditiis?
                            </p>
                            <div className="location">
                              <span>Location:</span> Hall 1 , Building A, Golden
                              Street, Southafrica
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div id="headingTwo">
                          <div className="schedule-slot-time">
                            <span> 10.30 - 11.30 AM</span>
                            Workshop
                          </div>
                          <div
                            className="collapsed card-header"
                            data-toggle="collapse"
                            data-target="#collapseOne"
                            aria-expanded="false"
                            aria-controls="collapseOne"
                          >
                            <div className="images-box">
                              <img
                                className="img-fluid"
                                src={speacker1}
                                alt=""
                              />
                            </div>
                            <h4>Web Design Principles and Best Practices</h4>
                            <h5 className="name">David Warner</h5>
                          </div>
                        </div>
                        <div
                          id="collapseTwo"
                          className="collapse"
                          aria-labelledby="headingTwo"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Amet minima dolores rerum
                              maiores qui at commodi quas, reprehenderit eius
                              consectetur quae magni molestias veniam, provident
                              illum facere iure libero asperiores! Lorem ipsum
                              dolor sit amet, consectetur adipisicing elit.
                              Veniam earum nihil ex ipsa magni eligendi fugiat
                              assumenda suscipit, accusantium, necessitatibus
                              reiciendis odit sed, vero amet blanditiis?
                            </p>
                            <div className="location">
                              <span>Location:</span> Hall 1 , Building A, Golden
                              Street, Southafrica
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div id="headingThree">
                          <div className="schedule-slot-time">
                            <span> 11.30 - 12.30 AM</span>
                            Workshop
                          </div>
                          <div
                            className="collapsed card-header"
                            data-toggle="collapse"
                            data-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            <div className="images-box">
                              <img
                                className="img-fluid"
                                src={speacker3}
                                alt=""
                              />
                            </div>
                            <h4>Web Design Principles and Best Practices</h4>
                            <h5 className="name">David Warner</h5>
                          </div>
                        </div>
                        <div
                          id="collapseThree"
                          className="collapse"
                          aria-labelledby="headingThree"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Amet minima dolores rerum
                              maiores qui at commodi quas, reprehenderit eius
                              consectetur quae magni molestias veniam, provident
                              illum facere iure libero asperiores! Lorem ipsum
                              dolor sit amet, consectetur adipisicing elit.
                              Veniam earum nihil ex ipsa magni eligendi fugiat
                              assumenda suscipit, accusantium, necessitatibus
                              reiciendis odit sed, vero amet blanditiis?
                            </p>
                            <div className="location">
                              <span>Location:</span> Hall 1 , Building A, Golden
                              Street, Southafrica
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>

        {toggleState === 1 && <Shedule_day_01 />}
        {toggleState === 2 && <Shedule_day_02 />}
        {toggleState === 3 && <Shedule_day_03 />}
      </div>
    </section>
  );
}

export default Shedule;
