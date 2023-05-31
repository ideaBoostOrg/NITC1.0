function Hero() {
    return (
        <div id="hero-area" className="hero-area-bg" style={{ height: "100vh" }}>
            <div className="overlay"></div>
            <div className="container ">
                <div className="row justify-content-center">
                    <div className="col-lg-9 col-sm-12">
                        <div className="contents text-center">
                            <div className="icon">
                                <i className="lni-mic"></i>
                            </div>
                            <p className="banner-info">11th - 13th of Oct 2023, Shangri-La Hotel, Colombo, Sri-Lanka</p>
                            <h2 className="head-title">National IT Conference</h2>
                            <p className="banner-desc">
                                The CSSL organises the National Information Technology Conference (NITC) annually, which is one of the flagship ICT
                                events in Sri Lanka as well as the region.</p>
                            <div className="banner-btn">
                                <a href="#" className="btn btn-common">Comming Soon</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero