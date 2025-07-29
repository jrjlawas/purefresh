import iceDe from "@/assets/img/purefresh/ice/IceDelivery.jpg";
import icePa from "@/assets/img/purefresh/ice/IceParty.jpg";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";
const IceDelivery = () => {
  return (
    <section id="blog" className="vl-blog3 sp2">
      <Container>
        <Row>
          <Col lg={7} className="mx-auto">
            <div className="vl-section-title3 mb-60 text-center">
              <h2 className="title text-anime-style-3">
                Delivery & Bulk Orders
              </h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={5} className="gx-0">
            <div className="vl-single-blog-item mr-15 mb-30">
              <div className="vl-blog-thumb reveal">
                <img className="w-100" src={iceDe} alt="blog3" />
              </div>
              <div className="vl-blog-content">
                <div className="vl-content">
                  <Link to="#" className="title">
                    Minimum Delivery Order: 20 Kilograms
                  </Link>
                  <p className="para">
                    We offer convenient delivery straight to your
                    doorstep—perfect for those who need ice in large quantities
                    without the hassle of pick-up.
                  </p>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={7} className="gx-0">
            <div className="vl-single-blog-item ml-15 mb-30">
              <div className="vl-blog-thumb reveal">
                <img className="w-100" src={icePa} alt="blog2" />
              </div>
              <div className="vl-blog-content">
                <div className="vl-content">
                  <Link to="#" className="title">
                    Ideal for Events, Businesses & Special Occasions
                  </Link>
                  <p className="para">
                    We are equipped to fulfill high-volume orders while
                    maintaining top-tier hygiene and storage standards. Our ice
                    is produced in a clean, food-safe environment, ensuring your
                    guests or customers get nothing less than the best.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default IceDelivery;
