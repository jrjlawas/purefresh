import footerLogo from "@/assets/img/purefresh/logo1.png";
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router";
import { Col, Container, Row } from "react-bootstrap";
import footerIc1 from "@/assets/img/icons/vl-footer-ic-1.1.svg";
import footerIc2 from "@/assets/img/icons/vl-footer-ic-1.2.svg";
import footerIc3 from "@/assets/img/icons/vl-footer-2.1.svg";
const Footer = () => {
  return (
    <footer className="vl-footer-bg-1 vl-footer-bg-3">
      <Container>
        <Row>
          <Col lg={3} md={6}>
            <div className="vl-footer-widget-1 mb-30">
              <div className="vl-footer-logo">
                <Link to="/multi-page/water-aid">
                  <img src={footerLogo} alt="footerLogo" />
                </Link>
              </div>
              <div className="vl-footer-content">
                <p>
                  Now’s the time to choose better—every order supports cleaner
                  living and reliable service. With PureFresh, you get water,
                  ice, and laundry you can trust. Experience the difference
                  today.
                </p>
              </div>
              <div className="vl-footer-social-1">
                <ul>
                  <li>
                    <a
                      className="d-flex align-items-center justify-content-center"
                      href="#"
                    >
                      <FaFacebookF className="fa-brands fa-facebook-f" />
                    </a>
                  </li>
                  {/* <li><a className='d-flex align-items-center justify-content-center' href="#"><FaInstagram className="fa-brands fa-instagram" /></a></li>
                                    <li><a className='d-flex align-items-center justify-content-center' href="#"><FaTwitter className="fa-brands fa-twitter" /></a></li>
                                    <li><a className='d-flex align-items-center justify-content-center' href="#"><FaGithub className="fa-brands fa-github" /></a></li> */}
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="vl-footer-widget-2 pl-90 mb-30">
              <h3 className="title">Quick Links</h3>
              <div className="vl-footer-menu">
                <ul>
                  <li>
                    <Link to="/pf-contact">Order Now</Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="vl-footer-widget-2 pl-30 mb-30">
              <h3 className="title">Our Products</h3>
              <div className="vl-footer-menu">
                <ul>
                  <li>
                    <a href="/pf-ice">Ice Cube</a>
                  </li>
                  <li>
                    <a href="#">Pure Drinking Water</a>
                  </li>
                  <li>
                    <a href="#">Laundry Service</a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="vl-footer-widget-3 mb-30">
              <h3 className="title">Contact Us</h3>
              <div className="vl-footer-icon-list">
                <div className="vl-footer-icon">
                  <span>
                    <img src={footerIc1} alt="footerIc1" />
                  </span>
                </div>
                <div className="vl-footer-text">
                  <a href="mailto:support@charity.com">romeocjacob@yahoo.com</a>
                </div>
              </div>
              <div className="vl-footer-icon-list">
                <div className="vl-footer-icon">
                  <span>
                    <img src={footerIc2} alt="footerIc2" />
                  </span>
                </div>
                <div className="vl-footer-text">
                  <a href="#">
                    {/* 8708 Technology Forest <br /> Pl Suite 125 -G, The
                    Woodlands, TX 773 */}
                    Lot 15, Block 10 Jolly Neighbors Subd. Bgy. Santa Cruz, Naga
                    City, Philippines
                  </a>
                </div>
              </div>
              <div className="vl-footer-icon-list">
                <div className="vl-footer-icon">
                  <span>
                    <img src={footerIc3} alt="footerIc3" />
                  </span>
                </div>
                <div className="vl-footer-text">
                  <a href="tel:1234567890">123-456-7890</a>
                </div>
              </div>
            </div>
          </Col>
          {/* <Col lg={3} md={6}>
            <div className="vl-footer-widget-4 mb-30">
              <h3 className="title">Subscribe Newsletter</h3>
              <div className="newsletter-form">
                <form action="#">
                  <input type="email" placeholder="Enter Your Email" />
                </form>
                <button className="form-btn">Subscribe</button>
              </div>
            </div>
          </Col> */}
        </Row>
        <div className="vl-copyright">
          <Row>
            <Col md={6}>
              <p className="vl-copyright-text">
                © 2025 Glotti Business Solution All Rights Reserved.
              </p>
            </Col>
            <Col md={6}>
              <div className="vl-copyright-menu">
                <ul>
                  <li>
                    <a href="#">Privacy Policy </a>
                  </li>
                  <li>
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
