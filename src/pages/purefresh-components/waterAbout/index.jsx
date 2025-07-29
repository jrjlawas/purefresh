// import blogThmb from "@/assets/img/blog/vl-blog-larg-thmb.png";
import blogThmb from "@/assets/img/purefresh/water/Drink3.jpg";

import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa6";
const WaterAbout = () => {
  return (
    <section id="event" className="vl-blog sp2">
      <Container>
        <Row>
          <Col lg={12}>
            <div
              className="vl-blog-lar-thumb-bg mb-30"
              style={{
                backgroundImage: `url(${blogThmb})`,
              }}
            >
              <div className="vl-section-title-1">
                <h5
                  className="subtitle"
                  data-aos="fade-right"
                  data-aos-duration={800}
                  data-aos-delay={300}
                >
                  PureFresh Purified Drinking Water
                </h5>
                <h2 className="title text-anime-style-3">
                  Clean Safe Delivered to Your Door.
                </h2>
                <p
                  className="pb-32"
                  data-aos="fade-right"
                  data-aos-duration={800}
                  data-aos-delay={300}
                >
                  At PureFresh, we believe that clean, safe, and great-tasting
                  drinking water should always be within reach. Whether for your
                  home, office, or small business, we provide affordable
                  purified water in durable 5-gallon containers, designed for
                  daily hydration and convenience.
                </p>
                <div
                  className="btn-area"
                  data-aos="fade-right"
                  data-aos-duration={800}
                  data-aos-delay={300}
                >
                  <div className="btn-area">
                    <Link to="/pf-contact" className="primary-btn-3">
                      Order Now{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default WaterAbout;
