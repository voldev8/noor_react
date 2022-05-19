import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     process.env.REACT_APP_EMAIL_SERVICE_ID,
    //     process.env.REACT_APP_EMAIL_TEMPLATE_ID,
    //     form.current,
    //     process.env.REACT_APP_EMAIL_PUBLIC_KEY
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
    console.log('email sent');
    e.target.reset();
  };

  return (
    <form className="email_form" ref={form} onSubmit={sendEmail}>
      <label>Name:</label>
      <input type="text" name="user_name" required />
      <label>Email:</label>
      <input type="email" name="user_email" required />
      <label>Subject:</label>
      <input type="text" name="subject" />
      <label>Message:</label>
      <textarea name="message" placeholder="Type your message here..." />
      <input type="submit" value="Send" />
    </form>
  );
};
