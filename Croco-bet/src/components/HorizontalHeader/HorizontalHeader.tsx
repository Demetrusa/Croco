import React from "react";
import "./HorizontalHeader.css";
import VerticalHeader from "../VerticalHeader/VerticalHeader";

const HorizontalHeader: React.FC = () => {
  return (
    <div className="horizontal-header">
      <VerticalHeader />
    </div>
  );
};

export default HorizontalHeader;
