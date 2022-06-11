function Hero({ page, header }) {
  return (
    <div className={`section-header section-${page}-header`}>
      <h1 className="blur">{header}</h1>
    </div>
  );
}

export default Hero;
