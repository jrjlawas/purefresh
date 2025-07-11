import banner3 from "@/assets/img/banner/banner3.png";
import heart3 from "@/assets/img/icons/vl-heart-3.1.svg";
import { Link } from "react-router";
import { Col, Container, Row } from "react-bootstrap";
const Hero = () => {
  return (
    <div
      className="vl-banner-3-bg mt-24"
      style={{
        backgroundImage: `url(${banner3})`,
      }}
    >
      <Container fluid>
        <Row>
          <Col lg={8} className="gx-0">
            <div className="vl-section-heading3">
              <div className="banner3">
                <h4
                  className="subtitle"
                  data-aos="zoom-in-up"
                  data-aos-duration={1200}
                  data-aos-delay={300}
                >
                  <span>
                    <img src={heart3} alt="heart3" />
                  </span>{" "}
                  Freshness in Every Drop, Cube and Wash!
                </h4>
                <h1 className="heading-title text-anime-style-3">
                  {/* Heroes Fighting <br /> For Clean Water */}
                  Welcome to PureFresh
                  {/* <br />
                  Your Neighborhood Water, Ice, & Laundry Partner */}
                </h1>
                <p className="para">
                  {/* Access to clean water is fundamental to life, health, hope.{" "}
                  <br /> Our Water Aid Heroes are on the frontlines, working. */}
                  Located in the heart of Naga City, PureFresh offers
                  crystal-clear drinking water, premium ice cubes, and reliable
                  laundry services—all under one roof.
                </p>
              </div>
              <div className="vl-btn3">
                <Link to="/" className="primary-btn-3">
                  Order
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Hero;
