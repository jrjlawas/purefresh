import galleryImg from "@/assets/img/icons/vl-gallerylarge-3.1.svg";
import { FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";
import service2 from "@/assets/img/purefresh/product/Product2.jpg";

const IcePackage = () => {
  const serviceData = [
    {
      animation: {
        effect: "fade-up",
        duration: 1100,
        delay: 300,
      },
      linkTo: "/pf-ice",
      thumbnailImg: service2,
      title: "1 Kilogram (PHP 15.00)",
      description: "Ideal for personal refreshment or small gatherings.",
    },
    {
      animation: {
        effect: "fade-right",
        duration: 1200,
        delay: 300,
      },
      linkTo: "/pf-ice",
      thumbnailImg: service2,
      title: "2 Kilograms (PHP 25.00)",
      description: "Great for family use or medium-sized events.",
    },
    {
      animation: {
        effect: "fade-left",
        duration: 1000,
        delay: 300,
      },
      linkTo: "/pf-ice",
      thumbnailImg: service2,
      title: "5 Kilograms (PHP 60.00)",
      description: "Best for larger needs, restaurants, or catering.",
    },
  ];
  return (
    <section id="service" className="vl-service3 sp2">
      <div className="shape">
        <img src={galleryImg} alt="galleryImg" />
      </div>
      <Container>
        <Row>
          <Col lg={"6"} className="mx-auto">
            <div className="vl-section-title3 mb-60 text-center">
              {/* <h4
                className="subtitle"
                data-aos="fade-up"
                data-aos-duration={800}
                data-aos-delay={300}
              >
                Our Ice Cube Pricing
              </h4> */}
              <h2 className="title text-anime-style-3">Our Ice Cube Pricing</h2>
            </div>
          </Col>
        </Row>
        <Row>
          {serviceData.map((item, idx) => (
            <Col
              lg={4}
              md={6}
              data-aos="fade-right"
              data-aos-duration={1200}
              data-aos-delay={300}
              key={idx}
            >
              <div className="vl-service-box-parent mb-30">
                <div className="vl-service-box-3">
                  <div className="service-thumb">
                    <img
                      className="w-100"
                      src={item.thumbnailImg}
                      alt="thumbnailImg"
                    />
                  </div>
                  <div className="service-content">
                    <Link to={item.linkTo} className="title">
                      {item.title}
                    </Link>
                    <p className="para">{item.description}</p>
                    {/* <Link to="#" className="rmore">
                      View Product{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link> */}
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};
export default IcePackage;
