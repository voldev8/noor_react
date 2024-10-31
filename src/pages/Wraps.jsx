import Hero from "../components/Hero";
import Card from "../components/Card";
import menuWraps from "../data/menuWraps";

function Wraps() {
  const menu = menuWraps;

  return (
    <>
      <Hero page={"wraps"} header={"Wraps"} />
      <div className="section">
        {menu.map((item) => (
          <Card
            page={"wraps"}
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

export default Wraps;
