import React from "react";
import "./App.css";
import HorizontalHeader from "./components/HorizontalHeader/HorizontalHeader";
import VerticalHeader from "./components/VerticalHeader/VerticalHeader";

const App: React.FC = () => {
  return (
    <div>
      <VerticalHeader />
      <div className="main-content">
        <HorizontalHeader />
        <p>Main content area</p>
      </div>
    </div>
  );
};

export default App;
