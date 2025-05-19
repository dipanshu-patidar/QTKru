import React from "react";

const Footer = () => {
  return (
    <>
      {/* Footer Section */}
      <footer className="qtkaru-footer">
        <div className="container">
          <div className="row">
            {/* Company Info Column */}
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <div className="qtkaru-footer-logo">Qtkaru</div>
              <p className="qtkaru-footer-description">
                The Ultimate Viral Task Marketplace connecting brands with
                millions of users.
              </p>
              <div className="qtkaru-social-icons">
                <a href="#" className="qtkaru-social-link">
                  <i className="bi bi-facebook" />
                </a>
                <a href="#" className="qtkaru-social-link">
                  <i className="bi bi-twitter" />
                </a>
                <a href="#" className="qtkaru-social-link">
                  <i className="bi bi-instagram" />
                </a>
                <a href="#" className="qtkaru-social-link">
                  <i className="bi bi-linkedin" />
                </a>
              </div>
            </div>
            {/* Quick Links Column */}
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h3 className="qtkaru-footer-heading">Quick Links</h3>
              <ul className="qtkaru-footer-links">
                <li className="qtkaru-footer-link-item">
                  <a href="#about-section" className="qtkaru-footer-link">
                    About
                  </a>
                </li>
                <li className="qtkaru-footer-link-item">
                  <a href="#features-section" className="qtkaru-footer-link">
                    Features
                  </a>
                </li>
                <li className="qtkaru-footer-link-item">
                  <a
                    href="#how-it-works-section"
                    className="qtkaru-footer-link"
                  >
                    How It Works
                  </a>
                </li>
                <li className="qtkaru-footer-link-item">
                  <a
                    href="#qt-why-choose-section"
                    className="qtkaru-footer-link"
                  >
                    Why Choose Us
                  </a>
                </li>
              </ul>
            </div>
            {/* Legal Column */}
            <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
              <h3 className="qtkaru-footer-heading">Legal</h3>
              <ul className="qtkaru-footer-links">
                <li className="qtkaru-footer-link-item">
                  <a href="#" className="qtkaru-footer-link">
                    Terms of Service
                  </a>
                </li>
                <li className="qtkaru-footer-link-item">
                  <a href="#" className="qtkaru-footer-link">
                    Privacy Policy
                  </a>
                </li>
                <li className="qtkaru-footer-link-item">
                  <a href="#" className="qtkaru-footer-link">
                    Cookie Policy
                  </a>
                </li>
                <li className="qtkaru-footer-link-item">
                  <a href="#" className="qtkaru-footer-link">
                    GDPR Compliance
                  </a>
                </li>
              </ul>
            </div>
            {/* Contact Us Column */}
            <div className="col-lg-3 col-md-6">
              <h3 className="qtkaru-footer-heading">Contact Us</h3>
              <div className="qtkaru-contact-info">
                <i className="bi bi-geo-alt qtkaru-contact-icon" />
                <span className="qtkaru-contact-text">
                  123 Innovation Street, Tech City, 12345
                </span>
              </div>
              <div className="qtkaru-contact-info">
                <i className="bi bi-envelope qtkaru-contact-icon" />
                <span className="qtkaru-contact-text">info@qtkaru.com</span>
              </div>
              <div className="qtkaru-contact-info">
                <i className="bi bi-telephone qtkaru-contact-icon" />
                <span className="qtkaru-contact-text">+1 (555) 123 4567</span>
              </div>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="qtkaru-footer-bottom">
            <div className="qtkaru-copyright">
              © 2025 Qtkaru. All rights reserved.
            </div>
            <div className="d-flex gap-2">
              <div className="">
                <span>
                  <i className="fa-brands fa-cc-visa fs-2" />
                </span>
              </div>
              <div className="">
                <span>
                  <i className="fa-brands fa-cc-mastercard fs-2" />
                </span>
              </div>
              <div className="">
                <span>
                  <i className="fa-brands fa-cc-paypal fs-2" />
                </span>
              </div>
              <div className="">
                <span>
                  <i className="fa-brands fa-cc-apple-pay fs-2" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
