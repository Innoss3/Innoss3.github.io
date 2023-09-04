import React from "react";
import "./header.css";
import CTA from "./CTA";

const header = () => {
  return (
    <header>
      <div className="container header_container">
        <h1>Bienvenue</h1>
        <h4>Je suis</h4>
        <h1>ID DIAKIESE</h1>
        <h4 className="text-light">Computer scientist Engineer</h4>
        <CTA />
      </div>
    </header>
  );
};

export default header;
