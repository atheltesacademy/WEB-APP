import React, { useState } from "react";
import "./Style.css";

const AthleticsAcademy = () => {
  const [formType, setFormType] = useState(null);

  const handleButtonClick = (type) => {
    setFormType(type);
  };

  return (
    <div>
      <h1 id="h1">Welcome to Athletics Academy</h1>
      <p>Please select a role to join:</p>
      <button onClick={() => handleButtonClick("coach")}>
        Join as a Coach
      </button>
      <button onClick={() => handleButtonClick("athlete")}>
        Join as an Athlete
      </button>
      {formType && (
        <div>
          <h2>Join as {formType === "coach" ? "a Coach" : "an Athlete"}</h2>
          <form action={`/${formType}_signup`} method="post">
            <label htmlFor="name">Name:</label>
            <br />
            <input type="text" id="name" name="name" />
            <br />
            <label htmlFor="email">Email:</label>
            <br />
            <input type="email" id="email" name="email" />
            <br />
            <label htmlFor="sportsDropdown">Choose a sport:</label>
            <br />
            <select id="sportsDropdown" name="sport" required>
              <option value="" disabled selected>
                Select a sport
              </option>
              <option value="cricket">Cricket</option>
              <option value="football">Football</option>
              <option value="hockey">Hockey</option>
              <option value="basketball">Basketball</option>
              <optgroup label="Athletics">
                <option value="running">Running</option>
                <option value="long-jump">Long Jump</option>
                <option value="short-jump">Short Jump</option>
                <option value="hurdle-race">Hurdle Race</option>
                <option value="javelin-throw">Javelin Throw</option>
              </optgroup>
              <option value="kabaddi">Kabaddi</option>
              <option value="badminton">Badminton</option>
              <option value="volleyball">Volleyball</option>
            </select>
            <br />
            {formType === "coach" && (
              <div>
                <label htmlFor="experience">Years of Experience:</label>
                <br />
                <input type="number" id="experience" name="experience" />
                <br />
              </div>
            )}
            <button onClick={() => handleButtonClick("submit")}>Submit</button>
          </form>
        </div>
      )}
      <h3 style={{backgroundcolor: "#ffffff" }}>
        Already have an account?{" "}
        <a href="/login" style={{ color: "yellow" }}>
          Log in
        </a>
      </h3>
    </div>
  );
};

export default AthleticsAcademy;
