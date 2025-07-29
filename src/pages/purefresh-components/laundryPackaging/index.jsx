import aboutIcons2 from "@/assets/img/icons/vl-about-1.2.svg";
import about1 from "@/assets/img/purefresh/laundry/laundry4.jpg";

// import blogThmb from "@/assets/img/purefresh/water/Drink3.jpg";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";
const LaundryPackaging = () => {
  return (
    <section id="about" className="vl-about-section sp2">
      <Container>
        <Row>
          <Col lg={8}>
            <div className="vl-about-content">
              <div className="vl-section-title-1">
                <h5
                  className="subtitle"
                  data-aos="fade-right"
                  data-aos-duration={800}
                  data-aos-delay={300}
                >
                  One Load. One Price. Zero Hassle.
                </h5>
                <h2 className="title text-anime-style-3">
                  All-Inclusive Laundry for Only ₱80.00
                </h2>
                <p
                  className="pb-32"
                  data-aos="fade-right"
                  data-aos-duration={800}
                  data-aos-delay={300}
                >
                  No more guessing how much your laundry will cost. At PureFresh
                  Laundry, one load—washed and dried—is just ₱80.00, with no
                  surprise charges. It's a price that fits your budget and a
                  service that fits your schedule.
                </p>
              </div>
              <div className="vl-about-grid">
                <div className="vl-about-icon-box mb-30">
                  <div className="vl-about-icon">
                    <span>
                      <img src={aboutIcons2} alt="about1" />
                    </span>
                  </div>
                  <div className="vl-icon-content">
                    <h3 className="title">
                      <Link to="#">No Hidden Charges</Link>
                    </h3>
                    <p>
                      What you see is what you pay. No extra fees for drying,
                      detergent, or basic care — just one flat rate that keeps
                      your budget in check.
                    </p>
                  </div>
                </div>
                <div className="vl-about-icon-box mb-30">
                  <div className="vl-about-icon">
                    <span>
                      <img src={aboutIcons2} alt="about2" />
                    </span>
                  </div>
                  <div className="vl-icon-content">
                    <h3 className="title">
                      <Link to="#">Perfect for Busy Schedules</Link>
                    </h3>
                    <p>
                      Don’t waste time waiting or doing laundry at home. Drop
                      off your load and come back to fresh, clean clothes —
                      ready when you are.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={4} md={6} className="mb-30">
            <div className="vl-about-large-thumb reveal">
              <img className="w-100" src={about1} alt="about1" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default LaundryPackaging;
