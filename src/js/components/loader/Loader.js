import React from "react";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loader">
      <div className="loader-text">Saving...</div>
      <div className="loader-background loader"></div>
    </div>
  );
};

export default Loader;
