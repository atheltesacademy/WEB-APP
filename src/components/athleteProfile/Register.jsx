import React from "react";
import "./Register.css";
import blueLogo from "../../assets/ata-logo-color.png";
import menLogo from "../../assets/profile.png";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div className="main-container">
      <div className="register-card-container">
        <img
          src={blueLogo}
          alt="Logo"
          width="60%"
          style={{ margin: "10% 5% 5% 20%" }}
        />
      </div>

      <div className="savepageAthlete">
        <form action="/" target="_blank">
          <img
            src={menLogo}
            alt="saveimg"
            className="save-img"
            width="40% "
            style={{ marginLeft: "20%" }}
          />
          <div className="row-register">
            <div className="col-75">
              <input
                type="text"
                id="name"
                name="firstname"
                placeholder="Enter Name"
                className="registerInput"
              />
            </div>
          </div>
          <div className="row-register">
            <div className="col-75">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter E-mail"
                className="registerInput"
              />
            </div>
          </div>
          <div className="row-register">
            <div className="col-75">
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Enter Phone number"
                className="registerInput"
              />
            </div>
          </div>
          <div className="row-register">
            <div className="col-75">
              <input
                type="text"
                id="dob"
                name="dob"
                placeholder="Enter D.O.B."
                className="registerInput"
              />
            </div>
          </div>
          <div className="row-register">
            <div className="col-75">
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Full Address With Pin Code"
                className="registerInput"
              />
            </div>
          </div>
          <div className="row-register">
            <div className="col-75">
              <input
                type="text"
                id="altContact"
                name="altContact"
                placeholder="Alternative Contact"
                className="registerInput"
              />
            </div>
          </div>
          <div className="row-register">
            <div className="col-75">
              <input
                type="text"
                id="altContact"
                name="altContact"
                placeholder="Details about your health or height"
                className="registerInput"
              />
            </div>
          </div>
          <div className="row-register">
            <Link>
              <button
                className="save-button"
                style={{
                  backgroundColor: "green",
                  padding: "10px",
                  width: "90px",
                  color: "white",
                  borderRadius: "10px",
                }}
              >
                Save
              </button>
            </Link>
          </div>
        </form>
        <p style={{ marginTop: "50px", marginLeft: "40px", fontSize: "small" }}>
          Copyright@2024 ATA All. right reserved
        </p>
      </div>
    </div>
  );
};

export default Register;
