import moment from "moment/moment";
import { useState } from "react";

function Countbar() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);


    const countdown = () => {
        const targetDate = moment("2023-10-11 00:00:00", "YYYY-MM-DD HH:mm:ss");
        const now = moment();

        const countdown = moment.duration(targetDate.diff(now));

        setDays(countdown.days());
        setHours(countdown.hours());
        setMinutes(countdown.minutes());
        setSeconds(countdown.seconds());
    };

    setInterval(countdown, 1000);

    return (
        // <section id="count">
        //     <div className="container">
        //         <div className="justify-content-center">
        //             {/* <div className="col-10">
        //         <div className="count-wrapper text-center">
        //         <div className="time-countdown wow fadeInUp" data-wow-delay="0.2s">
        //             <div id="clock" className="time-count"></div>
        //         </div>
        //         </div>
        //     </div> */}

        //             <div className="count-wrapper text-center">
        //                 <div className="row time-countdown wow fadeInUp">
        //                     <div className="col-md-3">1</div>
        //                     <div className="col-md-3">1</div>
        //                     <div className="col-md-3">1</div>
        //                     <div className="col-md-3">1</div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </section>
        <section id="information-bar">
            <div className="container">
                <div className="row inforation-wrapper">
                    <div className="col-lg-3 col-md-6 col-xs-12">
                        <ul className="d-flex flex-column">
                            <li className="h1 font-weight-bold">{days}</li>
                            <li className="h5 font-weight-normal">Days</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-xs-12">
                        <ul className="d-flex flex-column">
                            <li className="h1 font-weight-bold">{hours}</li>
                            <li className="h5 font-weight-normal">Hours</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-xs-12">
                        <ul className="d-flex flex-column">
                            <li className="h1 font-weight-bold">{minutes}</li>
                            <li className="h5 font-weight-normal">Minutes</li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-xs-12">
                        <ul className="d-flex flex-column">
                            <li className="h1 font-weight-bold">{seconds}</li>
                            <li className="h5 font-weight-normal">Seconds</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Countbar;