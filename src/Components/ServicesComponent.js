import React, { useEffect, useState } from "react";
import startUpImage from "../Icons/5027875_business_launch_rocket_startup_icon.png";
import accountingImage from "../Icons/3213275_accounting_bank_banking_finance_office_icon.png";
import auditImage from "../Icons/9071166_audit_icon.png";
import taxImage from "../Icons/10934649_tax_sales_bill_business_payment_icon.png";
import gstImage from "../Icons/4937442_deposit_financial_government_investment_payday_icon.png";
import businessImage from "../Icons/5027868_business_businessman_investor_management_icon.png";
import professionalTaxImage from "../Icons/10313043_taxday_tax report_financial_business_online_icon.png";
import licenseServices from "../Icons/10313040_calculator_taxday_tax report_accounting_calculation_icon.png";
import msmeServices from "../Icons/5452485_and_bank_banking_buildings_business_icon.png";
import passportImage from "../Icons/5946967_avoid_foreign country_oversea_passport_touring_icon.png";
import epfImage from "../Icons/9320253_doctor_help_interaction_untact_icon.png";
import usTax from "../Icons/10313041_tax report_deadline_online_business_finance_icon.png";
import societyImage from "../Icons/6067606_face_group_masked_people_icon.png";
import tradeImage from "../Icons/10803133_uptrend_graph_trader_cryptocurrency_bitcoin_icon.png";
import { Link } from "react-router-dom";

const ServicesComponent = () => {
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

  const ChevronRightSvg = () => (
    <svg
      enableBackground="new 0 0 32 32"
      height={isDesktop ? "35" : "35"}
      version="1.1"
      viewBox="0 0 32 32"
      width={isDesktop ? "40" : "35"}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ strokeWidth: "1", color: "#ffffff", cursor: "pointer" }}
    >
      <path
        id="Chevron_Right"
        d="M21.698,15.286l-9.002-8.999  c-0.395-0.394-1.035-0.394-1.431,0c-0.395,0.394-0.395,1.034,0,1.428L19.553,16l-8.287,8.285c-0.395,0.394-0.395,1.034,0,1.429  c0.395,0.394,1.036,0.394,1.431,0l9.002-8.999C22.088,16.325,22.088,15.675,21.698,15.286z"
        fill="#fff"
        fillRule="evenodd"
        stroke="currentColor"
      />
    </svg>
  );

  const servicesData = [
    {
      heading: "Start up Services",
      description:
        "We have been serving hundreds of clients ranging from individuals, firms, LLPs and companies. Practically we have worked on all forms of entities and thus gained sufficient working knowledge.",
      button: "Start up Registrations",
      image: startUpImage,
    },
    {
      heading: "Accounting & Payroll",
      description:
        "Hiring a full-time accountant and HR personnel is an expensive proposition for small companies. In order to meet their requirements, we provide accounting, payroll and compliance services.",
      button: "Accounting & Payroll",
      image: accountingImage,
    },
    {
      heading: "Audit & ROC Services",
      description:
        "Audit is made mandatory under various statutes like Companies Act, Income Tax, GST Act etc., Apart from these mandatory statutory Audits, we also do management audits, revenue audits, IS Audits etc.",
      button: "Audit & Secretarial Services",
      image: auditImage,
    },
    {
      heading: "Income Tax Services",
      description:
        "We provide quality Income tax consultancy and compliance services with effective tax strategies. We provide income tax advice to corporarte as well as non-corproate clients.",
      button: "Income Tax Services",
      image: taxImage,
    },
    {
      heading: "GST Services",
      description:
        "The commencement of GST regime in India brought with itself the concept of GST return- a document in which the taxpayer under the GST need to file the details of his/her income to the tax authorities.",
      button: "GST Services",
      image: gstImage,
    },
    {
      heading: "Business Advisory",
      description:
        "We provide various kinds of business advisory services like Management Advisory, Share Valuation, business valuation, Due Diligence, Mergers  & Aquisitions etc.",
      button: "Business Advisory Services",
      image: businessImage,
    },
    {
      heading: "Professional Tax Services",
      description:
        "We offer tailored tax planning and compliance solutions for businesses and individuals, navigating complex regulations to minimize liabilities and maximize financial efficiencies, ensuring optimal bottom-line outcomes.",
      button: "Professional Tax Services",
      image: professionalTaxImage,
    },
    {
      heading: "Import & Export Services",
      description:
        "We specialize in import/export license services, ensuring regulatory compliance for smooth cross-border transactions. From applications to regulatory adherence, We streamline international trade operations for businesses.",
      button: "Import & Export License Services",
      image: licenseServices,
    },
    {
      heading: "MSME Services",
      description:
        "We specialize in MSME registration services, facilitating smooth processes for businesses to obtain recognition and leverage benefits offered to micro, small, and medium enterprises.",
      button: "MSME Registration Services",
      image: msmeServices,
    },
    {
      heading: "Trademark Services",
      description:
        "We specialize in trademark registration services, guiding businesses through the process to secure legal protection for their brands. Our expertise in comprehensive support, safeguarding intellectual property rights effectively.",
      button: "Trademark Registration Services",
      image: tradeImage,
    },
    {
      heading: "Society Services",
      description:
        "We specialize in society and trust registration services, providing expert guidance for seamless establishment and legal compliance. efficient registration processes, enabling organizations to fulfill their philanthropic missions effectively.",
      button: "Society Registration Services",
      image: societyImage,
    },
    {
      heading: "Passport & Visa Services",
      description:
        "We specialize in passport and visa report services, delivering thorough and accurate documentation to facilitate smooth international travel for our clients. we ensure timely processing and compliance with all necessary requirements. ",
      button: "Passport & Visa Services",
      image: passportImage,
    },
    {
      heading: "EPFO and ESIC Services",
      description:
        "We specialize in EPFO and ESIC services, assisting businesses in managing their employee provident fund and employee state insurance obligations efficiently. we provide timely filings, and seamless administration, enabling businesses to focus on their core operations.",
      button: "EPFO and ESIC Services",
      image: epfImage,
    },
    {
      heading: "US Taxation Services",
      description:
        "We specialize in US taxation services, offering comprehensive support to individuals and businesses navigating the complexities of the US tax system. With our expertise, and also IRS regulations, optimize tax strategies, and provide tailored solutions.",
      button: "US Taxation Services",
      image: usTax,
    },
  ];

  const bgColors = [
    "#6F7ABA",
    "#68AB9F",
    "#7CA4CA",
    "#429893",
    "#7690B9",
    "#5CA5A4",
  ];

  const bgSmallColors = [
    "#323D9F",
    "#006D4E",
    "#145B9E",
    "#017C7C",
    "#3A5D9D",
    "#2C8180",
  ];

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "auto",
          backgroundColor: "#F4F4F4",
          padding: "20px 0px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <span
            style={{
              fontWeight: 500,
              fontSize: "28px",
              textAlign: "center",
              padding: "20px 0px",
            }}
          >
            Our Services
          </span>
        </div>
        <div
          style={{
            width: "80%",
            margin: "14px 10% 20px 10%",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "50px",
            height: "auto",
          }}
        >
          {servicesData.map((data, index) => (
            <div
              key={index}
              style={{
                width: "350px",
                backgroundColor: bgColors[index % bgColors.length],
                position: "relative",
                height: "454px",
                marginLeft: isDesktop ? "0px" : "-18px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "38px",
                  width: "150px",
                  height: "120px",
                }}
              >
                <img
                  src={data.image}
                  style={{ width: "150px", height: "120px" }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                <span
                  style={{
                    fontSize: "28px",
                    fontWeight: 500,
                    color: "#ffffff",
                  }}
                >
                  {data.heading}
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  textAlign: "justify",
                  padding: "10px 20px",
                }}
              >
                <span
                  style={{
                    fontSize: "18px",
                    fontWeight: 400,
                    color: "#ffffff",
                  }}
                >
                  {data.description}
                </span>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "50px",
                  backgroundColor: bgSmallColors[index % bgSmallColors.length],
                  position: "absolute",
                  bottom: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: "18px",
                    marginLeft: "10px",
                  }}
                >
                  {data.button}
                </span>
                <div>
                  <Link to="/contactus">
                    <ChevronRightSvg />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServicesComponent;
