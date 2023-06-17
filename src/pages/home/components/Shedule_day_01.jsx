import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CheckCircle } from "react-bootstrap-icons";

function Shedule_day_01() {
  return (
    <section
      id="sponsors"
      className="section-padding"
      style={{ backgroundColor: "#f3f4f3" }}
    >
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title-header text-center"></div>
          </div>
        </div>
        <div
          className="row mb-30 text-center wow fadeInDown"
          data-wow-delay="0.3s"
        >
          <ul className="stylish-list mb-3" style={{ textAlign: "left" }}>
            <li>
              <span
                style={{
                  paddingRight: "8px",
                  color: "blue",
                  size: "25px",
                }}
              >
                <CheckCircle />
              </span>
              Chief Guest / MOT
            </li>
            <li>
              <span
                style={{
                  paddingRight: "8px",
                  color: "blue",
                  size: "25px",
                }}
              >
                <CheckCircle />
              </span>
              Keynote
            </li>
            <li>
              <span
                style={{
                  paddingRight: "8px",
                  color: "blue",
                  size: "25px",
                }}
              >
                <CheckCircle />
              </span>
              ICT Awards
            </li>
            <li>
              <span
                style={{
                  paddingRight: "8px",
                  color: "blue",
                  size: "25px",
                }}
              >
                <CheckCircle />
              </span>
              Gala Dinner
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Shedule_day_01;
