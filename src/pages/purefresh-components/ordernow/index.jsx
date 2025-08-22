import { Col, Container, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa6";
import Select from "react-select";
import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";

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
    <section className="vl-contact-section-inner sp2">
      <Container>
        <Row className=" flex-lg-row flex-column-reverse">
          <Col lg={6} className="mb-30">
            <div className="vl-maps">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d617.6986165273747!2d123.1770377958098!3d13.625892420210032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a18d8dba68195d%3A0x5161f63396a625f0!2sJolly%20Neighborhood!5e1!3m2!1sen!2sph!4v1753534196686!5m2!1sen!2sph"
                allowFullScreen
                className="vl-contact-maps"
              />
            </div>
          </Col>
          <Col lg={6} className="mb-30">
            <div className="vl-section-content ml-50">
              <div className="section-title">
                <h4 className="title">Order Now</h4>
                {/* <h2 className="subtitle">
                  Together, Let’s Make Every Day Fresher
                </h2> */}
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
                      {/* <div className="btn-area">
                        <a className="primary-btn-3">
                          Send Now{" "}
                          <span>
                            <FaArrowRight />
                          </span>
                        </a>
                      </div> */}
                      <div className="btn-area">
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
