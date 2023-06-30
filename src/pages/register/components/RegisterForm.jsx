/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import logo from "../../../assets/img/logo-crop.png";
import { CheckCircle } from "react-bootstrap-icons";
import { useSearchParams } from 'react-router-dom';
import { XCircleFill } from "react-bootstrap-icons";
import { CheckCircleFill } from "react-bootstrap-icons";
import { loadPaycorpPayment } from '../../../pay';

import { firestore } from "../../../firebase";
import { collection, getDocs, query, where, getDoc, doc } from "firebase/firestore";

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

  const [btnState, setBtnState] = useState("verify");
  const [errorMsg, setErrorMsg] = useState("");
  const [isNotVerified, setIsNotVerified] = useState(false);


  const [isMember, setisMember] = useState(false);
  const [acceptTerm, setAcceptTerm] = useState(true);

  const [discount, setDiscount] = useState(0);
  const [netTotal, setNetTotal] = useState(parseFloat(pack.price));

  const handleCheckbox = (e) => {
    const value = e.target.checked;
    if (value === true) {
      setisMember(true);
    } else {
      setisMember(false);
      setBtnState("verify");
      setMemberId("");
      setDiscount(0);
      setNetTotal(parseFloat(pack.price))
    }
  }

  const handleAcceptTerms = (e) => {
    const value = e.target.checked;
    if (value == true) {
      setAcceptTerm(true);
    } else {
      setAcceptTerm(false);
    }
  }


  const handleVerify = async () => {
    setBtnState("verifing");

    const q = query(collection(firestore, "members"), where("Mem_No", "==", memberId));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.docs.length > 0) {
      const member = querySnapshot.docs[0].data();

      const tq = query(collection(firestore, "tickets"), where("Mem_No", "==", memberId));
      const ticketQuerySnapshot = await getDocs(tq);

      if (ticketQuerySnapshot.docs.length > 0) {
        setErrorMsg("You have already registered for the conference");
        setBtnState("not-verified");
        return;
      }

      setBtnState("verified");
      const discount = 0.1 * parseFloat(pack.price);
      setDiscount(discount);
      setNetTotal(parseFloat(pack.price) - discount);
    } else {
      setBtnState("not-verified");
      setErrorMsg("Invalid member ID, Try again!");
      setDiscount(0);
      setNetTotal(parseFloat(pack.price));
    }

  }

  useEffect(() => {
    loadPaycorpPayment(buildPayment(), 'paycorp-payment')
  }, [netTotal])

  // console.log("netTotal : ", netTotal);

  const buildPayment = () => {
    return {
      // NOTE: this is the QuickWeb DEMO client ID.
      // You may use it for initial setup
      // but replace with the Client ID
      // provided by Paycorp for final testing.
      clientId: 14002582,
      paymentAmount: netTotal,
      currency: 'LKR',
      returnUrl: `https://${window.location.hostname}/payment-success`,
      clientRef: 'CREF-12345',
      comment: 'This is a demo payment'
    };
  }


  const Checking = () => {
    const [dots, setDots] = useState("..");

    useEffect(() => {
      const interval = setInterval(() => {
        setDots((prev) => (prev === "..." ? "" : prev + "."));
      }, 500);
      return () => {
        clearInterval(interval);
      };
    }, [])

    return (
      <div className=" checking">
        <div className="loading-spinner-container">
          <div className="spinner"></div>
        </div>
      </div>
    )
  }

  const Verified = () => {
    return (
      <div className="verified">
        <CheckCircleFill />
      </div>
    )
  }

  const NotVerified = () => {
    return (
      <div className="not-verified">
        <XCircleFill />
      </div>
    )
  }

  const showBtn = () => {
    if (btnState === "verify") {
      return (
        <button
          className="verify-btn"
          onClick={(e) => {
            if (memberId === "") {
              setErrorMsg("Please enter your member ID");
              setBtnState("not-verified");
            } else {
              e.preventDefault();
              handleVerify();
            }
          }}
        >
          Verify
        </button>
      )
    } else if (btnState === "verifing") {
      return (
        <Checking />
      )
    } else if (btnState === "verified") {
      return (
        <Verified />
      )
    }
    else if (btnState === "not-verified") {
      return (
        // <button
        //   className="verify-btn"
        //   onClick={handleVerify}
        // >
        //   Verify
        // </button>
        <NotVerified />
      )
    }
  }

  const inputBorderColor = () => {
    if (btnState === "verify") {
      return "gray";
    } else if (btnState === "verifing") {
      return "gray";
    } else if (btnState === "verified") {
      return "#15b046";
    }
    else if (btnState === "not-verified") {
      return "#db1e1e";
    }
  }

  return (
    <>
      <section>
        <nav className="navbar navbar-expand-lg bg-inverse scrolling-navbar top-nav-collapse">
          <div className="container">
            <a href="/" className="navbar-brand">
              <img src={logo} alt="" />
            </a>
            {/* <button className="btn btn-primary" onClick={addMembers}>add</button> */}
          </div>
        </nav>
      </section>

      <section id="register-form" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 pdr-50">
              <div className="" style={{ lineHeight: "35px" }}>
                {/* <span className="" style={{ color: "gray" }}>
                  {pack.key}
                </span>
                <br /> */}
                <span
                  className=""
                  style={{ fontSize: "25px", fontWeight: "bold" }}
                >
                  {pack.name}
                </span>
                <br />
                {/* <span className="" style={{ fontSize: "20px", color: "gray" }}>
                  {pack.currency} {pack.price}
                </span>
                <br /> */}
              </div>

              <div className="cssl-member-box">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    onChange={handleCheckbox}
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    I&apos;m a CSSL member.
                  </label>
                </div>
                <span className="" style={{ color: "gray" }}>
                  If you are a CSSL member, you will receive a 10% discount.
                </span>
                <br></br>
                {isMember && (
                  <>
                    <br></br>
                    <div className="memberid">
                      <label htmlFor="memberId">CSSL Member ID</label>
                      <div className="" style={{ display: "flex" }}>
                        <input
                          autoFocus={isMember}
                          className="form-control form-control-sm memberId-input"
                          type="text"
                          id="memberId"
                          value={memberId}
                          onChange={(e) => {
                            setMemberId(e.target.value)
                            setBtnState("verify")
                            setDiscount(0);
                            setNetTotal(parseFloat(pack.price))
                          }
                          }

                          onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                              if (memberId === "") {
                                setErrorMsg("Please enter your member ID");
                                setBtnState("not-verified");
                              } else {
                                handleVerify()
                                e.preventDefault();
                                e.target.blur();
                              }
                            }
                          }}

                          style={{ borderColor: inputBorderColor() }}
                        // onFocus={() => {
                        //   setBtnState("verify")
                        //   setDiscount(0);
                        //   setNetTotal(parseFloat(pack.price));
                        // }}
                        />

                        {showBtn()}

                      </div>
                    </div>
                    {btnState === 'not-verified' && <p style={{ color: '#db1e1e', marginTop: "5px" }}>{errorMsg}</p>}
                  </>
                )}
              </div>

              <div className="content">
                <div className="content-row">
                  <span className="label">
                    {/* {pack.key} package */}
                    Amount
                  </span>
                  <span className="value">
                    {pack.price} <span className="lkr">{pack.currency}</span>
                  </span>
                </div>

                {btnState === 'verified' &&
                  <div className="content-row">
                    <span className="label">Discount</span>
                    <span className="value">
                      10%
                    </span>
                  </div>}

                <hr />
                <div className="content-row net-total">
                  <span className="label">
                    Net Total
                  </span>
                  <span className="value">
                    {netTotal.toFixed(2)} <span className="lkr">{pack.currency}</span>
                  </span>
                </div>
              </div>
            </div>
            <hr />
            <div className="col-md-12 col-sm-12 col-lg-6 pdt-50">
              <h5 style={{ fontSize: "22px", marginBottom: "20px" }}>
                Billing details
              </h5>
              <form>
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input required
                    className="form-control form-control-sm f-input"
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName">Last Name</label>
                  <input required
                    className="form-control form-control-sm f-input"
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input required
                    className="form-control form-control-sm f-input"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div id="paycorp-payment"></div>

                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    onChange={handleAcceptTerms}
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                  // htmlFor="flexCheckDefault"
                  >
                    Accept all terms & conditions.
                  </label>
                </div>
                <br />

                <div className="form-group">
                  <button
                    className="form-control form-control-sm submit-btn"
                  // onClick={handlePay}
                  >
                    Pay Now
                  </button>
                  <p
                    style={{
                      color: "gray",
                      fontSize: "12px",
                      fontWeight: "600px",
                      textAlign: "center",
                    }}
                  >
                    After completing the transaction, we will promptly send you
                    an email containing the reference number and invoice, along
                    with the payment confirmation.
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
