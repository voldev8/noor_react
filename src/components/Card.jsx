function Card({ page, id, name, description, price }) {
  return (
    <div className="section-card">
      <img src={require(`../assets/food/${page}/${name}.jpg`)} alt={name} />
      <h3>{name}</h3>
      <p className="description">
        <ul>
          {description.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      </p>
      <p className="price">{price}</p>
    </div>
  );
}

export default Card;
