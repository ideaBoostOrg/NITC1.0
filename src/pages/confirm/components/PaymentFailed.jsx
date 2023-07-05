import logo from "../../../assets/img/logo-crop.png";
import { XCircleFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const PaymentFailed = () => {
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
                    <XCircleFill className="icon" style={{
                        color: "#e61134"
                    }} />
                    <h2>Payment Failed !</h2>
                    <p>We&apos;re sorry, but your payment was not successful.</p>
                    <p>Please check your payment details and try again.</p>
                    <Link className="back-btn" to="/" style={{
                        backgroundColor: "#e61134"
                    }}>Try Again</Link>
                </div>
            </section>

        </>
    )
}

export default PaymentFailed