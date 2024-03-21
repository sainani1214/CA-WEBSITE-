import React, { useEffect, useState } from "react";
import Header from "./Header";
import AboutComponent from "./AboutComponent";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

const ContactUS = () => {
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
      <div
        style={{
          width: "82%",
          height: "auto",
          margin: "0 7%",
          display: "flex",
          marginTop: "3%",
          gap: "4%",
          flexDirection: isDesktop ? "row" : "column",
        }}
      >
        <div style={{ width: "100%", height: "auto" }}>
          <AboutComponent />
        </div>
        <div
          style={{
            width: "100%",
            height: "auto",
            marginTop: isDesktop ? "0px" : "30px",
          }}
        >
          <ContactForm />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUS;
