import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function NavSocial() {
  return (
    <div className="social">
      <a
        href="https://www.facebook.com/noorgrill/"
        target="_blank"
        rel="noopener noreferrer">
        <i className="fab fa-facebook">
          <FaFacebook />
        </i>
      </a>
      <a
        href="https://www.twitter.com/noorgrill/"
        target="_blank"
        rel="noopener noreferrer">
        <i className="fab fa-twitter">
          <FaTwitter />
        </i>
      </a>
      <a
        href="https://www.instagram.com/noorgrill/"
        target="_blank"
        rel="noopener noreferrer">
        <i className="fab fa-instagram">
          <FaInstagram />
        </i>
      </a>
    </div>
  );
}

export default NavSocial;
