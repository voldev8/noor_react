import noor_logo from "../assets/noor-mediterranean-grill-logo.png";
import { ReactComponent as ExternalLinkIcon } from "../assets/external-link-icon.svg";

function Footer() {
  const restaurantAddress = "136 College Ave Somerville, MA 02144";
  const googleMapsLink = `https://www.google.com/maps?q=${encodeURIComponent(
    restaurantAddress
  )}`;

  return (
    <div className="footer">
      <img src={noor_logo} alt="noor-logo" />
      <ul>
        <li>Noor Mediterranean Grill</li>
        <li>
          {" "}
          <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
            {restaurantAddress}
            <span>
              <ExternalLinkIcon
                style={{
                  marginLeft: "4px",
                  width: "1.2rem",
                  height: "1.2rem",
                  verticalAlign: "middle",
                  marginBottom: "2px",
                }}
              />
            </span>
          </a>
        </li>
        <li>Phone: (617) 625-6667</li>
        <li>Text Order:(617) 625-6667</li>
      </ul>
    </div>
  );
}

export default Footer;
