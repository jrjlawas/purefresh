import galleryImg from "@/assets/img/icons/vl-gallerylarge-3.1.svg";
import { FaArrowRight } from "react-icons/fa6";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router";

import service3Icon from "@/assets/img/icons/vl-service-icon-3.3.svg";
import service1 from "@/assets/img/purefresh/product/Product1.jpg";
import service2 from "@/assets/img/purefresh/product/Product2.jpg";
import service3 from "@/assets/img/purefresh/product/Product3.jpg";

const Service = () => {
  const serviceData = [
    {
      animation: {
        effect: "fade-up",
        duration: 1100,
        delay: 300,
      },
      linkTo: "/pf-ice",
      iconImg: service3Icon,
      thumbnailImg: service2,
      title: "Ice Cubes",
      description:
        "Crystal-clear ice, perfect for drinks, parties, and food service.",
    },
    {
      animation: {
        effect: "fade-right",
        duration: 1200,
        delay: 300,
      },
      linkTo: "/pf-water",
      iconImg: service3Icon,
      thumbnailImg: service1,
      title: "Pure Drinking Water",
      description:
        "Safe, clean, and refreshing water delivered right to you daily.",
    },
    {
      animation: {
        effect: "fade-left",
        duration: 1000,
        delay: 300,
      },
      linkTo: "/pf-laundry",
      iconImg: service3Icon,
      thumbnailImg: service3,
      title: "Laundry Service",
      description:
        "Reliable, affordable laundry care for fresh, clean clothes every time.",
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
              <h4
                className="subtitle"
                data-aos="fade-up"
                data-aos-duration={800}
                data-aos-delay={300}
              >
                Our Products
              </h4>
              <h2 className="title text-anime-style-3">
                PureFresh Delivers Clean, Fresh Essentials Daily
              </h2>
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
                <div className="vl-service-icon">
                  <span>
                    <img src={item.iconImg} alt="thumbnailImg" />
                  </span>
                </div>
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
                    <Link to={item.linkTo} className="rmore">
                      View Product{" "}
                      <span>
                        <FaArrowRight />
                      </span>
                    </Link>
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
export default Service;
