import { useState } from "react";
import { Link } from "react-router-dom";
import noor_logo from "../assets/noor-mediterranean-grill-logo.png";

import NavLinks from "./NavLinks";
import NavSocial from "./NavSocial";
// import NavBurger from './NavBurger';

function Navbar() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setIsChecked(!isChecked);
  };

  return (
    <nav>
      <div className="nav-top">
        <Link to="/">
          <img className="nav-logo" src={noor_logo} alt="logo" />
        </Link>
        <div className="hamburger-menu">
          <input
            id="toggle"
            type="checkbox"
            onChange={handleChange}
            checked={isChecked}
          />
          <label className="hamburger" htmlFor="toggle">
            <div className="top"></div>
            <div className="meat"></div>
            <div className="bottom"></div>
          </label>
        </div>
      </div>
      <NavLinks checked={isChecked} handleChange={handleChange} />

      <NavSocial />
      <div className="copyright">
        <p>Copyright © 2024 Noor Mediterranean Grill. All rights reserved.</p>
      </div>
    </nav>
  );
}

export default Navbar;
