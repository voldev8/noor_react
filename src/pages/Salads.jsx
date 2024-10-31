import Hero from "../components/Hero";
import Card from "../components/Card";
import menuSalads from "../data/menuSalads";

function Salads() {
  const menu = menuSalads;

  return (
    <>
      <Hero page={"salads"} header={"Salads"} />
      <div className="section">
        {menu.map((item) => (
          <Card
            page={"salads"}
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

export default Salads;
