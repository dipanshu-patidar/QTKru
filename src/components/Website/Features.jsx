import React from "react";

const Features = () => {
  return (
    <>
      {/* Features Section */}
      <section className="mt-5" id="features-section">
        <div className="vk-features-section">
          <div className="container">
            <h2 className="vk-features-section-heading">Key Features</h2>
            <div className="row g-4">
              {/* User Panel */}
              <div className="col-md-6">
                <div className="vk-features-panel-container">
                  <div className="vk-user-panel-header">
                    User Panel
                    <div className="vk-features-panel-description ">
                      Powerful features for users to complete tasks and earn
                      rewards
                    </div>
                  </div>
                  <div className="vk-feature-list">
                    <div className="vk-feature-item">
                      <div className="vk-feature-icon">
                        <i className="vk-features-icon bi bi-person-circle" />
                      </div>
                      <div className="vk-feature-content">
                        <h5 className="vk-feature-title">Simple Onboarding</h5>
                        <p className="vk-feature-description">
                          Easy signup with phone verification and quick profile
                          setup
                        </p>
                      </div>
                    </div>
                    <div className="vk-feature-item">
                      <div className="vk-feature-icon">
                        <i className="vk-features-icon bi bi-list-check" />
                      </div>
                      <div className="vk-feature-content">
                        <h5 className="vk-feature-title">Task Marketplace</h5>
                        <p className="vk-feature-description">
                          Browse and start viral tasks with clear rewards &amp;
                          deadlines
                        </p>
                      </div>
                    </div>
                    <div className="vk-feature-item">
                      <div className="vk-feature-icon">
                        <i className="vk-features-icon bi bi-send" />
                      </div>
                      <div className="vk-feature-content">
                        <h5 className="vk-feature-title">
                          Submission &amp; History
                        </h5>
                        <p className="vk-feature-description">
                          Submit proof via images, videos, URLs, or text and
                          track submission status
                        </p>
                      </div>
                    </div>
                    <div className="vk-feature-item">
                      <div className="vk-feature-icon">
                        <i className="vk-features-icon bi bi-wallet2" />
                      </div>
                      <div className="vk-feature-content">
                        <h5 className="vk-feature-title">
                          Wallet &amp; Withdrawals
                        </h5>
                        <p className="vk-feature-description">
                          Earn, track balance, and withdraw via bank or gift
                          cards
                        </p>
                      </div>
                    </div>
                    <div className="vk-feature-item">
                      <div className="vk-feature-icon">
                        <i className="vk-features-icon bi bi-shield-check" />
                      </div>
                      <div className="vk-feature-content">
                        <h5 className="vk-feature-title">Secure KYC</h5>
                        <p className="vk-feature-description">
                          Upload official documents securely with OCR and
                          optional Digilocker integration
                        </p>
                      </div>
                    </div>
                    <div className="vk-feature-item">
                      <div className="vk-feature-icon">
                        <i className="vk-features-icon bi bi-translate" />
                      </div>
                      <div className="vk-feature-content">
                        <h5 className="vk-feature-title">
                          Multi-language Support
                        </h5>
                        <p className="vk-feature-description">
                          Switch between English and Hindi easily
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Admin Panel */}
              <div className="col-md-6">
                <div className="vk-features-panel-container">
                  <div className="vk-admin-panel-header">
                    Admin Panel
                    <div className="vk-features-panel-description ">
                      Powerful tools for brands to create and manage viral
                      campaigns
                    </div>
                  </div>
                  <div className="vk-feature-list">
                    <div className="vk-feature-item">
                      <div className="vk-feature-icon">
                        <i className="vk-features-icon bi bi-speedometer2" />
                      </div>
                      <div className="vk-feature-content">
                        <h5 className="vk-feature-title">Powerful Dashboard</h5>
                        <p className="vk-feature-description">
                          Real-time stats on users, active tasks, and wallet
                          balances
                        </p>
                      </div>
                    </div>
                    <div className="vk-feature-item">
                      <div className="vk-feature-icon">
                        <i className="vk-features-icon bi bi-kanban" />
                      </div>
                      <div className="vk-feature-content">
                        <h5 className="vk-feature-title">Task Management</h5>
                        <p className="vk-feature-description">
                          Create and manage task campaigns with flexible proof
                          types and languages
                        </p>
                      </div>
                    </div>
                    <div className="vk-feature-item">
                      <div className="vk-feature-icon">
                        <i className="vk-features-icon bi bi-check2-circle" />
                      </div>
                      <div className="vk-feature-content">
                        <h5 className="vk-feature-title">Submission Reviews</h5>
                        <p className="vk-feature-description">
                          Approve or reject user submissions quickly with rich
                          media previews
                        </p>
                      </div>
                    </div>
                    <div className="vk-feature-item">
                      <div className="vk-feature-icon">
                        <i className="vk-features-icon bi bi-people" />
                      </div>
                      <div className="vk-feature-content">
                        <h5 className="vk-feature-title">User Management</h5>
                        <p className="vk-feature-description">
                          Monitor users, update profiles, and block/unblock as
                          needed
                        </p>
                      </div>
                    </div>
                    <div className="vk-feature-item">
                      <div className="vk-feature-icon">
                        <i className="vk-features-icon bi bi-cash-coin" />
                      </div>
                      <div className="vk-feature-content">
                        <h5 className="vk-feature-title">
                          Wallet &amp; Payouts
                        </h5>
                        <p className="vk-feature-description">
                          Handle manual withdrawals and send giftcards via API
                          or email
                        </p>
                      </div>
                    </div>
                    <div className="vk-feature-item">
                      <div className="vk-feature-icon">
                        <i className="vk-features-icon bi bi-bar-chart" />
                      </div>
                      <div className="vk-feature-content">
                        <h5 className="vk-feature-title">Detailed Reports</h5>
                        <p className="vk-feature-description">
                          Analyze campaign success, leaderboards, and export
                          CSVs for insights
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
