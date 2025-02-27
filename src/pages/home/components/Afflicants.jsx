// import logo_1 from "../../../assets/img/afflicants/logo-1.webp";
// import logo_2 from "../../../assets/img/afflicants/logo-2.webp";
import logo_3 from "../../../assets/img/afflicants/logo-4.webp";
import logo_4 from "../../../assets/img/afflicants/logo-5.webp";
import logo_5 from "../../../assets/img/afflicants/logo-3.webp";


function Afflicants() {
  return (
    <section id="sponsors" className="section-padding">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center">
              <h2
                // className="section-title wow fadeInUp"
                style={{ color: "#212121" }}
                data-wow-delay="0.2s"
              >
                Our Affiliations
              </h2>
              <p className="wow fadeInDown" data-wow-delay="0.2s">
                We extend a special thank you to our esteemed affiliations,
                whose partnership and support <br />
                have played a pivotal role in our collective achievements
              </p>
            </div>
          </div>
        </div>
        <div
          className="row mb-30 text-center wow fadeInDown"
          data-wow-delay="0.3s"
        >
          <div className="col-lg-12">
            <div className="sponsors-logo text-center">
              {/* <span className="sponsor-logo">
                <img src={logo_1} style={{ width: 100, height: 60 }} alt="" />
              </span>
              <span href="" className="sponsor-logo">
                <img src={logo_2} style={{ width: 100, height: 60 }} alt="" />
              </span> */}
              <span href="" className="sponsor-logo">
                <img src={logo_3} style={{ width: 150, height: 120 }} alt="" />
              </span>
              <span href="" className="sponsor-logo">
                <img src={logo_4} style={{ width: 100, height: 50 }} alt="" />
              </span>
              <span href="" className="sponsor-logo">
                <img src={logo_5} style={{ width: 80, height: 60 }} alt="" />
              </span>
              {/* <a href=""><img src={logo_6} alt="" /></a>
                    <a href=""><img src={logo_7} alt="" /></a>
                    <a href=""><img src={logo_8} alt="" /></a>
                    <a href=""><img src={logo_9} alt="" /></a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Afflicants;
