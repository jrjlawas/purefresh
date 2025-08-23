import contactLayer1 from "@/assets/img/icons/vl-contact-layer-3.1.svg";
import contactIcon1 from "@/assets/img/icons/vl-contact-ic-3.1.svg";
import contactIcon2 from "@/assets/img/icons/vl-contact-ic-3.2.svg";
import contactIcon3 from "@/assets/img/icons/vl-contact-ic-3.3.svg";
import { Col, Container, Row } from "react-bootstrap";
import Select from "react-select";
import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { FaArrowRight } from "react-icons/fa6";

const options = [
  {
    value: "Purified Drinking Water",
    label: "Purified Drinking Water",
  },
  {
    value: "Ice Cubes",
    label: "Ice Cubes",
  },
  {
    value: "Laundry Services",
    label: "Laundry Services",
  },
];

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState({ visible: false, message: "", type: "" });
  const showAlert = (message, type = "success") => {
    setAlert({ visible: true, message, type });
  };

  const serviceID = "service_xzmsvz5";
  const templateID = "template_if3snzf";
  const publicKey = "o3abIXSbb3C6L3DKP";
  const now = new Date();
  const dateTime = now.toLocaleString();
  const [formData, setFormData] = useState({
    FIRSTNAME: "",
    LASTNAME: "",
    CONTACTNUMBER: "",
    PRODUCT: "",
    QTY: "",
    ADDRESS: "",
  });
  const templateParams = {
    name: formData.FIRSTNAME + ", " + formData.LASTNAME,
    // client_email: "jayromellawas30@gmail.com",
    client_email: "romeocjacob@yahoo.com",
    glotti_email: "jay.romel.lawas@glottii.com",
    client_name: "PureFresh",
    sender_name: "Order Request",
    title: "Order Now",
    time: dateTime,
    message: `
    First Name: ${formData.FIRSTNAME}
    Last Name: ${formData.LASTNAME}
    Contact Number: ${formData.CONTACTNUMBER}
    Product: ${formData.PRODUCT}
    Quantity: ${formData.QTY}
    Address: ${formData.ADDRESS}
  `,
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (
        !formData.FIRSTNAME ||
        !formData.LASTNAME ||
        !formData.CONTACTNUMBER ||
        !formData.PRODUCT ||
        !formData.QTY ||
        !formData.ADDRESS
      ) {
        showAlert("Please fill out all fields before sending.", "error");
        setLoading(false);
        return;
      }

      emailjs.send(serviceID, templateID, templateParams, publicKey).then(
        (response) => {
          setFormData({
            FIRSTNAME: "",
            LASTNAME: "",
            CONTACTNUMBER: "",
            PRODUCT: "",
            QTY: "",
            ADDRESS: "",
          });
          showAlert(
            "Delivery request has been submitted. We will contact you shortly for the delivery confirmation.",
            "success"
          );
          setLoading(false);
        },
        (error) => {
          showAlert(
            "API Gateway error. Please contact Glotti Business Solutions at info@glottii.com",
            "error"
          );
        }
      );
    } catch (error) {
      showAlert(
        "API Gateway error. Please contact Glotti Business Solutions at info@glottii.com",
        "error"
      );
    }
  };

  return (
    <section id="contact" className="vl-contact3 sp2">
      {/* <div className="shap">
        <img src={contactLayer1} alt="contactLayer1" />
      </div> */}
      <Container>
        <Row>
          <Col lg={8} className="mx-auto">
            <div className="vl-section-title3 mb-60 text-center">
              <h4
                className="subtitle"
                data-aos="fade-up"
                data-aos-duration={800}
                data-aos-delay={300}
              >
                Contact Us
              </h4>
              <h2 className="title text-anime-style-3">
                Order Now – Fast, Friendly, and Fresh!
              </h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={5}>
            <div
              className="vl-contact-icon-box mb-30"
              data-aos="fade-right"
              data-aos-duration={1200}
              data-aos-delay={300}
            >
              <div className="vl-top-content">
                <h4 className="title">Contact Info</h4>
                <p className="para">
                  {/* We’d love to hear from you! Whether you have questions about
                  projects, want to get involved, <br /> or simply want to learn
                  more about the impact.  */}
                  Whether you need gallons of clean drinking water,
                  crystal-clear ice cubes for your event, or a hassle-free
                  laundry pickup, PureFresh is ready to serve!
                </p>
              </div>
              <div className="vl-icon-box-flex">
                <div className="vl-icon">
                  <span>
                    <img src={contactIcon1} alt="contactIcon1" />
                  </span>
                </div>
                <div className="vl-text">
                  <h4 className="title">Our Location</h4>
                  <a href="#" className="para">
                    Lot 15, Block 10, Jolly Neighbors Subd. Santa Cruz, Naga
                    City 4400
                  </a>
                </div>
              </div>
              <div className="vl-icon-box-flex">
                <div className="vl-icon">
                  <span>
                    <img src={contactIcon2} alt="contactIcon2" />
                  </span>
                </div>
                <div className="vl-text">
                  <h4 className="title">Phone Number</h4>
                  <a href="tel: 09542294356" className="para">
                    0954 229 4356
                  </a>{" "}
                  {/* <br />
                  <a href="tel:1234567890" className="para">
                    123-456-7890
                  </a> */}
                </div>
              </div>
              <div className="vl-icon-box-flex">
                <div className="vl-icon">
                  <span>
                    <img src={contactIcon3} alt="contactIcon3" />
                  </span>
                </div>
                <div className="vl-text">
                  <h4 className="title">Email Address</h4>
                  <a href="mailto:romeocjacob@yahoo.com" className="para">
                    romeocjacob@yahoo.com
                  </a>{" "}
                  {/* <br />
                  <a href="mailto:Infocharity@gmail.com" className="para"> 
                    Infocharity@gmail.com
                  </a> */}
                </div>
              </div>
            </div>
          </Col>
          <Col lg={7}>
            <div
              className="vl-contact-from3"
              data-aos="fade-left"
              data-aos-duration={1000}
              data-aos-delay={300}
            >
              <h4 className="title">Get In Touch</h4>
              <p className="para">
                By reaching out, you’re taking the first step toward refreshing
                your daily life and enjoying reliable, quality service from your
                local provider.
              </p>
              <form action="#">
                <div className="vl-form3">
                  <Row>
                    <Col lg={6}>
                      <input
                        type="text"
                        name="FIRSTNAME"
                        onChange={handleChange}
                        value={formData.FIRSTNAME}
                        placeholder="First Name*"
                      />
                    </Col>
                    <Col lg={6}>
                      <input
                        type="text"
                        name="LASTNAME"
                        onChange={handleChange}
                        value={formData.LASTNAME}
                        placeholder="Last Name*"
                      />
                    </Col>
                    <Col lg={12}>
                      <input
                        type="text"
                        name="CONTACTNUMBER"
                        onChange={handleChange}
                        value={formData.CONTACTNUMBER}
                        placeholder="Contact Number*"
                      />
                    </Col>
                    <Col lg={6} className="mb-3">
                      <Select
                        options={options}
                        name="PRODUCT"
                        onChange={(selectedOption) =>
                          setFormData((prev) => ({
                            ...prev,
                            PRODUCT: selectedOption ? selectedOption.value : "", // update PRODUCT
                          }))
                        }
                        value={options.find(
                          (opt) => opt.value === formData.PRODUCT
                        )}
                        className="react-select-container"
                        classNamePrefix="react-select"
                        placeholder="-Select Product-"
                      />
                    </Col>
                    <Col lg={6}>
                      <input
                        type="number"
                        name="QTY"
                        onChange={handleChange}
                        value={formData.QTY}
                        placeholder="Qty*"
                      />
                    </Col>
                    <Col lg={12}>
                      <textarea
                        name="ADDRESS"
                        id="message"
                        onChange={handleChange}
                        value={formData.ADDRESS}
                        placeholder="Delivery Address*"
                        defaultValue={""}
                      />
                    </Col>
                    <Col lg={12}>
                      {alert.visible && (
                        <div className={`alert-box ${alert.type}`}>
                          {alert.message}
                        </div>
                      )}

                      <br />
                    </Col>
                    <Col lg={12}>
                      <div className="vl-btn3">
                        <button
                          type="button"
                          className="primary-btn-3"
                          onClick={handleSubmit}
                        >
                          {loading ? (
                            <>
                              Submitting..
                              <span className="spinner"></span>
                            </>
                          ) : (
                            <>
                              SEND NOW{" "}
                              <span>
                                <FaArrowRight />
                              </span>
                            </>
                          )}
                        </button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Contact;
