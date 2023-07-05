import logo from "../../../assets/img/logo-crop.png";
import { CheckCircleFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const PaymentConfirmed = () => {
    return (
        <>
            <section>
                <nav className="navbar navbar-expand-lg bg-inverse scrolling-navbar top-nav-collapse">
                    <div className="container">
                        <div className="navbar-brand">
                            <img src={logo} alt="" />
                        </div>
                    </div>
                </nav>
            </section>

            <section id="" className="section-padding">
                <div className="confirm-container">
                    <CheckCircleFill className="icon" />
                    <h2>Payment Confirmed !</h2>
                    <p>You will receive an email containing the reference number and invoice, along with the payment confirmation.</p>
                    <p>Thank you!</p>
                    <Link className="back-btn" to="/">Go Back</Link>
                </div>
            </section>

        </>
    )
}

export default PaymentConfirmed