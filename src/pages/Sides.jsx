import { useState } from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import menuSides from '../data/menuSides';

function Sides() {
  const [menu, setMenu] = useState(menuSides);

  return (
    <>
      <Hero page={'sides'} header={'Appetizers & Sides'} />
      <div className="section">
        {menu.map((item) => (
          <Card
            page={'sides'}
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

export default Sides;
