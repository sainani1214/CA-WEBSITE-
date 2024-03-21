import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Paper, Typography, Box, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import image1 from "../Icons/Webp.net-resizeimage-4.jpg";
import image2 from "../Icons/Webp.net-resizeimage-5.jpg";
import image3 from "../Icons/Webp.net-resizeimage-7.jpg";
import image4 from "../Icons/2.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const KnowledgeCenterComponent = () => {
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
      height={isDesktop ? "45" : "35"}
      version="1.1"
      viewBox="0 0 32 32"
      width={isDesktop ? "45" : "35"}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{ strokeWidth: "1" }}
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

  const carouselItems = [
    {
      leftImage: image1,
      content: {
        title:
          " What is a Small Company & What Exemptions are available for Small Company under Companies Act",
        description:
          "   Amended Definition of Small Company under Companies Act, 2013. The details of Benefits available for Small Companies with respect to some relaxations on compliance burdens under the Companies Act.",
      },
    },
    {
      leftImage: image2,
      content: {
        title: "SWACHH BHARAT CESS",
        description:
          "A Cess which shall be levied and collected in accordance with the provisions of Chapter VI of the Finance Act, 2015 called Swachh Bharat Cess, as service tax on all the taxable services at the rate of 0.5% of the value of taxable service. SBC is...",
      },
    },
    {
      leftImage: image3,
      content: {
        title: "Exemptions to Private Companies wef 05.06.2015",
        description:
          "MCA had issued notification vide GSR 464(E) dated on June 05, 2015, there are some confusion over on the notification, regarding applicability of particular sections and filing of forms with MCA in respect of Board Resolution and Shareholder Resolutions U/s 117...",
      },
    },
    {
      leftImage: image4,
      content: {
        title: "Section 185- Loan to Directors under Companies Act,2013",
        description:
          "185 (1) Save as otherwise provided in this Act, no company shall, directly or indirectly, advance any loan, including any loan represented by a book debt, to any of its directors or to any other person in whom the director is interested or give any guarantee or...",
        buttonText: "Request a Callback",
      },
    },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <ChevronRightSvg />,
    prevArrow: <ChevronRightSvg />,
  };

  const CustomArrow = ({ direction, onClick }) => (
    <Button
      onClick={onClick}
      style={{
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        background: "transparent",
        border: "none",
        outline: "none",
        cursor: "pointer",
        color: "#fff",
        fontSize: "24px",
        zIndex: 2,
        ...(direction === "left"
          ? { left: isDesktop ? "-10px" : "-20px" }
          : { right: isDesktop ? "-10px" : "-18px" }),
      }}
    >
      {direction === "left" ? (
        <svg
          fill="none"
          height={isDesktop ? "50" : "40"}
          stroke-width="2"
          viewBox="0 0 24 24"
          width={isDesktop ? "50" : "40"}
          xmlns="http://www.w3.org/2000/svg"
          color="#fff"
        >
          <path
            d="M15 6L9 12L15 18"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ) : (
        <ChevronRightSvg />
      )}
    </Button>
  );

  return (
    <>
      <div
        style={{
          overflow: "hidden",
          width: "100%",
          height: isDesktop ? "360px" : "350px",
          backgroundColor: "#2072A9",
        }}
      >
        <Slider
          {...sliderSettings}
          nextArrow={<CustomArrow direction="right" />}
          prevArrow={<CustomArrow direction="left" />}
        >
          {carouselItems.map((item, index) => (
            <div key={index}>
              <div
                style={{
                  width: "80%",
                  height: isDesktop ? "320px" : "310px",
                  margin: isDesktop ? "0 11% 0 9%" : "0 10%",
                  backgroundColor: "#2072A9",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: isDesktop ? "flex-start" : "center",
                    justifyContent: isDesktop ? "space-between" : "center",
                    padding: isDesktop ? "40px 0px 20px 60px" : "20px",
                  }}
                >
                  <img
                    src={item.leftImage}
                    alt="image"
                    style={{
                      width: "50%",
                      height: "260px",
                      borderRadius: "20px",
                      display: isDesktop ? "block" : "none",
                    }}
                  />

                  <div
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      paddingLeft: isDesktop ? "40px" : "0",
                    }}
                  >
                    <Typography
                      variant="h5"
                      gutterBottom
                      style={{
                        color: "#ffffff",
                        fontWeight: isDesktop ? 700 : 600,
                        fontSize: isDesktop ? "28px" : "18px",
                        marginTop: "20px",
                        textAlign: isDesktop ? "none" : "center",
                      }}
                    >
                      {item.content.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      style={{
                        color: "#ffffff",
                        fontSize: "16px",
                        marginTop: "20px",
                      }}
                    >
                      {item.content.description}
                    </Typography>
                  </div>
                </Box>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default KnowledgeCenterComponent;
