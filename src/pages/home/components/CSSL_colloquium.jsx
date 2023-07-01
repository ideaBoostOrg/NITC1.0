import CSSL_colloquium from "../../../assets/img/CSSL Colloquium.jpg";
function CSSL_digital_investment_submit() {
  return (
    <section
      id="cssl-colloquium"
      style={{ paddingTop: "10px" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-xs-12">
            <div className="img-thumb">
              <img className="img-fluid" src={CSSL_colloquium} alt="" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-xs-12">
            <div className="section-title-header mt-4 text-left">
              <h2
                className="section-title wow fadeInUp"
                data-wow-delay="0.2s"
              // style={{ textAlign: "left" }}
              >
                CSSL Colloquium
              </h2>
              <p className="wow fadeInDown" data-wow-delay="0.2s">
                Join us as we commemorate the extraordinary accomplishments of
                <br />
                the industry&apso;s brightest stars at the NITC Awards 2022.
              </p>
            </div>

            <p style={{ marginTop: "20px", marginBottom: "20px" }}>
              <b>CSSL Colloquium </b> track NITC 2023 will also feature more
              than a dozen product based research papers which were shortlisted
              after an assiduous selection process and will be presented by
              prominent local innovators on the second day of the conference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CSSL_digital_investment_submit;
