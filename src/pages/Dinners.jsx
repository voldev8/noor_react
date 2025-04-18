import Hero from "../components/Hero";
import Card from "../components/Card";
import menuDinners from "../data/menuDinners";

function Dinners() {
  const menu = menuDinners;

  return (
    <>
      <Hero page={"dinners"} header={"Dinners"} />
      <div className="section">
        <div className="section-grid">
          {menu.map((item) => (
            <Card
              page={"dinners"}
              key={item.id}
              name={item.name}
              description={item.description}
              description_additional={item.description_additional}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Dinners;
