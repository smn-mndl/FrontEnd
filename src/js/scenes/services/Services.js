import React from "react";
import { SERVICES_CONFIG } from "./services-config";
import "./Services.scss";

const Services = () => {
  const createServicesTiles = () => {
    return SERVICES_CONFIG.map((each) => {
      return (
        <div className="services-tiles">
          <div className="services-tile-icon">{each.icon}</div>
          <div className="services-tile-header">{each.header}</div>
          <div className="services-tile-desc">{each.disc}</div>
        </div>
      );
    });
  };
  return (
    <div className="services-cont">
      <h1>WHAT DO I DO</h1>
      <div>{createServicesTiles()}</div>
    </div>
  );
};

export default Services;
