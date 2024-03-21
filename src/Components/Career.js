import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Career = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <Header />
      <div style={{ margin: "20px" }}>
        <span style={{ fontSize: "26px", fontWeight: 600, color: "#0C73C9" }}>
          Why Work With Us?
        </span>
        <div
          style={{
            width: isDesktop ? "12%" : "70%",
            height: "6px",
            backgroundColor: "#2EA3F2",
            marginTop: "8px",
          }}
        />
      </div>

      <div style={{ textAlign: "justify" }}>
        <div
          style={{
            marginLeft: "20px",
            marginBottom: "16px",
            marginRight: "20px",
          }}
        >
          <span style={{ color: "#0C73C9", fontSize: "16px", fontWeight: 500 }}>
            Opportunities for Growth :
          </span>
          <span style={{ fontWeight: 400 }}>
            {" "}
            We offer opportunities for career advancement and professional
            development. Whether you're starting your career or seeking new
            challenges, we provide a supportive environment for growth.
          </span>
        </div>
        <div style={{ marginLeft: "20px", marginBottom: "16px",marginRight: "20px", }}>
          <span style={{ color: "#0C73C9", fontSize: "16px", fontWeight: 500 }}>
            Client Exposure :
          </span>
          <span style={{ fontWeight: 400 }}>
            {" "}
            Work with a diverse clientele ranging from individuals to businesses
            across various industries. Gain valuable experience and exposure to
            different types of clients and their unique needs.
          </span>
        </div>
        <div style={{ marginLeft: "20px", marginBottom: "16px",marginRight: "20px", }}>
          <span style={{ color: "#0C73C9", fontSize: "16px", fontWeight: 500 }}>
            Expert Guidance :
          </span>
          <span style={{ fontWeight: 400 }}>
            {" "}
            Benefit from the guidance of seasoned professionals who are experts
            in their fields. Learn from their wealth of knowledge and experience
            as you navigate through challenging projects.{" "}
          </span>
        </div>
        <div style={{ marginLeft: "20px", marginBottom: "16px",marginRight: "20px", }}>
          <span style={{ color: "#0C73C9", fontSize: "16px", fontWeight: 500 }}>
            Collaborative Culture :
          </span>
          <span style={{ fontWeight: 400 }}>
            {" "}
            Our firm fosters a collaborative and supportive culture where
            teamwork is valued. Collaborate with colleagues who share your
            dedication to excellence and contribute to meaningful projects.{" "}
          </span>
        </div>
        <div style={{ marginLeft: "20px", marginBottom: "16px",marginRight: "20px", }}>
          <span style={{ color: "#0C73C9", fontSize: "16px", fontWeight: 500 }}>
            Innovative Approach :
          </span>
          <span style={{ fontWeight: 400 }}>
            {" "}
            We embrace innovation and encourage our team members to think
            creatively. We're constantly exploring new technologies and
            methodologies to improve our services and enhance client
            satisfaction.
          </span>
        </div>
        <div style={{ marginLeft: "20px", marginBottom: "16px",marginRight: "20px", }}>
          <span style={{ color: "#0C73C9", fontSize: "16px", fontWeight: 500 }}>
            Mentorship and Guidance :
          </span>
          <span style={{ fontWeight: 400 }}>
            {" "}
            Mentorship is a cornerstone of our culture. New hires receive
            guidance and support from experienced mentors who are dedicated to
            helping them succeed. Our collaborative environment fosters
            knowledge-sharing and growth at all levels.
          </span>
        </div>
        <div style={{ marginLeft: "20px", marginBottom: "16px",marginRight: "20px", }}>
          <span style={{ color: "#0C73C9", fontSize: "16px", fontWeight: 500 }}>
            Community Involvement :
          </span>
          <span style={{ fontWeight: 400 }}>
            {" "}
            We believe in giving back to the community and actively participate
            in various philanthropic initiatives. As a member of our team,
            you'll have opportunities to contribute to meaningful causes and
            make a positive difference in the world.{" "}
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Career;
