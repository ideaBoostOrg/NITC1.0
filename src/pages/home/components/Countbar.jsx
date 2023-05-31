function Countbar(){
    return (
        <section id="count">
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-10">
                <div className="count-wrapper text-center">
                <div className="time-countdown wow fadeInUp" data-wow-delay="0.2s">
                    <div id="clock" className="time-count"></div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    )
}

export default Countbar;