import { Email } from "../components/Email";
import Hero from "../components/Hero";
import Info from "../components/Info";

function Contact() {
  return (
    <>
      <Hero page={"contact"} header={"Contact us"} />
      <div className="section section-contact">
        <Email />
        <Info />
      </div>
    </>
  );
}

export default Contact;
