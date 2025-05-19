import React from "react";

const LastSections = () => {
  return (
    <>
      {/* Why Choose QTKru Section */}
      <section className="qt-why-section" id="qt-why-choose-section">
        <div className="container">
          <h2 className="qt-choose-section-heading">Why Choose Qtkaru?</h2>
          <div className="qt-choose-heading-underline" />
          <div className="row g-4">
            {/* Feature 1 */}
            <div className="col-md-4">
              <div className="qt-choose-section-feature-card">
                <div className="qt-choose-features-icon-wrapper">
                  <i className="bi bi-rocket" />
                </div>
                <h3 className="qt-choose-section-feature-title">
                  Rapid Viral Growth
                </h3>
                <p className="qt-choose-section-feature-description">
                  Designed for maximum user engagement and exponential growth
                  through viral task mechanisms
                </p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="col-md-4">
              <div className="qt-choose-section-feature-card">
                <div className="qt-choose-features-icon-wrapper">
                  <i className="bi bi-phone" />
                </div>
                <h3 className="qt-choose-section-feature-title">
                  Multi-Platform Experience
                </h3>
                <p className="qt-choose-section-feature-description">
                  Robust user experience with Flutter &amp; React across mobile
                  and web platforms
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="col-md-4">
              <div className="qt-choose-section-feature-card">
                <div className="qt-choose-features-icon-wrapper">
                  <i className="bi bi-shield" />
                </div>
                <h3 className="qt-choose-section-feature-title">
                  Secure KYC &amp; Payouts
                </h3>
                <p className="qt-choose-section-feature-description">
                  Ensuring trust &amp; compliance with secure verification and
                  payout processes
                </p>
              </div>
            </div>
            {/* Feature 4 */}
            <div className="col-md-4">
              <div className="qt-choose-section-feature-card">
                <div className="qt-choose-features-icon-wrapper">
                  <i className="bi bi-bar-chart" />
                </div>
                <h3 className="qt-choose-section-feature-title">
                  Scalable Admin Tools
                </h3>
                <p className="qt-choose-section-feature-description">
                  Powerful campaign management and analytics tools that grow
                  with your needs
                </p>
              </div>
            </div>
            {/* Feature 5 */}
            <div className="col-md-4">
              <div className="qt-choose-section-feature-card">
                <div className="qt-choose-features-icon-wrapper">
                  <i className="bi bi-translate" />
                </div>
                <h3 className="qt-choose-section-feature-title">
                  Multi-Language Support
                </h3>
                <p className="qt-choose-section-feature-description">
                  Wider reach in India with support for multiple languages
                  including English and Hindi
                </p>
              </div>
            </div>
            {/* Feature 6 */}
            <div className="col-md-4">
              <div className="qt-choose-section-feature-card">
                <div className="qt-choose-features-icon-wrapper">
                  <i className="bi bi-cash-coin" />
                </div>
                <h3 className="qt-choose-section-feature-title">
                  Flexible Rewards
                </h3>
                <p className="qt-choose-section-feature-description">
                  Multiple payout options including bank transfers and gift
                  cards for maximum flexibility
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Last Ready Section */}
      <section className="qtkaru-ready-banner-section">
        <div className="qtkaru-ready-content-wrapper">
          <h1 className="qtkaru-ready-main-heading">
            Ready to Launch Your Viral Campaign?
          </h1>
          <p className="qtkaru-ready-section-subtext">
            Get started with Qtkaru today and connect with millions of users
            ready to complete your tasks!
          </p>
          <div className="qtkaru-ready-section-button-container">
            <button className="qtkaru-ready-section-signup-button ">
              <i className="bi bi-person qtkaru-ready-section-button-icon" />
              Sign Up as User
            </button>
            <button className="qtkaru-ready-section-demo-button ">
              <i className="bi bi-display qtkaru-ready-section-button-icon" />
              Request Admin Demo
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default LastSections;
