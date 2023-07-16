import logo from "../../assets/img/logo-crop.png";

/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

import PaymentConfirmed from "./components/PaymentConfirmed";
import PaymentFailed from "./components/PaymentFailed";

import { firestore } from "../../firebase";
import { collection, doc, query, getDocs, where, updateDoc } from "firebase/firestore";
import PaymentProcessing from "./components/PaymentProcessing";


function ConfirmPage() {

    const [searchParams] = useSearchParams()
    const clientRef = searchParams.get('clientRef')
    const reqid = searchParams.get('reqid')

    const [data, setData] = useState()
    const [isResponceLoaded, setIsResponceLoaded] = useState(false)
    const [isPaymentConfirmed, setIsPaymentConfirmed] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setError] = useState(false)
    console.log("before", isLoading);
    useEffect(() => {
        setIsLoading(true)
        axios.post('http://localhost:3400/confirm', {
            clientRef: clientRef,
            reqid: reqid
        })
            .then(Response => {
                console.log("response", isLoading);
                setData(Response.data)
                if (Response.data?.responseCode) {
                    if (Response.data?.responseCode === "00" && Response.data?.clientRef === clientRef) {
                        setIsPaymentConfirmed(true)
                        setIsLoading(false)
                    }
                    else {
                        setIsLoading(false)
                        return setIsPaymentConfirmed(false)
                    }
                    console.log("responceCode", isLoading);

                } else {
                    setIsPaymentConfirmed(false)
                }
            })
            .catch((error) => {
                console.log(error);
                setIsPaymentConfirmed(false)

            })

        console.log("end", isLoading);


    }, [reqid, clientRef])


    const updatePaymentStatus = async (status, additionalFields) => {
        try {
            const usersCollectionRef = collection(firestore, "users");
            const querySnapshot = await getDocs(
                query(usersCollectionRef, where("clientRef", "==", clientRef))
            );
            if (!querySnapshot.empty) {
                const userDoc = doc(firestore, "users", querySnapshot.docs[0].id);
                await updateDoc(userDoc, {
                    paymentStatus: status,
                    ...additionalFields,
                });
            }
        } catch (error) {
            console.log("Error updating payment status:", error);
        }
    };

    useEffect(() => {
        setIsLoading(true)
        if (isPaymentConfirmed) {
            updatePaymentStatus("Paid", {
                transactionNumber: data?.transactionNumber,
                paymentAmount: data?.PaymentAmount,
                cardType: data?.cardType,
                cardHolderName: data?.CardHolderName,
                responseText: data?.ResponseText,
                responseCode: data?.ResponseCode,
                currency: data?.currency,
            });
        } else {
            updatePaymentStatus("Payment Failed", {
                transactionNumber: data?.transactionNumber,
                paymentAmount: data?.PaymentAmount,
                cardType: data?.cardType,
                cardHolderName: data?.CardHolderName,
                responseText: data?.ResponseText,
                responseCode: data?.ResponseCode,
                currency: data?.currency,
            });
        }
        setIsLoading(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPaymentConfirmed, data])




    console.log("isResponseLoaded: ", isResponceLoaded);
    console.log("isPaymentConfirmed: ", isPaymentConfirmed);
    console.table(data);

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
            {isLoading ? <PaymentProcessing /> : isPaymentConfirmed ? <PaymentConfirmed data={data} /> : <PaymentFailed data={data} />
            }
        </>
    )
}

export default ConfirmPage