import { Link } from 'react-router-dom';

import NavLinks from './NavLinks';
import NavSocial from './NavSocial';

import noor_logo from '../assets/noor-mediterranean-grill-logo.png';

function Navbar() {
  return (
    <nav>
      <Link to="/">
        <img className="nav-logo" src={noor_logo} alt="logo" />
      </Link>
      <NavLinks />
      <NavSocial />
      <div className="copyright">
        <p>Copyright © 2021 Noor Mediterranean Grill. All rights reserved.</p>
      </div>
    </nav>
  );
}

export default Navbar;
