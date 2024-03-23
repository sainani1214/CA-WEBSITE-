import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Paper, Typography, Box, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import image1 from "../Icons/Webp.net-resizeimage-4.jpg";
import image2 from "../Icons/Webp.net-resizeimage-5.jpg";
import image3 from "../Icons/Webp.net-resizeimage-7.jpg";
import image4 from "../Icons/2.jpg";

import image from "../Icons/Accountant-Image-40.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const CarouselComponent = () => {
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
      backgroundImage: image,
      leftImage: image4,
      content: {
        title: "Looking to Start a New Business",
        description: "Your description for Slide 1.",
        buttonText: "Request a Callback",
      },
    },
    {
      backgroundImage: image,
      leftImage: image1,
      content: {
        title: "Looking to Outsource Accounting & Payroll",
        description: "Your description for Slide 2.",
        buttonText: "Request a Callback",
      },
    },
    {
      backgroundImage: image,
      leftImage: image2,
      content: {
        title: "Looking for all Statuatory Compliances Under One Roof",
        description: "Your description for Slide 2.",
        buttonText: "Request a Callback",
      },
    },
    {
      backgroundImage: image,
      leftImage: image3,
      content: {
        title: "Looking for Audit & Taxation Services",
        description: "Your description for Slide 2.",
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
          position: "relative",
          backgroundImage: `linear-gradient(rgba(3, 49, 82, 1), rgba(47, 98, 125, 0.7)), url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: isDesktop ? "510px" : "315px",
          zIndex: 99,
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
                  width: "100%",
                  height: isDesktop ? "460px" : "270px",
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
                      height: "400px",
                      borderRadius: "20px",
                      display: isDesktop ? "block" : "none",
                    }}
                  />

                  <div
                    style={{
                      flex: 1,
                      paddingLeft: isDesktop ? "40px" : "0",
                    }}
                  >
                    <Typography
                      variant="h5"
                      gutterBottom
                      style={{
                        color: "#ffffff",
                        fontWeight: isDesktop ? 700 : 600,
                        fontSize: isDesktop ? "48px" : "30px",
                        marginTop: "50px",
                        textAlign: isDesktop ? "none" : "center",
                      }}
                    >
                      {item.content.title}
                    </Typography>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{
                        borderRadius: "4px",
                        border: "1px solid #ffffff",
                        background: "none",
                        marginTop: isDesktop ? "20px" : "20px",
                        display: "flex",
                        justifyContent: isDesktop ? "none" : "center",
                        width: isDesktop ? "none" : "50%",
                        margin: isDesktop ? "none" : "0 auto",
                      }}
                    >
                      <Link
                        to="/contactus"
                        style={{ textDecoration: "none", color: "#ffffff" }}
                      >
                        {item.content.buttonText}
                      </Link>
                    </Button>
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

export default CarouselComponent;
