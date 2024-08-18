import { useState, useEffect } from "react";
import { LOGO_URL } from "../utils/constants";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  // console.log("Header rendered.");
  // useEffect(() => {
  //   console.log("useEffect hook called.");
  // }, [btnName]);

  return (
    <section className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName === "Logout" ? setBtnName("Login") : setBtnName("Logout");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </section>
  );
};

export default Header;
