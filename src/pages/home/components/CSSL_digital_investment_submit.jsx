import img1 from "../../../assets/img/about/img1.jpg";
function CSSL_digital_investment_submit() {
  return (
    <section id="cssl-digita-investment-summit" className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-xs-12">
            <div className="img-thumb">
              <img className="img-fluid" src={img1} alt="" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-xs-12">
            <div className="section-title-header text-center">
              <h2 className="section-title wow fadeInUp" data-wow-delay="0.2s">
                CSSL Digital Investment Summit
              </h2>
              <p className="wow fadeInDown" data-wow-delay="0.2s">
                Join us as we commemorate the extraordinary accomplishments of
                <br />
                the industry's brightest stars at the NITC Awards 2022.
              </p>
            </div>

            <p style={{ marginTop: "20px", marginBottom: "20px" }}>
              <b>CSSL Digital Investment Summit </b> is a special feature of
              40th Anniversary edition which is Organized to connect Sri Lankan
              startups and mature unicorn (USD 1 Billion Company) potential ICT
              companies with the potential to become with the prospective
              investors to support their next level of growth in order to
              contribute to national objective of achieving ICT exports of 3
              billion US dollars by 2024.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CSSL_digital_investment_submit;
