import { useEffect } from 'react';
import { Link } from "react-router";
import { FaArrowRight, FaBars, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationDot, FaPhoneVolume, FaXmark, FaYoutube } from 'react-icons/fa6';
import footerLogo from '@/assets/img/logo/vl-footer-logo-1.1.png';
import logo1 from '@/assets/img/logo/vl-logo-1.1.png';
import useToggle from '@/hooks/useToggle';
import MobileMenuItem from '../MobileMenuItem';
import { Col, Container } from 'react-bootstrap';
const MobileMenu = () => {
  const {
    isOpen,
    toggle
  } = useToggle();
  useEffect(() => {
    const handleClickOutside = event => {
      if (isOpen && !event.target.closest('.mobile-sidebar')) {
        toggle();
      }
    };
    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen, toggle]);
  return <>
            <div className="mobile-header mobile-haeder1 d-block d-lg-none">
                <Container>
                    <Col xs={12}>
                        <div className="mobile-header-elements">
                            <div className="mobile-logo">
                                <Link to="/"><img src={logo1} alt='logo1' /></Link>
                            </div>
                            <div onClick={toggle} className="mobile-nav-icon dots-menu">
                                <FaBars className="fa-solid fa-bars" />
                            </div>
                        </div>
                    </Col>
                </Container>
            </div>
            <div className={`mobile-sidebar mobile-sidebar1 ${isOpen ? 'mobile-menu-active' : ''}`}>
                <div className="logosicon-area">
                    <div className="logos">
                        <img src={footerLogo} alt='footerLogo' />
                    </div>
                    <div className="menu-close" onClick={toggle}>
                        <FaXmark className="fa-solid fa-xmark" />
                    </div>
                </div>
                <div className="mobile-nav mobile-nav1">
                    <MobileMenuItem />
                    <div className="allmobilesection">
                        <Link to="/pages/contact" className="header-mobile-btn1">Get
                            Started <span><FaArrowRight /></span></Link>
                        <div className="vl-mobile-contact1">
                            <h3 className="title">Contact Info</h3>
                            <div className="footer1-contact-info">
                                <div className="contact-info-single">
                                    <div className="contact-info-icon">
                                        <FaPhoneVolume size={16} className="fa-solid fa-phone-volume" />
                                    </div>
                                    <div className="contact-info-text">
                                        <a href="tel:+3(924)4596512">+3(924)4596512</a>
                                    </div>
                                </div>
                                <div className="contact-info-single">
                                    <div className="contact-info-icon">
                                        <FaEnvelope size={16} className="fa-solid fa-envelope" />
                                    </div>
                                    <div className="contact-info-text">
                                        <a href="mailto:info@example.com">info@example.com</a>
                                    </div>
                                </div>
                                <div className="contact-info-single">
                                    <div className="contact-info-icon">
                                        <FaLocationDot size={16} width={16} height={16} className="fa-solid fa-location-dot" />
                                    </div>
                                    <div className="contact-info-text">
                                        <a href="mailto:info@example.com">55 East Birchwood Ave.Brooklyn, <br /> New York
                                            11201,United States</a>
                                    </div>
                                </div>
                                <div className="vl-mobile-contact1">
                                    <h3 className="title">Social Links</h3>
                                    <div className="social-links-mobile-menu">
                                        <ul>
                                            <li><a href="#" className='d-flex align-items-center justify-content-center'><FaFacebookF className="fa-brands fa-facebook-f" /></a></li>
                                            <li><a href="#" className='d-flex align-items-center justify-content-center'><FaInstagram className="fa-brands fa-instagram" /></a></li>
                                            <li><a href="#" className='d-flex align-items-center justify-content-center'><FaLinkedinIn className="fa-brands fa-linkedin-in" /></a></li>
                                            <li><a href="#" className='d-flex align-items-center justify-content-center'><FaYoutube className="fa-brands fa-youtube" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>;
};
export default MobileMenu;