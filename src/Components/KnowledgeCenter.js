import React from "react";
import Header from "./Header";
import KnowledgeCenterComponent from "./KnowledgeCenterComponent";
import Footer from "./Footer";

const KnowledgeCenter = () => {
  return (
    <>
      <Header />
      <div style={{ marginTop: "40px" }}>
        <KnowledgeCenterComponent />
      </div>
      <Footer />
    </>
  );
};

export default KnowledgeCenter;
