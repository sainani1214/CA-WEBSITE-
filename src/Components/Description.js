import React, { useEffect, useState } from "react";

const Description = () => {
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
      <div
        style={{
          width: "80%",
          margin: "40px 10%",
        }}
      >
        <span
          style={{
            fontWeight: 500,
            fontSize: "26px",
          }}
        >
          WELCOME TO K&M EXPERT TAX SOLUTIONS
        </span>
        <div
          style={{
            width: isDesktop ? "30%" : "65%",
            height: "6px",
            backgroundColor: "#2EA3F2",
            marginTop: "12px",
          }}
        />

        <div
          style={{
            marginTop: "20px",
            lineHeight: "2",
            fontSize: "16px",
            textAlign: "justify",
          }}
        >
          <span style={{ color: "#666666", fontWeight: 600 }}>
            K&M EXPERT TAX SOLUTIONS
          </span>
          <span style={{ color: "#666666", fontWeight: 500 }}>
            {" "}
            is a company that specializes in providing tax-related services. K&M
            offers a range of services such as tax preparation, tax planning,
            and other financial consulting services. Our expertise lies in
            helping individuals and businesses navigate complex tax laws and
            regulations to minimize tax liabilities and maximize financial
            efficiency. Additionally, we may offer guidance on issues like
            estate planning, retirement planning, and investment strategies, all
            with a focus on optimizing tax outcomes for their clients. We team
            of experts likely stays abreast of the latest developments in tax
            legislation to provide accurate and up-to-date advice tailored to
            each client's unique needs. Additionally, they may offer assistance
            with tax audits, resolving tax issues, and optimizing tax strategies
            to minimize liabilities and maximize savings. Overall, K&M Expert
            Tax Solutions aims to provide comprehensive and reliable tax
            solutions to their clients, ensuring compliance while optimizing
            financial outcomes.
          </span>
        </div>
        <button
          style={{
            padding: "8px 18px",
            backgroundColor: "#ffffff",
            borderRadius: "2px",
            marginTop: "12px",
            color: "#2EA3F2",
            border: "2px solid #2EA3F2",
            fontSize: "14px",
          }}
        >
          Know more
        </button>
      </div>
    </>
  );
};

export default Description;
