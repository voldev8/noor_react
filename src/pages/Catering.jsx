import Hero from '../components/Hero';
import AccordionItem from '../components/AccordionItem';

import menuCatering from '../data/menuCatering';

function Catering() {
  return (
    <>
      <Hero page={'catering'} header={'Catering'} />
      <div class="section">
        <div class="cateringMenu">
          <ul class="infoCatering">
            <li>
              For Additional Information Contact Us:
              <abbr title="Phone">
                <span
                  class="glyphicon glyphicon-phone"
                  aria-hidden="true"
                  style={{ height: '12px' }}></span>
              </abbr>{' '}
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
          </ul>

          {menuCatering.map((item, index) => (
            <AccordionItem
              key={index}
              index={index}
              title={item.title}
              items={item.items}
            />
          ))}
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
