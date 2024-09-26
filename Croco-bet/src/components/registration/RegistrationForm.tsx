import React, { useState } from "react";
import "./RegistrationForm.css";

const RegistrationForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [userSurname, setUserSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [country, setCountry] = useState("");
  const [citizenship, setCitizenship] = useState("");
  const [personalPhone, personalNumber] = useState("");
  const [georgianPhone, setGeorgianPhone] = useState("");
  const [birthDate, setBirthDate] = useState({ day: "", month: "", year: "" });
  const [error, setError] = useState("");
  const [consentDataProcessing, setConsentDataProcessing] = useState(false);
  const [certifiedAge, setCertifiedAge] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);

  const passwordRequirements = {
    length: password.length >= 6 && password.length <= 20,
    upperLower: /(?=.*[a-z])(?=.*[A-Z])/.test(password),
    digit: /\d/.test(password),
    notMatchUsername: password !== username,
  };

  // Boolean to check if all password requirements are met
  const allRequirementsMet =
    passwordRequirements.length &&
    passwordRequirements.upperLower &&
    passwordRequirements.digit &&
    passwordRequirements.notMatchUsername;

  const countries: string[] = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "India",
    "China",
    "Brazil",
    "Japan",
  ];

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (
      !username ||
      !email ||
      !password ||
      !confirmPassword ||
      !country ||
      !citizenship ||
      !personalPhone ||
      !georgianPhone ||
      !birthDate.day ||
      !birthDate.month ||
      !birthDate.year
    ) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!allRequirementsMet) {
      setError("Please meet all password requirements.");
      return;
    }

    // Here you can handle registration logic (e.g., send data to API)
    console.log("Registered:", {
      username,
      email,
      password,
      country,
      citizenship,
      personalPhone,
      georgianPhone,
      birthDate,
    });

    // Reset form
    setUsername("");
    setUserSurname("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setCountry("");
    setCitizenship("");
    personalNumber("");
    setGeorgianPhone("");
    setBirthDate({ day: "", month: "", year: "" });
    setError("");
    setConsentDataProcessing(false);
    setCertifiedAge(false);
    setTermsAccepted(false);
  };

  return (
    <div className="regForm">
      <h2>Registration Form</h2>
      <h3>პირადი ინფომაცია</h3>
      {error && <p style={{ color: "black" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        {/* User Info */}
        <div>
          <label htmlFor="username"></label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="userSurname"></label>
          <input
            type="text"
            id="userSurname"
            value={userSurname}
            placeholder="Surname"
            onChange={(e) => setUserSurname(e.target.value)}
            required
          />
        </div>

        {/* Phone Numbers */}
        <div>
          <label htmlFor="georgianPhone"></label>
          <input
            type="tel"
            id="georgianPhone"
            value={georgianPhone}
            placeholder="Georgian Phone Number (+995)"
            onChange={(e) => setGeorgianPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="personalNumber"></label>
          <input
            className="Pass-portN"
            type="number"
            id="personalNumber"
            value={personalPhone}
            placeholder="Personal Number (Passport)"
            inputMode="numeric"
            onChange={(e) => personalNumber(e.target.value)}
            required
          />
        </div>

        {/* Country and Citizenship */}
        <div className="country-input">
          <div>
            <label htmlFor="country"></label>
            <select
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            >
              <option value="">Select Country</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="citizenship"></label>
            <select
              id="citizenship"
              value={citizenship}
              onChange={(e) => setCitizenship(e.target.value)}
              required
            >
              <option value="">Select Citizenship</option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Date of Birth */}
        <div>
          <label></label>
          <div className="birth-Form">
            <select
              value={birthDate.day}
              onChange={(e) =>
                setBirthDate({ ...birthDate, day: e.target.value })
              }
              required
            >
              <option value="">Day</option>
              {[...Array(31)].map((_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select
              value={birthDate.month}
              onChange={(e) =>
                setBirthDate({ ...birthDate, month: e.target.value })
              }
              required
            >
              <option value="">Month</option>
              {[...Array(12)].map((_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select
              value={birthDate.year}
              onChange={(e) =>
                setBirthDate({ ...birthDate, year: e.target.value })
              }
              required
            >
              <option value="">Year</option>
              {[...Array(100)].map((_, i) => {
                const year = new Date().getFullYear() - i;
                return (
                  <option key={i} value={year}>
                    {year}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        {/* Account Details */}
        <div>
          <label htmlFor="password"></label>
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="confirmPassword"></label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        {/* {email requiments} */}

        <div>
          <label htmlFor="email"></label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password Requirements */}
        <div className="requimentsPASS">
          <p
            style={{ color: passwordRequirements.length ? "green" : "gray" }}
            className="req-P"
          >
            6-20 symbols
          </p>
          <p
            className="req-P"
            style={{
              color: passwordRequirements.upperLower ? "green" : "gray",
            }}
          >
            Upper and lower-case letters (for example: Aa)
          </p>
          <p
            className="req-P"
            style={{ color: passwordRequirements.digit ? "green" : "gray" }}
          >
            Digit or number (for example: 1 or 123)
          </p>
          <p
            className="req-P"
            style={{
              color: passwordRequirements.notMatchUsername ? "green" : "gray",
            }}
          >
            The password must not match the username
          </p>
        </div>

        {/* Consent Checkboxes */}
        <div className="form-checkboxes">
          <div>
            <label>
              <input
                type="checkbox"
                checked={consentDataProcessing}
                onChange={() =>
                  setConsentDataProcessing(!consentDataProcessing)
                }
              />
              <p>
                I CONSENT TO THE PROCESSING OF MY PERSONAL DATA FOR DIRECT
                MARKETING PURPOSES (CONSENT CAN BE WITHDRAWN AT ANY TIME NO SMS:
                94403)
              </p>
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={certifiedAge}
                onChange={() => setCertifiedAge(!certifiedAge)}
              />
              <p>I certify that I am 25 years of age or older</p>
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
              />
              <p>
                By creating a user you confirm that you have read and agree to
                our
                <a href="#">Terms and Conditions</a>.
              </p>
            </label>
          </div>
        </div>

        <button type="submit" disabled={!allRequirementsMet}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
