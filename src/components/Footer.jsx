import noor_logo from '../assets/noor-mediterranean-grill-logo.png';

function Footer() {
  return (
    <div className="footer">
      <img src={noor_logo} alt="noor-logo" />
      <ul>
        <li>Noor Mediterranean Grill</li>
        <li>136 College Ave Somerville, MA 02144</li>
        <li>Phone: (617) 625-6667</li>
        <li>Text Order:(617) 625-6667</li>
      </ul>
    </div>
  );
}

export default Footer;
