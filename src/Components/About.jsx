// src/components/About.js
import React, { useState } from "react";
import "./About.css";

// import missionImage from "./Images/img.png";
// import visionImage from "./Images/img2.png";
// import achievementsImage from "./Images/img4.png";

const About = () => {
  const tabs = ["Mission", "Vision", "Achievements"];
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const tabImages = {
    Mission: missionImage,
    Vision: visionImage,
    Achievements: achievementsImage,
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="about">
      <div className="row">
        <div className="column">
          <img
            className="about-img"
            src={tabImages[activeTab]}
            alt={activeTab}
          />
        </div>

        <div className="column">
          <div className="tabs">
            {tabs.map((tab) => (
              <div
                key={tab}
                className={`single-tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => handleTabClick(tab)}
              >
                <h2>{tab}</h2>
              </div>
            ))}
          </div>

          <div className="tab-content">
            {/* About Content */}
            {activeTab === "Mission" && (
              <div className="content">
                <p>
                Skill Hunter empowers careers globally, connecting talent with opportunities. We revolutionize job searches through innovation and personalized support, fostering diversity and professional growth. Our mission is to celebrate individual talents, enabling everyone to unlock their full potential and find success in their dream careers. Together, we shape a future where possibilities are limitless.
                </p>
              </div>
            )}

            {/* Skills Content */}
            {activeTab === "Vision" && (
              <div className="content">
                <p>
                  Empowering global careers. Skill Hunter envisions a future where talents are recognized, opportunities abound, and individuals thrive in fulfilling and meaningful careers.
                  Skill Hunter aims to be the premier destination for talent discovery, driving positive change in the global workforce and creating a world where everyone finds purpose and fulfillment in their dream career.
                  </p>
              </div>
            )}

            {/* Experiences Content */}
            {activeTab === "Achievements" && (
              <div className="content">
                <p>
                  <p>1. Skill Hunter has connected thousands of job seekers with their dream opportunities across various industries.</p>
                  <p>2. Our innovative platform has received accolades for its user-friendly interface and personalized job search experience.</p>
                  <p>3. Skill Hunter's commitment to diversity and inclusion has resulted in a diverse and vibrant community of talented individuals.</p>
                  <p>4. We take pride in empowering countless individuals to unlock their potential and advance their careers on a global scale.</p>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
