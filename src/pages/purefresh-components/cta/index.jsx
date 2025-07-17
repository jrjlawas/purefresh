import shapArrow from "@/assets/img/icons/vl-cta-shap-arow.svg";
import thumb1 from "@/assets/img/cta/vl-cta-thumb-3.1.png";
import { Link } from "react-router";
import { Col, Container, Row } from "react-bootstrap";
const CtaArea = () => {
  return (
    <section className="vl-cta3">
      <Container className="gx-0">
        <div className="cta-bg">
          <div className="shap">
            <img src={shapArrow} alt="shapArrow" />
          </div>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="vl-cta-content3 mb-30">
                <h3 className="title text-anime-style-3">
                  PureFresh – Clean Water, Cool Ice, and Trusted Laundry Care
                </h3>
                <p
                  className="para"
                  data-aos="zoom-in-up"
                  data-aos-duration={1000}
                  data-aos-delay={300}
                >
                  We’re more than just water. PureFresh delivers purified
                  drinking water, crystal-clear ice, and dependable laundry
                  services — all with the commitment to quality your family or
                  business deserves.
                </p>
                {/* <div className="cta-btn">
                  <Link to="/" className="cta-btn1">
                    Order Now
                  </Link>
                </div> */}
              </div>
            </Col>
            <Col lg={6}>
              <div className="cta-thmb3 mb-30 reveal">
                <img src={thumb1} alt="thumb1" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};
export default CtaArea;
