import React from "react";
import "./App.css";
import HorizontalHeader from "./components/HorizontalHeader/HorizontalHeader";
import VerticalHeader from "./components/VerticalHeader/VerticalHeader";
import RegistrationForm from "./components/registration/RegistrationForm";

const App: React.FC = () => {
  return (
    <div>
      <VerticalHeader />
      <div className="main-content">
        <HorizontalHeader />
        <div className="registrationPage">
          <RegistrationForm />
        </div>
        <p>Main content area</p>
      </div>
    </div>
  );
};

export default App;
