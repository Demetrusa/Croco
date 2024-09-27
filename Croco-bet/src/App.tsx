import React, { useState } from "react";
import "./App.css";
import HorizontalHeader from "./components/HorizontalHeader/HorizontalHeader";
import VerticalHeader from "./components/VerticalHeader/VerticalHeader";
import RegistrationForm from "./components/registration/RegistrationForm";
import Footer from "./components/footer/Footer";
const App: React.FC = () => {
  // State to manage the visibility of RegistrationForm
  const [showForm, setShowForm] = useState(false);

  // Function to handle showing the RegistrationForm
  const handleShowForm = () => {
    setShowForm(true); // Set to true to show the form
  };

  return (
    <div>
      <VerticalHeader />
      <div className="main-content">
        <HorizontalHeader onRegBtnClick={handleShowForm} />
        {showForm && <RegistrationForm />}
        <p>Main content area</p>
      </div>
      <Footer />
    </div>
  );
};

export default App;
