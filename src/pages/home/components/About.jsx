import img1 from '../../../assets/img/about/img1.png'

function About() {
    return (
        <section id="about" className="section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-xs-12">
                        <div className="img-thumb">
                            <img className="img-fluid" src={img1} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-xs-12">
                        <div className="about-content">
                            <div>
                                <div className="about-text">
                                    <h2>About The Conference</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod ncididunt ametfh consectetur dolore magna aliqua. Ut enim ad minim veniam dolor sitame magnaelit ate consectetur adipisicing. Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod.</p>
                                </div>
                                <ul className="stylish-list mb-3">
                                    <li><i className="lni-check-mark-circle"></i>Networking Sessions</li>
                                    <li><i className="lni-check-mark-circle"></i>Meet New Professional Faces</li>
                                    <li><i className="lni-check-mark-circle"></i>Get Inspired by Amazing Speakers</li>
                                    <li><i className="lni-check-mark-circle"></i>Lorem ipsum dolor sit ameterib</li>
                                    <li><i className="lni-check-mark-circle"></i>Lorem ipsum dolor sit ameterib quodsi</li>
                                </ul>
                                <a className="btn btn-common" href="#">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About