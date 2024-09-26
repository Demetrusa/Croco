import React, { useState } from "react";
import "./Footer.scss";
import BogImg from "./footer-img/bog.svg";
import TbcImg from "./footer-img/tbc.svg";
import LibertyImg from "./footer-img/liberty.svg";
import Visa from "./footer-img/visa.svg";
import Lang from "../lang/Lang";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer__header">
        <div className="footer__header-leftBox">
          <img className="bog" src={BogImg} alt="bog" />
          <img className="tbc" src={TbcImg} alt="tbc" />
          <img className="liberty" src={LibertyImg} alt="libre" />
          <img className="visa" src={Visa} alt="Visa" />
        </div>
        <Lang />
      </div>
      <div className="footer__mainContent"></div>
      <div className="footer__endingTitle"></div>
    </div>
  );
};

export default Footer;
