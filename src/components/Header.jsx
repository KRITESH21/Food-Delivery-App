import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnReact, setBtnReact] = useState("Login");

  return (
    <div className="header">
      <div className="logo">
        <img src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Cart</li>
          <button
            onClick={() => {
              btnReact === "Login"
                ? setBtnReact("Logout")
                : setBtnReact("Login");
            }}
          >
            {btnReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
