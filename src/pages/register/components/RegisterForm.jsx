/* eslint-disable no-unused-vars */
import { useState } from "react";
import logo from "../../../assets/img/logo-crop.png";
import { CheckCircle } from "react-bootstrap-icons";
import { useSearchParams } from 'react-router-dom';

import { loadPaycorpPayment } from '../../../pay';

const RegisterForm = () => {

  const packages = {
    Inauguration: {
      key: "Inauguration",
      name: "Inauguration Ceremony",
      price: "20000.00",
      currency: "LKR",
      features: ["Keynote Speech", "CSSL National ICT Awards", "Gala Dinner"],
    },
    Day_01: {
      key: "Day 01",
      name: "NITC Conference Day 01",
      price: "15000.00",
      currency: "LKR",
      features: ["Keynote Presentations", "Panel Discussion and Q&A", "Lunch", "Conference Tracks"]
    },
    Day_02: {
      key: "Day 02",
      name: "NITC Conference Day 02",
      price: "15000.00",
      currency: "LKR",
      features: ["Keynote Presentations", "Investment Summit", "Lunch", "Conference Tracks", "CSSL Research Colloquium"]
    },
    Full_package: {
      key: "Full Package",
      name: "Full Conference With Inauguration",
      price: "35000.00",
      currency: "LKR",
      features: ["Keynote Speech", "Keynote Presentations", "CSSL National ICT Awards", "Panel Discussion and Q&A", "Investment Summit", "Lunch", "Conference Tracks", "CSSL Research Colloquium", "Gala Dinner"]
    }
  };

  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');
  const pack = packages[type];

  const [memberId, setMemberId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [checking, setChecking] = useState(false);

  const [isMember, setisMember] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Reset form fields
  //   // setcardInfo("");
  //   // setnameOnCard("");
  //   // setEmail("");
  //   // setcountryOnRegion("");
  // };

  const handleCheckbox = (e) => {
    const value = e.target.checked;
    if (value === true) {
      setisMember(true);
    } else {
      setisMember(false);
    }
  }

  const buildPayment = () => {
    return {
      // NOTE: this is the QuickWeb DEMO client ID.
      // You may use it for initial setup
      // but replace with the Client ID
      // provided by Paycorp for final testing.
      clientId: 14002582,
      paymentAmount: 1010,
      currency: 'LKR',
      returnUrl: `${window.location.hostname}/payment-success`,
      clientRef: 'CREF-12345',
      comment: 'This is a demo payment'
    };
  }

  const handlePay = (e) => {
    e.preventDefault();
    loadPaycorpPayment(buildPayment())
  }

  return (
    <>
      <section>
        <nav className="navbar navbar-expand-lg bg-inverse scrolling-navbar top-nav-collapse">
          <div className="container">
            <a href="/" className="navbar-brand">
              <img src={logo} alt="" />
            </a>
          </div>
        </nav>
      </section>

      <section id="register-form" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 pdr-50">
              <div className="" style={{ lineHeight: "35px" }}>
                <span className="" style={{ color: "gray" }}>
                  {pack.key}
                </span>
                <br />
                <span
                  className=""
                  style={{ fontSize: "25px", fontWeight: "bold" }}
                >
                  {pack.name}
                </span>
                <br />
                <span className="" style={{ fontSize: "20px", color: "gray" }}>
                  {pack.currency} {pack.price}
                </span>
                <br />
              </div>

              <div className="cssl-member-box">

                <div className="form-check">
                  <input className="form-check-input" type="checkbox" onChange={handleCheckbox} value="" id="flexCheckDefault" />
                  <label className="form-check-label" htmlFor="flexCheckDefault">
                    I&apos;m a CSSL member.
                  </label>
                </div>
                <span className="" style={{ color: "gray" }}>
                  If you are a CSSL member, you will receive 15% off.
                </span>
                <br></br>
                {isMember &&
                  <>
                    <br></br>
                    <div className="memberid">
                      <label htmlFor="memberId">CSSL Member ID</label>
                      <input
                        autoFocus={isMember}
                        className="form-control form-control-sm"
                        type="text"
                        id="memberId"
                        value={memberId}
                        onChange={(e) => setMemberId(e.target.value)}
                        style={{
                          height: "36px",
                          borderRadius: "10px",
                          border: "1px solid #f2eeee",
                          flex: "1",
                          marginRight: "10px",
                        }}
                      />
                    </div>
                  </>
                }
              </div>

              <div className="content">
                <div className="content-row">
                  <span className="label">
                    {pack.key} package
                  </span>
                  <span className="value">
                    {pack.currency} {pack.price}
                  </span>
                </div>

                <div className="content-row">
                  <span className="label">Discount</span>
                  <span className="value">
                    15%
                  </span>
                </div>

                <hr />
                <div className="content-row">
                  <span className="label">Subtotal</span>
                  <span className="value">
                    {pack.currency} {pack.price}
                  </span>
                </div>
              </div>
            </div>
            <hr />
            <div
              className="col-md-12 col-sm-12 col-lg-6 pdt-50"
            >
              <h5 style={{ fontSize: "22px", marginBottom: "20px" }}>Billing details</h5>
              <form>
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    className="form-control form-control-sm"
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    style={{
                      height: "36px",
                      borderRadius: "10px",
                      border: "1px solid #f2eeee",
                    }}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    className="form-control form-control-sm"
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    style={{
                      height: "36px",
                      borderRadius: "10px",
                      border: "1px solid #f2eeee",
                    }}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    className="form-control form-control-sm"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{
                      height: "36px",
                      borderRadius: "10px",
                      border: "1px solid #f2eeee",
                    }}
                  />
                </div>

                <div className="form-group">
                  <button
                    className="form-control form-control-sm submit-btn"
                    onClick={handlePay}
                  >
                    {checking ? "checking..." : "Pay Now"}
                  </button>
                  <p
                    style={{
                      color: "gray",
                      fontSize: "12px",
                      fontWeight: "600px",
                      textAlign: "center",
                    }}
                  >
                    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
