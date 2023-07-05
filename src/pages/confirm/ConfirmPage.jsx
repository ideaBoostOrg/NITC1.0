import logo from "../../assets/img/logo-crop.png";
import { useEffect, useState } from "react";
// import axios from "axios";
import { CheckCircleFill } from "react-bootstrap-icons";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

// http://127.0.0.1:5173/payment-confirm?clientRef=CREFT2-12345&reqid=UEwEKbA1QnirORnt2S4Z
// 'https://sampath.paycorp.lk/webinterface/qw/confirm?csrfToken=' . $csrfToken . '&authToken=' . $auth_Token . '&clientRef=' . $clientRef

function ConfirmPage() {
    const [searchParams] = useSearchParams()
    const clientRef = searchParams.get('clientRef')
    const reqid = searchParams.get('reqid')

    const [data, setData] = useState([])

    const getPayment = async () => {
        try {
            // const response = await axios.post(
            //     `https://sampath.paycorp.lk/webinterface/qw/confirm?csrfToken=${reqid}&authToken=${import.meta.env.VITE_PG_AUTH_TOKEN}&clientRef=${clientRef}`,
            //     {},
            //     {
            //         headers: {
            //             'Content-Type': 'application/json',
            //             'Access-Control-Allow-Origin': '*',
            //         }
            //     });

            const response = await fetch(`https://sampath.paycorp.lk/webinterface/qw/confirm?csrfToken=${reqid}&authToken=${import.meta.env.VITE_PG_AUTH_TOKEN}&clientRef=${clientRef}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                }
            })
            setData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getPayment()
    }, [clientRef, reqid])

    console.log(data);


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

            <section id="" className="section-padding">
                <div className="confirm-container">
                    <CheckCircleFill className="icon" />
                    <h2>Payment Confirmed</h2>
                    <p>You will receive an email containing the reference number and invoice, along with the payment confirmation.</p>
                    <p>Thank you!</p>
                    <Link className="back-btn" to="/">Go Back</Link>
                </div>
            </section>

        </>
    )
}

export default ConfirmPage