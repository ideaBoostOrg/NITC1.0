/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import TermsModal from "./TermsModal";
import { loadPaycorpPayment } from '../../../pay';



const RegisterForm = () => {

  const packages = [
    {
      key: "Full_package",
      name: "Full Conference With Inauguration",
      price: "50000.00",
      currency: "LKR",
      features: ["Keynote Speech", "Keynote Presentations", "CSSL National ICT Awards", "Panel Discussion and Q&A", "Investment Summit", "Lunch", "Conference Tracks", "CSSL Research Colloquium", "Gala Dinner"]
    },
    {
      key: "Inauguration",
      name: "Inauguration Ceremony",
      price: "20000.00",
      currency: "LKR",
      features: ["Keynote Speech", "CSSL National ICT Awards", "Gala Dinner"],
    },
    {
      key: "Day_01",
      name: "NITC Conference Day 01",
      price: "15000.00",
      currency: "LKR",
      features: ["Keynote Presentations", "Panel Discussion and Q&A", "Lunch", "Conference Tracks"]
    },
    {
      key: "Day_02",
      name: "NITC Conference Day 02",
      price: "15000.00",
      currency: "LKR",
      features: ["Keynote Presentations", "Investment Summit", "Lunch", "Conference Tracks", "CSSL Research Colloquium"]
    },
  ];


  const events = {
    Full_package: false,
    Inauguration: false,
    Day_01: false,
    Day_02: false,
  }

  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');
  const pack = packages[0];


  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [acceptTerm, setAcceptTerm] = useState(false);
  const [amount, setAmount] = useState(parseFloat(pack.price));
  const [discount, setDiscount] = useState(0);
  const [netTotal, setNetTotal] = useState(0);

  const [eligbleForEarlyBird, setEligbleForEarlyBird] = useState(true);
  const [selectedEvents, setSelectedEvents] = useState(events)
  const [isFullPackage, setIsFullPackage] = useState(false);

  useEffect(() => {
    setSelectedEvents({
      ...events,
      [type]: true
    })
  }, [])


  const handleAcceptTerms = (e) => {
    const value = e.target.checked;
    if (value == true) {
      setAcceptTerm(true);
    } else {
      setAcceptTerm(false);
    }
  }

  const handleInputCheck = (e) => {
    if (e.target.name === "Full_package") {
      setIsFullPackage(e.target.checked);
      setSelectedEvents({
        ...events,
        Full_package: true
      })
    } else {
      setIsFullPackage(false);
      setSelectedEvents({
        ...selectedEvents,
        Full_package: false,
        [e.target.name]: e.target.checked
      })
    }
  }

  useEffect(() => {
    let total = 0
    for (const key in selectedEvents) {
      if (selectedEvents[key] === true) {
        total += parseFloat(packages.find(p => p.key === key).price)
      }
    }
    console.log(total)
    setAmount(total)
  }, [packages, selectedEvents])





  // console.log("netTotal : ", netTotal);

  // const buildPayment = () => {
  //   return {
  //     // NOTE: this is the QuickWeb DEMO client ID.
  //     // You may use it for initial setup
  //     // but replace with the Client ID
  //     // provided by Paycorp for final testing.
  //     clientId: 14002485,
  //     paymentAmount: 1000,
  //     currency: 'LKR',
  //     returnUrl: `https://${window.location.hostname}/payment-confirm`,
  //     // returnUrl: `http://127.0.0.1:5173/payment-confirm`,
  //     clientRef: 'CREFT2-12345',
  //     comment: 'This is a demo payment 2'
  //   };
  // }

  // const handlePay = () => {
  //   if (firstName && lastName && email) {
  //     setInputError(false);
  //     loadPaycorpPayment(buildPayment())
  //   } else {
  //     setInputError(true);
  //   }

  // }



  return (
    <>
      <TermsModal isOpen={termsModalOpen} onClose={setTermsModalOpen} setAcceptTerm={setAcceptTerm} />
      <section id="register-form" className="section-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-6 pdt-50 pdr-50">
              <div className="package-container">
                {
                  packages.map((pack, index) => {
                    return (
                      <div key={index} className="package-box">
                        <input id={pack.key} type="checkbox" name={pack.key} value={pack.key} onChange={handleInputCheck} checked={selectedEvents[pack.key]}></input>
                        <label htmlFor={pack.key}
                          className="package"
                        >
                          <div className="package-heading">
                            <h4 >{pack.name}</h4>
                            <div className="package-price">
                              <p><span className="lkr">{pack.currency}</span>  {pack.price}</p>
                            </div>
                          </div>
                          <div className="package-features">
                            {pack.features.map((feature, index) => {
                              return (
                                <span key={index}>{feature}</span>
                              )
                            })}
                          </div>
                        </label>
                      </div>
                    )
                  })
                }
              </div>
            </div>
            <div className="col-lg-6 col-md-12">

              <div className="content">
                <div className="content-row">
                  <span className="label">
                    Amount
                  </span>
                  <span className="value">
                    <span className="lkr">{pack.currency}</span> {amount.toFixed(2)}
                  </span>
                </div>

                {/* {btnState === 'verified' &&
                  <div className="content-row">
                    <span className="label">Discount (20%)</span>
                    <span className="value">
                      - {discount.toFixed(2)} <span className="lkr">{pack.currency}</span>
                    </span>
                  </div>} */}

                <hr />
                <div className="content-row net-total">
                  <span className="label">
                    Net Amount
                  </span>
                  <span className="value">
                    <span className="lkr">{pack.currency}</span> {netTotal.toFixed(2)}
                  </span>
                </div>
              </div>
              <div className="form-check flexCheckDefault flex-row-col" style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",

              }}>
                <div className="">
                  <input
                    className="form-check-input terms-check-box"
                    type="checkbox"
                    onChange={handleAcceptTerms}
                    value=""
                    id="flexCheckDefault"
                    checked={acceptTerm}
                    onClick={(e) => {
                      e.preventDefault()
                      setTermsModalOpen(true)
                    }}
                  />
                  <label
                    className="form-check-label"
                    onClick={() => setTermsModalOpen(true)}
                  >
                    Accept all terms & conditions.
                  </label>
                </div>
              </div>
              <div className="form-group">
                <button
                  className="form-control form-control-sm submit-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    // setModalOpen(true)
                    // handlePay()
                  }}

                  disabled={!acceptTerm}

                >
                  Pay Now
                </button>
                <p
                  style={{
                    color: "gray",
                    fontSize: "12px",
                    fontWeight: "600px",
                    textAlign: "center",
                    marginTop: "10px",
                    lineHeight: "1.5",
                  }}
                >
                  After completing the transaction, we will promptly send you
                  an email containing the reference number and invoice, along
                  with the payment confirmation.
                </p>
              </div>
            </div>
          </div>
        </div >
      </section >
    </>
  );
};

export default RegisterForm;

