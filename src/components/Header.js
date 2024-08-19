import { useState } from "react";
import { Link } from "react-router-dom";
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
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About Us</li>
          </Link>
          <Link to="/contact">
            <li>Contact Us</li>
          </Link>
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
