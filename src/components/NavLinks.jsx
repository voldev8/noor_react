import { Link } from "react-router-dom";

import takeout_logo from "../assets/take-out.png";
import delivery_logo from "../assets/delivery.png";
import fries_logo from "../assets/fries.png";
import salad_logo from "../assets/salad.png";
import wrap_logo from "../assets/wrap.png";
import dinner_logo from "../assets/dinner.png";
import desserts_logo from "../assets/dessert.png";
import beverages_logo from "../assets/drink.png";
import catering_logo from "../assets/catering_menu.png";
import contact_logo from "../assets/contact.png";

function NavLinks({ checked, handleChange }) {
  return (
    <ul
      className={checked ? "nav-links active" : "nav-links"}
      onClick={handleChange}
    >
      <li>
        <a
          href="https://order.labrador.ai/store/noor-mediterranean-grill-somerville/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="nav-icon" src={takeout_logo} alt="delivery" />
          <span> Order Online</span>
        </a>
      </li>
      <li>
        <a
          href="https://www.grubhub.com/restaurant/noor-mediterranean-grill-136-college-ave-somerville/289672"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="nav-icon" src={delivery_logo} alt="delivery" />
          <span> Order Delivery</span>
        </a>
      </li>
      <li>
        <Link to="/sides">
          <img className="nav-icon" src={fries_logo} alt="fries" />
          <span>Appetizers & Sides</span>
        </Link>
      </li>
      <li>
        <Link to="/salads">
          <img className="nav-icon" src={salad_logo} alt="salad" />
          <span>Salads</span>
        </Link>
      </li>
      <li>
        <Link to="/wraps">
          <img className="nav-icon" src={wrap_logo} alt="wraps" />
          <span>Wraps</span>
        </Link>
      </li>
      <li>
        <Link to="/dinners">
          <img className="nav-icon" src={dinner_logo} alt="dinners" />
          <span>Dinners</span>
        </Link>
      </li>
      <li>
        <Link to="/desserts">
          <img className="nav-icon" src={desserts_logo} alt="desserts" />
          <span>Desserts</span>
        </Link>
      </li>
      <li>
        <Link to="/beverages">
          <img className="nav-icon" src={beverages_logo} alt="beverages" />
          <span>Beverages</span>
        </Link>
      </li>
      <li>
        <Link to="/catering">
          <img className="nav-icon" src={catering_logo} alt="beverages" />
          <span>Catering</span>
        </Link>
      </li>
      <li>
        <Link to="/contact">
          <img className="nav-icon" src={contact_logo} alt="beverages" />
          <span>Contact us</span>
        </Link>
      </li>
    </ul>
  );
}

export default NavLinks;
