import aboutIcons2 from "@/assets/img/icons/vl-about-1.2.svg";
// import about1 from "@/assets/img/about/vl-about-1.1.png";
// import about2 from "@/assets/img/about/vl-about-1.2.png";
import about1 from "@/assets/img/purefresh/water/Drink1.jpg";
import about2 from "@/assets/img/purefresh/water/Drink2.jpg";

// import blogThmb from "@/assets/img/purefresh/water/Drink3.jpg";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";
const WaterPackaging = () => {
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
                  Product Details
                </h5>
                <h2 className="title text-anime-style-3">
                  Water Quality Assurance: Safe, Fresh, and Crystal-Clear
                </h2>
                <p
                  className="pb-32"
                  data-aos="fade-right"
                  data-aos-duration={800}
                  data-aos-delay={300}
                >
                  At PureFresh, your health is our highest priority. That’s why
                  our water goes through a rigorous, multi-stage purification
                  system before being delivered to your home or office.
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
                      <Link to="#">Container Size: 5 Gallons</Link>
                    </h3>
                    <p>
                      Each PureFresh container holds approximately 5 gallons
                      (roughly 18.9 liters) of purified drinking water—an ideal
                      size for daily consumption at homes, offices, small
                      eateries, and retail stores.
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
                      <Link to="#">Affordable Pricing – Just ₱30.00 Each</Link>
                    </h3>
                    <p>
                      We believe access to clean water shouldn’t be expensive.
                      That’s why we offer each 5-gallon container at just
                      ₱30.00, one of the most competitive prices in Naga City.
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
          {/* <Col lg={2} md={6} className="mb-30">
            <div
              className="vl-about-sm-content"
              data-aos="zoom-in-up"
              data-aos-duration={1000}
              data-aos-delay={300}
            >
              <p>
                We make hydration easy with reliable delivery within a
                5-kilometer radius from our location
              </p>
              <div className="btn-area">
                <Link to="/pf-contact" className="primary-btn-3">
                  Order Now{" "}
                </Link>
              </div>
              <div className="vl-about-sm-thumb d-none d-md-block">
                <img className="w-100" src={about2} alt="about2" />
              </div>
            </div>
          </Col> */}
        </Row>
      </Container>
    </section>
  );
};
export default WaterPackaging;
