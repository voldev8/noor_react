function Hero({ page, header }) {
  return (
    <div className={`section-header section-${page}-header`}>
      <h1>{header}</h1>
    </div>
  );
}

export default Hero;
