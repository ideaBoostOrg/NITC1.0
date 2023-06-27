// import Awards from "../../../assets/img/Awards-1.jpg";


function CSSL_awards() {
  return (
    <section
      id="cssl-awards"
      className="section-padding"
      style={{ paddingTop: "40px" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-xs-12">
            <div className="img-thumb">
              {/* <img className="img-fluid" src={Awards} alt="" /> */}
            </div>
          </div>

          <div className="col-lg-6 col-md-12 col-xs-12">
            <div className="section-title-header text-left">
              <h2
                className="section-title wow fadeInUp"
                data-wow-delay="0.2s"
                style={{ textAlign: "left" }}
              >
                CSSL Awards
              </h2>
              <p
                className="wow fadeInDown"
                data-wow-delay="0.2s"
                style={{ textAlign: "left" }}
              >
                Join us as we commemorate the extraordinary accomplishments of
                <br />
                the industry&apos;s brightest stars at the NITC Awards 2022.
              </p>
            </div>

            <p style={{ marginTop: "20px", marginBottom: "20px" }}>
              <b>CSSL Awards </b>recognizes significant national contributions
              by ICT Professionals and CSSL Elite awards will be held at the
              inauguration ceremony of the NITC Conference.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CSSL_awards;
