// import React, { useState } from "react";
import "./VerticalHeader.css";
import sport from "./vHeader-img/sport.svg";
import live from "./vHeader-img/live.svg";
import slots from "./vHeader-img/slots.svg";
import casino from "./vHeader-img/casino.svg";
import fastGames from "./vHeader-img/fastgame.svg";
import games from "./vHeader-img/games.svg";
import poker from "./vHeader-img/poker.svg";
import fantasy from "./vHeader-img/fantasy.svg";
import promos from "./vHeader-img/promos.svg";

interface BoxProps {
  title: string;
  logo: string;
}
const Box: React.FC<BoxProps> = ({ title, logo }) => {
  const handleTitleChange = () => {
    // setTitle("New Title");
  };

  return (
    <div className="box" onClick={handleTitleChange}>
      <div className="box__logo">
        <img src={logo} alt="" />
      </div>
      <div className="box__title">
        <h3>{title}</h3>
      </div>
    </div>
  );
};

const VerticalHeader: React.FC = () => {
  return (
    <div className="vertical-header">
      <div className="vertical-header__Logo"></div>
      <div className="vertical-header__navbar">
        <Box title="სპორტი" logo={sport} />
        <Box title="LIVE" logo={live} />
        <Box title="სლოტები" logo={slots} />
        <Box title="კაზინო" logo={casino} />
        <Box title="თამაშები" logo={fastGames} />
        <Box title="P2P" logo={games} />
        <Box title="პოკერი" logo={poker} />
        <Box title="FANTASY" logo={fantasy} />
        <Box title="აქციები" logo={promos} />
      </div>
    </div>
  );
};

export default VerticalHeader;
