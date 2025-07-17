import { Col, Container, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";
import Select from "react-select";
const options = [
  {
    value: 1,
    label: "Purified Drinking Water",
  },
  {
    value: 2,
    label: "Ice Cubes",
  },
  {
    value: 3,
    label: "Laundry Services",
  },
];
const Contact = () => {
  return (
    <section className="vl-contact-section-inner sp2">
      <Container>
        <Row className=" flex-lg-row flex-column-reverse">
          <Col lg={6} className="mb-30">
            <div className="vl-maps">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1938.7414567513479!2d123.17783107960443!3d13.628362745761466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a1f3005d438581%3A0x51517a25f59aa999!2s2nd%20st%20jollyneighborhood%20santa%20cruz!5e0!3m2!1sen!2sph!4v1752757953688!5m2!1sen!2sph"
                allowFullScreen
                className="vl-contact-maps"
              />
            </div>
          </Col>
          <Col lg={6} className="mb-30">
            <div className="vl-section-content ml-50">
              <div className="section-title">
                <h4 className="subtitle">Order Now</h4>
                <h2 className="title">
                  Together, Let’s Make Every Day Fresher
                </h2>
                <p className="para pb-32">
                  We’re here to take your orders, answer your questions, and
                  deliver the water, ice, and laundry services your home or
                  business needs—fast, easy, and reliable.
                </p>
              </div>
              <div className="vl-form-inner">
                <form action="#">
                  <Row>
                    <Col lg={6}>
                      <input type="text" placeholder="First Name*" />
                    </Col>
                    <Col lg={6}>
                      <input type="text" placeholder="Last Name*" />
                    </Col>
                    <Col lg={12}>
                      <input type="email" placeholder="Email Address*" />
                    </Col>

                    <Col lg={12} className="mb-3">
                      <Select
                        options={options}
                        className="react-select-container"
                        classNamePrefix="react-select"
                        placeholder="-Select Product-"
                      />
                    </Col>
                    <Col lg={12}>
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Order Details*"
                        defaultValue={""}
                      />
                    </Col>
                    <Col lg={12}>
                      <div className="btn-area">
                        <button className="primary-btn-3">
                          Send Now{" "}
                          <span>
                            <FaArrowRight />
                          </span>
                        </button>
                      </div>
                    </Col>
                  </Row>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Contact;
