import React from "react";
import Header from "./Header";
import CarouselComponent from "./CarouselComponent";
import Description from "./Description";
import ServicesComponent from "./ServicesComponent";
import KnowledgeCenter from "./KnowledgeCenterComponent";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Header />
      <CarouselComponent />
      <Description />
      <ServicesComponent />
      <KnowledgeCenter />
      <Footer />
    </>
  );
};

export default Home;
