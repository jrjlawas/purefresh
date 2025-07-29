import aboutIcons1 from "@/assets/img/icons/vl-about-1.1.svg";
import aboutIcons2 from "@/assets/img/icons/vl-about-1.2.svg";

// import about1 from "@/assets/img/about/vl-about-1.1.png";
// import about2 from "@/assets/img/about/vl-about-1.2.png";
import about1 from "@/assets/img/purefresh/ice/ice1.jpg";
import about2 from "@/assets/img/purefresh/ice/ice2.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";
const IceAbout = () => {
  return (
    <section id="about" className="vl-about-section sp2">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="vl-about-content">
              <div className="vl-section-title-1">
                <h5
                  className="subtitle"
                  data-aos="fade-right"
                  data-aos-duration={800}
                  data-aos-delay={300}
                >
                  PureFresh Ice Cubes
                </h5>
                <h2 className="title text-anime-style-3">
                  Crystal Clear. Clean. Always Ready to Chill.
                </h2>
                <p
                  className="pb-32"
                  data-aos="fade-right"
                  data-aos-duration={800}
                  data-aos-delay={300}
                >
                  Need ice fast? Trust PureFresh for your clean, clear, and
                  long-lasting ice cubes – perfect for your home, events,
                  restaurants, or sari-sari store needs!
                </p>
              </div>
              <div className="vl-about-grid">
                <div className="vl-about-icon-box mb-30">
                  <div className="vl-about-icon">
                    <span>
                      <img src={aboutIcons1} alt="about1" />
                    </span>
                  </div>
                  <div className="vl-icon-content">
                    <h3 className="title">
                      <Link to="#">Clean Water, Clear Ice</Link>
                    </h3>
                    <p>
                      Made from purified water, our ice is safe, tasteless, and
                      odor-free. Perfect for drinking, food use, and keeping
                      things cool the clean way.
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
                      <Link to="#">Freshly Made, Delivered Fast</Link>
                    </h3>
                    <p>
                      We produce fresh ice daily and deliver quickly for bulk
                      orders. Ideal for home use, events, or businesses that
                      need reliable ice supply.
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
          <Col lg={2} md={6} className="mb-30">
            <div
              className="vl-about-sm-content"
              data-aos="zoom-in-up"
              data-aos-duration={1000}
              data-aos-delay={300}
            >
              <p>
                Your trusted Ice Cube partner for clean, refreshing moments.
              </p>
              <div className="btn-area">
                <Link to="/pf-contact" className="primary-btn-3">
                  Order Now{" "}
                  {/* <span>
                    <FaArrowRight className="fa-solid fa-arrow-right" />
                  </span> */}
                </Link>
              </div>
              <div className="vl-about-sm-thumb d-none d-md-block">
                <img className="w-100" src={about2} alt="about2" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default IceAbout;
