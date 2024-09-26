import React from "react";
import "./RegBtn.css";

interface RegBtnProps {
  onClick: () => void; // Define the type for the onClick prop
}

const RegBtn: React.FC<RegBtnProps> = ({ onClick }) => {
  return (
    <div className="regBtn" onClick={onClick}>
      <p>რეგისტრაცია</p>
    </div>
  );
};

export default RegBtn;
