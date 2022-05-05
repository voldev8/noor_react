import { useState } from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import menuBeverages from '../data/menuBeverages';

function Beverages() {
  const [menu, setMenu] = useState(menuBeverages);

  return (
    <>
      <Hero page={'beverages'} header={'Beverages'} />
      <div className="section">
        {menu.map((item) => (
          <Card
            page={'beverages'}
            key={item.id}
            name={item.name}
            description={item.description}
            description_additional={item.description_additional}
            price={item.price}
          />
        ))}
      </div>
    </>
  );
}

export default Beverages;
