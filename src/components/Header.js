import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  return (
    <section className="flex justify-between bg-pink-100 shadow-lg sm:bg-yellow-200 lg:bg-green-200">
      <Link to="/">
        <div className="logo-container">
          <img className="w-24" src={LOGO_URL} />
        </div>
      </Link>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online status: {onlineStatus ? "✅" : "🔴"}</li>
          <Link to="/">
            <li className="px-4">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-4">About Us</li>
          </Link>
          <Link to="/contact">
            <li className="px-4">Contact Us</li>
          </Link>
          <Link to="/grocery">
            <li className="px-4">Grocery</li>
          </Link>
          <li className="px-4">Cart</li>
          <button
            className=" bg-slate-200 px-4"
            onClick={() => {
              btnName === "Logout" ? setBtnName("Login") : setBtnName("Logout");
            }}
          >
            {btnName}
          </button>
          <li className=" font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </section>
  );
};

export default Header;
