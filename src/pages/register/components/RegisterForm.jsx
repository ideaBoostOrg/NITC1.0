import React, { useState } from "react";
import logo from "../../../assets/img/logo-crop.png";
import { useLocation } from "react-router-dom";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const[memberId, setMemberId] = useState("");
  

  // const location = useLocation();
  // const searchParams = new URLSearchParams(location.search);
  // const setTypeCSSL = searchParams.get("type");

  // {setTypeCSSL ? (
  //   const[isChecked, setIsChecked] =  useState(true);
  // ):(
  //   const[isChecked, setIsChecked] =  useState(false);
  // )
  // }

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const setTypeCSSL = searchParams.get("type");
  let price;

  if (setTypeCSSL === "Inauguration") {
    price = 15000;
  } else if (setTypeCSSL === "Day_01") {
    price = 14000;
  } else if (setTypeCSSL === "Day_02") {
    price = 20000;
  } else {
    price = 35000;
  }

  const initialState = false;
  const [isChecked, setIsChecked] = useState(initialState);

  

  const toggleCheckboxChange = () => {
    setIsChecked(!isChecked);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic 
    console.log("Registration form submitted");
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("MemberId", memberId);
    // Reset form fields
    setFirstName("");
    setLastName("");
    setEmail("");
    setMemberId("");
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
            <div className="col-md-12 col-sm-12 col-lg-6 ">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    className="form-control form-control-sm "
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    style={{ height: "36px" }}
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
                    style={{ height: "36px" }}
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
                    style={{ height: "36px" }}
                  />
                </div>
                <div class="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    checked={isChecked}
                    onChange={toggleCheckboxChange}
                  />
                  <label className="form-check-label" for="exampleCheck1">
                    Are you a CSSL member?
                  </label>
                </div>

                {isChecked && (
                  <div className="form-group">
                    <label htmlFor="memberId">Member ID</label>
                    <input
                      className="form-control form-control-sm"
                      type="text"
                      id="memberId"
                      value={memberId}
                      onChange={(e) => setMemberId(e.target.value)}
                      style={{ height: "36px" }}
                    />
                  </div>
                )}
                {/* <button type="submit" className="btn btn-common">
                  Register
                </button> */}
              </form>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="row">
                <div className="col">
                  <div className="card text-center">
                    <div className="card-body">
                      {isChecked && (
                        <p
                          className="h5 font-weight-bold"
                          style={{ lineHeight: "40px" }}
                        >
                          <span className="" style={{ fontWeight: 100 }}>
                            Ticket price: Rs {price}
                          </span>
                          <br />
                          <span className="" style={{ fontWeight: 100 }}>
                            Discount :{" "}
                          </span>{" "}
                          <span style={{ color: "blue", fontSize: "30px" }}>
                            10%
                          </span>
                          <br />
                          Total price: Rs {price-((price * 10) / 100)}
                        </p>
                      )}
                      {!isChecked && (
                        <p className="h5 font-weight-bold">
                          Total price: Rs {price}
                        </p>
                      )}
                      <a href="#" className="btn btn-common mt-3">
                        Pay Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterForm;
