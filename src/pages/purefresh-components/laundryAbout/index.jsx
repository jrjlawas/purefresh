// import aboutThumb1 from "@/assets/img/about/vl-about-thumb-3.1.png";
import aboutThumb1 from "@/assets/img/purefresh/laundry/laundry1.jpg";
import aboutThumb2 from "@/assets/img/purefresh/laundry/laundry2.jpg";

import videoThumb from "@/assets/img/purefresh/laundry/laundry3.jpg";

import quoteUp from "@/assets/img/icons/vl-about-quote-up.svg";

import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";
const LaundryAbout = () => {
  return (
    <section id="about" className="vl-about3 sp2">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="vl-about-thumb-flex mb-30">
              {/* <Link to="#">
                <span>
                  <img src={arrowUp} alt="arrowUp" />
                </span>
              </Link> */}
              <Row>
                <Col lg={6} md={6}>
                  <div className="thumb-1 reveal">
                    <img
                      className="w-100"
                      src={aboutThumb1}
                      alt="aboutThumb1"
                    />
                  </div>
                </Col>
                <Col lg={6} md={6}>
                  <div className="thumb-2 reveal">
                    <img
                      className="w-100"
                      src={aboutThumb2}
                      alt="aboutThumb2"
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={6}>
            <div className="vl-about-content-3 ml-50 mb-30">
              <div className="vl-section-title3">
                <h4
                  className="subtitle"
                  data-aos="fade-left"
                  data-aos-duration={1100}
                  data-aos-delay={300}
                >
                  Clean Clothes. Fresh Life. Hassle-Free.
                </h4>
                <h2 className="title text-anime-style-3">Laundry Services</h2>
                <p
                  className="para"
                  data-aos="fade-left"
                  data-aos-duration={1100}
                  data-aos-delay={300}
                >
                  Life’s busy — and laundry shouldn’t slow you down. At
                  PureFresh Laundry Services, we bring you quick, affordable,
                  and professionally cleaned laundry, so you can focus on what
                  matters most.
                </p>
                <div
                  className="vl-btn3"
                  data-aos="fade-left"
                  data-aos-duration={1100}
                  data-aos-delay={300}
                >
                  <Link to="/pf-contact" className="primary-btn-3">
                    Order Now{" "}
                  </Link>
                </div>
              </div>
              <div
                className="vl-about-video-content"
                data-aos="zoom-in-up"
                data-aos-duration={1200}
                data-aos-delay={300}
              >
                <Row className="align-items-center">
                  <Col lg={6} md={6}>
                    <div className="vl-video-thumb">
                      <span>
                        {" "}
                        <img
                          className="w-100"
                          src={videoThumb}
                          alt="videoThumb"
                        />
                      </span>
                    </div>
                  </Col>
                  <Col lg={6} md={6}>
                    <div className="vl-video-content">
                      <div className="icon">
                        <span>
                          <img src={quoteUp} alt="quoteUp" />
                        </span>
                      </div>
                      <p className="para">
                        “Our mission goes beyond clean clothes; we’re committed
                        to saving your time and simplifying your day.”
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default LaundryAbout;
