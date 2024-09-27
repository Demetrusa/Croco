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
      <div className="footer__mainContent">
        <div className="footer__mainContent-leftBox">
          <div className="leftBoxes">
            <h2>ჩვენს შესახებ</h2>
            <span>ზოგადი წესები</span>
            <span>სპორტის წესები</span>
            <span>სამორინის რეგლამენტი</span>
            <span>შეზღუდული ქვეყნები </span>
            <span>25+</span>
          </div>
          <div className="leftBoxes">
            <h2>გამოგვყევით</h2>
            <a>Facebook</a>
            <a>Instagram</a>
            <a>Youtube</a>
          </div>
          <div className="leftBoxes">
            <h2> საკონტაქტო ინფორმაცია </h2>
            <span>*0707</span>
            <span>(032) 2597777</span>
            <span>support@crocobet.com</span>
            <span>სალაროები</span>
          </div>
        </div>
        <div className="footer__mainContent-rightBox"></div>
      </div>
      <div className="footer__endingTitle"></div>
    </div>
  );
};

export default Footer;
