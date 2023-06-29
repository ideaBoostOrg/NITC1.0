import React, { useState } from "react";
import logo from "../../../assets/img/logo-crop.png";
import { useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CheckCircle } from "react-bootstrap-icons";

const RegisterForm = () => {
  const [cardInfo, setcardInfo] = useState("");
  const [nameOnCard, setnameOnCard] = useState("");
  const [email, setEmail] = useState("");
  const[countryOnRegion, setcountryOnRegion] = useState("");
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Reset form fields
    setcardInfo("");
    setnameOnCard("");
    setEmail("");
    setcountryOnRegion("");
  };

  return (
    <>
      <section>
        <nav className="navbar navbar-expand-lg bg-inverse scrolling-navbar top-nav-collapse">
          <div className="container">
            <a href="/" className="navbar-brand">
              <script data-pagespeed-no-defer="">
                (function(){/* ... */})();
              </script>
              <img src={logo} alt="" />
            </a>
          </div>
        </nav>
      </section>

      <section id="register-form" className="section-padding">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 col-md-12"
              style={{
                paddingLeft: "130px",
                paddingRight: "70px",
              }}
            >
              <div className="row">
                <div className="col">
                  <div className="" style={{ lineHeight: "35px" }}>
                    <span className="" style={{ color: "gray" }}>
                      Try Kipper Unlimited(save $60)
                    </span>
                    <br />
                    <span
                      className=""
                      style={{ fontSize: "30px", fontWeight: "bold" }}
                    >
                      2 days free
                    </span>
                    <br />
                    <span className="" style={{ color: "gray" }}>
                      Then US$59.99 per year
                    </span>
                    <br />
                  </div>

                  <div
                    className=""
                    style={{ paddingTop: "70px", lineHeight: "30px" }}
                  >
                    <div className="price-section">
                      <div className="row">
                        <div className="col">
                          <span className="label">
                            Kipper Unlimited(Save $60)
                          </span>
                        </div>
                        <div className="col">
                          <span
                            className="value"
                            style={{ paddingLeft: "70px" }}
                          >
                            2 days free
                          </span>
                          <br />
                          <span
                            className="value"
                            style={{ color: "gray", paddingLeft: "30px",  fontSize:"13px" }}
                          >
                            US$59.99/year after
                          </span>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <span className="label">Subtotal</span>
                        </div>
                        <div className="col">
                          <span
                            className="value"
                            style={{ paddingLeft: "70px" }}
                          >
                            US$59.99
                          </span>
                        </div>
                      </div>
                      <hr />
                      <div className="row" style={{ color: "gray" }}>
                        <div className="col">
                          <span className="label">Tax</span>
                        </div>
                        <div className="col">
                          <span
                            className="value"
                            style={{ paddingLeft: "70px" }}
                          >
                            US$0.00
                          </span>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col">
                          <span className="label">Total after trail</span>
                        </div>
                        <div className="col">
                          <span
                            className="value"
                            style={{ paddingLeft: "70px" }}
                          >
                            US$59.99
                          </span>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col">
                          <span className="label">Total due today</span>
                        </div>
                        <div className="col">
                          <span
                            className="value"
                            style={{ paddingLeft: "70px" }}
                          >
                            US$0.00
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-md-12 col-sm-12 col-lg-6 "
              style={{
                paddingLeft: "70px",
                paddingRight: "130px",
              }}
            >
              <h5 style={{ fontSize: "18px" }}>Enter payment details</h5>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="cardInfo">Email</label>
                  <input
                    className="form-control form-control-sm"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      height: "36px",
                      borderRadius: "10px",
                      border: "none",
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="nameOnCard">Card information</label>
                  <input
                    className="form-control form-control-sm"
                    type="text"
                    id="nameOnCard"
                    value={nameOnCard}
                    onChange={(e) => setnameOnCard(e.target.value)}
                    style={{
                      height: "36px",
                      borderRadius: "10px",
                      border: "none",
                    }}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Name on card</label>
                  <input
                    className="form-control form-control-sm"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      height: "36px",
                      borderRadius: "10px",
                      border: "none",
                    }}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Coutry on region</label>
                  <input
                    className="form-control form-control-sm"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      height: "36px",
                      borderRadius: "10px",
                      border: "none",
                    }}
                  />
                </div>

                <div className="form-group">
                  <input
                    className="form-control form-control-sm"
                    type="submit"
                    style={{
                      height: "36px",
                      backgroundColor: "var(--teal)",
                      borderRadius: "10px",
                      border: "none",
                      color: "white",
                    }}
                    value={<CheckCircle />}
                  />
                  <p
                    style={{
                      color: "gray",
                      fontSize: "12px",
                      fontWeight: "600px",
                      textAlign: "center",
                    }}
                  >
                    After your trail end, you will be chanrged US$59.99 per year
                    starting 1 July, 2023. You can cansel before then.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterForm;
