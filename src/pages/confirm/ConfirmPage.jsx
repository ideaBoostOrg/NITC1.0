/* eslint-disable no-unused-vars */
import logo from "../../assets/img/logo-crop.png";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { CheckCircleFill } from "react-bootstrap-icons";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

import PaymentConfirmed from "./components/PaymentConfirmed";
import PaymentFailed from "./components/PaymentFailed";

function ConfirmPage() {

    const [searchParams] = useSearchParams()
    const clientRef = searchParams.get('clientRef')
    const reqid = searchParams.get('reqid')

    const [data, setData] = useState()
    const [isResponceLoaded, setIsResponceLoaded] = useState(false)
    const [isPaymentConfirmed, setIsPaymentConfirmed] = useState(false)

    useEffect(() => {
        setIsResponceLoaded(false)
        axios.post('http://localhost:3400/confirm', {
            clientRef: clientRef,
            reqid: reqid
        })
            .then(Response => {
                setData(Response.data)
                setIsResponceLoaded(true)
                if (Response.data?.responseCode) {
                    if (Response.data?.responseCode === "00" && Response.data?.clientRef === clientRef) setIsPaymentConfirmed(true)
                    else return setIsPaymentConfirmed(false)
                } else {
                    setIsPaymentConfirmed(false)
                }

            })
            .catch((error) => {
                console.log(error);
                setIsPaymentConfirmed(false)

            })


    }, [reqid, clientRef])




    console.log("isResponseLoaded: ", isResponceLoaded);
    console.log("isPaymentConfirmed: ", isPaymentConfirmed);
    console.log("Data: ", data);

    return (
        <>
            {isResponceLoaded ?
                isPaymentConfirmed ? <PaymentConfirmed /> : <PaymentFailed />
                : <div>loading...</div>
            }
        </>
    )
}

export default ConfirmPage