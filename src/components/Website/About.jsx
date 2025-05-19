import React from "react";

const About = () => {
  return (
    <>
      {/* About Section */}
      <section className="py-5" id="about-section">
        <div className="container">
          <h2 className="qtkaru-about-section-title ">What is Qtkaru?</h2>
          <div className="qtkaru-about-divider" />
          <p className="qtkaru-about-section-description">
            Qtkaru is a powerful platform designed to bridge the gap between
            brands, influencers, and users by creating viral task campaigns.
            Users earn real rewards by completing simple tasks, while brands
            gain massive engagement and exposure.
          </p>
          <div className="row g-4">
            {/* For Users Card */}
            <div className="col-md-4">
              <div className="qtkaru-about-card border border-secondary">
                <div className="qtkaru-about-icon-wrapper">
                  <i className="fas fa-users qtkaru-about-icon" />
                </div>
                <h3 className="qtkaru-about-card-title">For Users</h3>
                <p className="qtkaru-about-card-text">
                  Complete simple tasks, submit proof, and earn real rewards
                  that can be withdrawn to your bank account or redeemed as gift
                  cards.
                </p>
                <a href="#" className="qtkaru-about-learn-more">
                  Learn more <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
            {/* For Brands Card */}
            <div className="col-md-4">
              <div className="qtkaru-about-card border border-secondary">
                <div className="qtkaru-about-icon-wrapper">
                  <i className="fas fa-building qtkaru-about-icon" />
                </div>
                <h3 className="qtkaru-about-card-title">For Brands</h3>
                <p className="qtkaru-about-card-text">
                  Create viral campaigns, reach millions of users, and gain
                  massive engagement and exposure for your products or services.
                </p>
                <a href="#" className="qtkaru-about-learn-more">
                  Learn more <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
            {/* For Influencers Card */}
            <div className="col-md-4">
              <div className="qtkaru-about-card border border-secondary">
                <div className="qtkaru-about-icon-wrapper">
                  <i className="fas fa-star qtkaru-about-icon" />
                </div>
                <h3 className="qtkaru-about-card-title">For Influencers</h3>
                <p className="qtkaru-about-card-text">
                  Leverage your audience, promote viral tasks, and earn
                  commissions while helping your followers earn rewards too.
                </p>
                <a href="#" className="qtkaru-about-learn-more">
                  Learn more <i className="fas fa-arrow-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
