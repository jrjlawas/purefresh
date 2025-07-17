import meetShape1 from "@/assets/img/shape/vl-meet-shape1.png";
import thumb2 from "@/assets/img/purefresh/hero/Hero2.jpg";

import { FaArrowRight, FaCheck } from "react-icons/fa6";
import { Link } from "react-router";
import { Col, Container, Row } from "react-bootstrap";
const Hero = () => {
  return (
    <div className="vl-about2 p-relative sp2">
      <Container>
        <Row>
          <div className="p-relative">
            <Row className="align-items-center">
              <Col lg={6}>
                <div className="vl-about-thumb mb-30">
                  {/* <div className="bottom-shape">
                    <img src={meetShape1} alt="meetShape1" />
                  </div> */}
                  <span>
                    <img
                      className="long-width reveal"
                      src={thumb2}
                      alt="thumb2"
                    />
                  </span>
                </div>
              </Col>
              <Col lg={6}>
                <div className="vl-about-content-box mb-30">
                  <div className="vl-section-title-3">
                    <h4
                      className="subtitle"
                      data-aos="fade-left"
                      data-aos-duration={1000}
                      data-aos-delay={300}
                    >
                      Freshness in Every Drop, Cube and Wash!
                    </h4>
                    <h2 className="title text-anime-style-3">
                      Welcome to PureFresh
                    </h2>
                    <p
                      className="pb-32"
                      data-aos="fade-left"
                      data-aos-duration={1000}
                      data-aos-delay={300}
                    >
                      Located in the heart of Naga City, PureFresh offers
                      crystal-clear drinking water, premium ice cubes, and
                      reliable laundry services—all under one roof.
                    </p>
                  </div>
                  <div className="vl-mission-content-checkbox">
                    <ul>
                      <li>
                        <span>
                          <FaCheck className="fa-solid fa-check" />
                        </span>
                        Crystal-Clear Purified Drinking Water
                      </li>
                      <li>
                        <span>
                          <FaCheck className="fa-solid fa-check" />
                        </span>{" "}
                        Premium Ice Cubes
                      </li>
                      <li>
                        <span>
                          <FaCheck className="fa-solid fa-check" />
                        </span>{" "}
                        Affordable & Reliable Laundry Services
                      </li>
                      <li>
                        <span>
                          <FaCheck className="fa-solid fa-check" />
                        </span>{" "}
                        One-Stop Water & Laundry Solution
                      </li>
                    </ul>
                  </div>
                  <div className="vl-about-btn">
                    <Link to="#" className="primary-btn-3">
                      Order Now{" "}
                      <span>
                        <FaArrowRight className="fa-solid fa-arrow-right" />
                      </span>
                    </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Row>
      </Container>
    </div>
  );
};
export default Hero;
