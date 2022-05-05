import dinein from '../assets/dinein.png';
import delivery2 from '../assets/delivery2.png';
import catering from '../assets/catering.png';

function Home() {
  return (
    <div className="section-main">
      <div className="card">
        <h1>Noor Mediterranean Grill</h1>
        <div className="card_part card_part-one"></div>
        {/* Photo 2  */}
        <div className="card_part card_part-two"></div>
        {/* Photo 3  */}
        <div className="card_part card_part-three"></div>
      </div>
      <div className="aside">
        <div className="aside-card">
          <h3>TAKE-OUT OR DINE-IN</h3>
          <img src={dinein} alt="dinein" />
          <p>
            Enjoy your freshly made Mediterranean food in our 24-seat restaurant
            or pick it up.
          </p>
        </div>
        <div className="aside-card">
          <h3>DELIVERY</h3>
          <img src={delivery2} alt="dinein" />
          <p>
            We deliver to Somerville, Medford, Arlington and most parts of
            Cambridge.
          </p>
        </div>
        <div className="aside-card">
          <h3>CATERING</h3>
          <img src={catering} alt="dinein" />
          <p>
            We cater! Pick it up yourself or we deliver. Our driver will help
            you get set up.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
