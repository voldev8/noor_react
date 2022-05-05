function Card({ page, id, name, description, description_additional, price }) {
  return (
    <div className="section-card">
      <img src={require(`../assets/food/${page}/${name}.jpg`)} alt={name} />
      <h3>{name}</h3>
      <p className="description">
        {description}
        <br />
        {description_additional}
      </p>
      <p className="price">{price}</p>
    </div>
  );
}

export default Card;
