import { Link } from "react-router-dom";

import Hero from "../components/Hero";
import AccordionItem from "../components/AccordionItem";

import menuCatering from "../data/menuCatering";

function Catering() {
  return (
    <>
      <Hero page={"catering"} header={"Catering"} />
      <div className="section">
        <div className="cateringMenu">
          {menuCatering.map((item, index) => (
            <AccordionItem
              key={index}
              index={index}
              title={item.title}
              items={item.items}
            />
          ))}

          <ul className="infoCatering">
            <li>
              For Additional Information Contact Us:
              <abbr title="Phone">
                <span
                  className="glyphicon glyphicon-phone"
                  aria-hidden="true"
                  style={{ height: "12px" }}
                ></span>
              </abbr>{" "}
              (617) 625-6667
            </li>
            <li>
              <b>Half tray</b> up to 10 people , <b>Full tray</b> up to 20
              people.
            </li>
            <li>
              We may be able to handle your request the same day, but 2-3 days
              in advance is appreciated.
            </li>
            <li className="catering-contact">
              <Link to="/contact">
                <span>Send us an email now</span>
              </Link>
            </li>
            <li className="catering-contact">
              <a
                href="https://www.ezcater.com/catering/pvt/noor-mediterranean-grill-somerville"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Order Catering Now Through EzCater</span>
              </a>
            </li>
          </ul>

          <p id="rawWarning">
            *Consuming raw or undercooked meats, seafood, poultry or eggs may
            increase your risk of food borne illness, especially if you have
            certain medical conditions. before placing your order, please inform
            your server if you or a person in you party has a food allergy.
          </p>
        </div>
      </div>
    </>
  );
}

export default Catering;
