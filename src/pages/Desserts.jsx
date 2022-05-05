import { useState } from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import menuDesserts from '../data/menuDesserts';

function Desserts() {
  const [menu, setMenu] = useState(menuDesserts);

  return (
    <>
      <Hero page={'desserts'} header={'Desserts'} />
      <div className="section">
        {menu.map((item) => (
          <Card
            page={'desserts'}
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

export default Desserts;
