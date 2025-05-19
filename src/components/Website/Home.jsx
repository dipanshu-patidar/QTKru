import React from "react";
import About from "./About";
import Features from "./Features";
import Works from "./Works";
import LastSections from "./LastSections";
import "./Website.css"
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg qtkaru-navbar px-5 py-3 qtkaru-home-navbar">
        <div className="container-fluid">
          <a className="navbar-brand qtkaru-brand" href="#">
            Qtkaru
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link qtkaru-nav-link" href="#about-section">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link qtkaru-nav-link"
                  href="#features-section"
                >
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link qtkaru-nav-link"
                  href="#how-it-works-section"
                >
                  How It Works
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link qtkaru-nav-link"
                  href="#qt-why-choose-section"
                >
                  Why Choose Us
                </a>
              </li>
            </ul>
            <div className="d-flex">
              <a href="#" className="btn qtkaru-btn-primary me-2">
                Sign Up
              </a>
              <a href="#" className="btn qtkaru-btn-demo">
                Request Demo
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="qtkaru-hero-section">
        <div className="container">
          <div className="row align-items-center pt-5">
            <div className="col-lg-6 qtkaru-hero-content text-white">
              <h1 className="mb-3 fw-bold" style={{ fontSize: "3rem" }}>
                Empower Your Audience with Qtkaru
              </h1>
              <p className="qtkaru-subheading">
                The Ultimate Viral Task Marketplace — Connect brands &amp;
                influencers with millions of users to complete simple tasks and
                earn rewards seamlessly.
              </p>
              <div className="d-flex">
                <a href="#" className="btn qtkaru-btn-primary me-3">
                  <i className="fa fa-flag me-2" />
                  Get Started
                </a>
                <a href="#" className="btn qtkaru-btn-outline">
                  <i className="fa fa-desktop me-2" />
                  Request a Demo
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="qtkaru-dashboard-preview">
                <img
                  src="https://i.ibb.co/wZC09Wyq/DIV-26.png"
                  alt="Qtkaru Dashboard Preview"
                  className="qtkaru-dashboard-img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="qtkaru-circle-overlay" />
      </section>

      {/* About Section */}
      <About />

      {/* Features Section */}
      <Features />

      {/* Works Section */}
      <Works />

      {/* LastSections */}
      <LastSections />

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default Home;
