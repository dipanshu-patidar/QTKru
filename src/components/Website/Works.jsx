import React from "react";

const Works = () => {
  return (
    <>
      {/* How It Works Section */}
      <section className="vkh-how-it-works-section" id="how-it-works-section">
        <div className="container">
          <h2 className="vkh-works-section-title">How It Works</h2>
          <div className="vkh-works-title-underline" />
          <p className="vkh-works-section-subtitle">
            A simple step-by-step process to connect brands with users and
            create viral campaigns
          </p>
          <div className="vkh-works-process-container">
            <div className="vkh-works-connector" />
            <div className="row g-4">
              {/* Step 1 */}
              <div className="col-md-2">
                <div className="vkh-works-step-card">
                  <div className="vkh-works-step-number">1</div>
                  <div className="vkh-works-step-icon">
                    <i className="bi bi-card-checklist" />
                  </div>
                  <h4 className="vkh-works-step-title">CreateTasks</h4>
                  <p className="vkh-works-step-description">
                    Brands create viral tasks on Okaru AdminPanel
                  </p>
                </div>
              </div>
              {/* Step 2 */}
              <div className="col-md-2">
                <div className="vkh-works-step-card">
                  <div className="vkh-works-step-number">2</div>
                  <div className="vkh-works-step-icon">
                    <i className="bi bi-search" />
                  </div>
                  <h4 className="vkh-works-step-title">BrowseTasks</h4>
                  <p className="vkh-works-step-description">
                    Users browse and start tasks on the Okaru App or Web
                  </p>
                </div>
              </div>
              {/* Step 3 */}
              <div className="col-md-2">
                <div className="vkh-works-step-card">
                  <div className="vkh-works-step-number">3</div>
                  <div className="vkh-works-step-icon">
                    <i className="bi bi-send" />
                  </div>
                  <h4 className="vkh-works-step-title">SubmitProof</h4>
                  <p className="vkh-works-step-description">
                    Users submit proof of task completion
                  </p>
                </div>
              </div>
              {/* Step 4 */}
              <div className="col-md-2">
                <div className="vkh-works-step-card">
                  <div className="vkh-works-step-number">4</div>
                  <div className="vkh-works-step-icon">
                    <i className="bi bi-check-circle" />
                  </div>
                  <h4 className="vkh-works-step-title">Review</h4>
                  <p className="vkh-works-step-description">
                    Admins verify and approve submissions
                  </p>
                </div>
              </div>
              {/* Step 5 */}
              <div className="col-md-2">
                <div className="vkh-works-step-card">
                  <div className="vkh-works-step-number">5</div>
                  <div className="vkh-works-step-icon">
                    <i className="bi bi-coin" />
                  </div>
                  <h4 className="vkh-works-step-title">EarnRewards</h4>
                  <p className="vkh-works-step-description">
                    Users earn rewards directly in their wallet
                  </p>
                </div>
              </div>
              {/* Step 6 */}
              <div className="col-md-2">
                <div className="vkh-works-step-card">
                  <div className="vkh-works-step-number">6</div>
                  <div className="vkh-works-step-icon">
                    <i className="bi bi-cash" />
                  </div>
                  <h4 className="vkh-works-step-title">Withdraw</h4>
                  <p className="vkh-works-step-description">
                    Users withdraw earnings securely via bank transfer or gift
                    cards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Works;
