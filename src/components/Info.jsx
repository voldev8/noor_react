function Info() {
  return (
    <div className="info-outer">
      <div className="info-main">
        <div className="contact-info">
          <span>For orders: </span>
          <a href="mailto: noororders@gmail.com">noororders@gmail.com</a>
        </div>
        <div className="contact-info">
          <span>Contact: </span>
          <a href="mailto: noormedgrill@gmail.com">noormedgrill@gmail.com</a>
        </div>
        <div className="contact-info">
          <span>Call: </span> <a href="tel:617-625-6667">(617) 625-6667</a>
        </div>
      </div>
      <div className="hours">
        <h4>Hours</h4>
        <p>
          <span>Monday </span>10:00am-10:00pm
        </p>
        <p>
          <span>Tuesday </span>10:00am-10:00pm
        </p>
        <p>
          <span>Wednesday </span>10:00am-10:00pm
        </p>
        <p>
          <span>Thursday </span>10:00am-10:00pm
        </p>
        <p>
          <span>Friday </span>10:00am-10:00pm
        </p>
        <p>
          <span>Saturday </span>10:00am-10:00pm
        </p>
        <p>
          <span>Sunday </span>11:00am-09:00pm
        </p>
      </div>
    </div>
  );
}

export default Info;
