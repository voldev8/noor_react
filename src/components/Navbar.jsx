import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

import noor_logo from '../assets/noor-mediterranean-grill-logo.png';
import delivery_logo from '../assets/delivery.png';
import fries_logo from '../assets/fries.png';
import salad_logo from '../assets/salad.png';
import wrap_logo from '../assets/wrap.png';
import dinner_logo from '../assets/dinner.png';
import desserts_logo from '../assets/dessert.png';
import beverages_logo from '../assets/drink.png';

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <img class="nav-logo" src={noor_logo} alt="logo" />
      </Link>
      <ul>
        <li>
          <a
            href="https://www.grubhub.com/restaurant/noor-mediterranean-grill-136-college-ave-somerville/289672"
            target="_blank"
            rel="noopener noreferrer">
            <img class="nav-icon" src={delivery_logo} alt="delivery" />
            <span> Order Online</span>
          </a>
        </li>
        <li>
          <Link to="/sides">
            <img class="nav-icon" src={fries_logo} alt="fries" />
            <span>Appetizers & Sides</span>
          </Link>
        </li>
        <li>
          <Link to="/salads">
            <img class="nav-icon" src={salad_logo} alt="salad" />
            <span>Salads</span>
          </Link>
        </li>
        <li>
          <Link to="/wraps">
            <img class="nav-icon" src={wrap_logo} alt="wraps" />
            <span>Wraps</span>
          </Link>
        </li>
        <li>
          <Link to="/dinners">
            <img class="nav-icon" src={dinner_logo} alt="dinners" />
            <span>Dinners</span>
          </Link>
        </li>
        <li>
          <Link to="/desserts">
            <img class="nav-icon" src={desserts_logo} alt="desserts" />
            <span>Desserts</span>
          </Link>
        </li>
        <li>
          <Link to="/beverages">
            <img class="nav-icon" src={beverages_logo} alt="beverages" />
            <span>Beverages</span>
          </Link>
        </li>
        <li>
          <Link to="/catering">
            <span>Catering Menu</span>
          </Link>
        </li>
        <li>
          <a
            href="https://www.ezcater.com/catering/pvt/noor-mediterranean-grill-somerville"
            target="_blank"
            rel="noopener noreferrer">
            <span>Order Catering Now</span>
          </a>
        </li>

        <li>
          <Link to="/contact">
            <span>Contact us</span>
          </Link>
        </li>
      </ul>
      <div class="social">
        <a
          href="https://www.facebook.com/noorgrill/"
          target="_blank"
          rel="noopener noreferrer">
          <i class="fab fa-facebook">
            <FaFacebook />
          </i>
        </a>
        <a
          href="https://www.twitter.com/noorgrill/"
          target="_blank"
          rel="noopener noreferrer">
          <i class="fab fa-twitter">
            <FaTwitter />
          </i>
        </a>
        <a
          href="https://www.instagram.com/noorgrill/"
          target="_blank"
          rel="noopener noreferrer">
          <i class="fab fa-instagram">
            <FaInstagram />
          </i>
        </a>
      </div>
      <div class="copyright">
        <p>Copyright © 2021 Noor Mediterranean Grill. All rights reserved.</p>
      </div>
    </nav>
  );
}

export default Navbar;
