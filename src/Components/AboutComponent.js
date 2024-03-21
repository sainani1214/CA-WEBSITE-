import React, { useEffect, useState } from "react";

const AboutComponent = () => {
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
      <div>
        <span style={{ fontSize: "26px", fontWeight: 600, color: "#0C73C9" }}>
          K&M EXPERT TAX SOLUTIONS
        </span>
        <div
          style={{
            width: isDesktop ? "25%" : "70%",
            height: "6px",
            backgroundColor: "#2EA3F2",
            marginTop: "8px",
          }}
        />
      </div>

      <div
        style={{
          marginTop: "20px",
          lineHeight: "2",
          fontSize: "16px",
          textAlign: "justify",
        }}
      >
        <span
          style={{
            color: "#666666",
            fontWeight: 600,
            fontSize: "16px",
          }}
        >
          K&M EXPERT TAX SOLUTIONS
        </span>{" "}
        <span
          style={{
            color: "#666666",
            fontWeight: 500,
            fontSize: "16px",
          }}
        >
          K&M Expert Tax Solutions is a company that specializes in providing
          tax-related services. K&M offers a range of services such as tax
          preparation, tax planning, and other financial consulting services.
          Our expertise lies in helping individuals and businesses navigate
          complex tax laws and regulations to minimize tax liabilities and
          maximize financial efficiency. Additionally, we may offer guidance on
          issues like estate planning, retirement planning, and investment
          strategies, all with a focus on optimizing tax outcomes for their
          clients
        </span>
      </div>

      <div
        style={{
          marginTop: "20px",
          lineHeight: "2",
          fontSize: "16px",
          textAlign: "justify",
        }}
      >
        <span
          style={{
            color: "#666666",
            fontWeight: 500,
            fontSize: "16px",
          }}
        >
          We team of experts likely stays abreast of the latest developments in
          tax legislation to provide accurate and up-to-date advice tailored to
          each client's unique needs. Additionally, they may offer assistance
          with tax audits, resolving tax issues, and optimizing tax strategies
          to minimize liabilities and maximize savings. Overall, K&M Expert Tax
          Solutions aims to provide comprehensive and reliable tax solutions to
          their clients, ensuring compliance while optimizing financial
          outcomes.
        </span>
      </div>

      {/* <div
        style={{
          marginTop: "20px",
          lineHeight: "2",
          fontSize: "16px",
          textAlign: "justify",
        }}
      >
        <span
          style={{
            color: "#666666",
            fontWeight: 500,
            fontSize: "16px",
          }}
        >
          During the last 5 YEARS of its existence it has grown into a
          multifaceted medium sized Chartered Accountancy firm offering a broad
          spectrum of services to its diverse clientele.
        </span>
      </div> */}

      <div
        style={{
          marginTop: "20px",
          lineHeight: "2",
          fontSize: "16px",
          textAlign: "justify",
        }}
      >
        <span
          style={{
            color: "#666666",
            fontWeight: 500,
            fontSize: "16px",
          }}
        >
          The growth, is mainly attributable to our unwavering attention on the
          quality of service we offer and the emphasis we put on constant up
          gradation of our capabilities. We also owe our success to our being
          able to build over a period of time a well-knit team of highly
          competent professionals dedicated to offering the best of services to
          all our clients.
        </span>
      </div>
    </>
  );
};

export default AboutComponent;
