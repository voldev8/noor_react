import { useState } from 'react';

const AccordionItem = ({ index, title, items }) => {
  const [active, setActive] = useState(false);

  const onClick = (e, index) => {
    e.preventDefault();
    setActive(!active);
  };

  return (
    <>
      <button className="accordion" onClick={onClick}>
        <h3>{title}</h3>
      </button>
      <div className={active ? 'panel panel-open' : 'panel panel-close'}>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <h4>{item.name}</h4>
              <ul>
                {item.price.map((price_detail, index) => (
                  <li key={index}>
                    <span id="price">{price_detail}</span>
                  </li>
                ))}
              </ul>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default AccordionItem;
