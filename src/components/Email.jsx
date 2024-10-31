import { useRef } from 'react';

import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

export const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success('We have received your message.');
        },
        (error) => {
          toast.error('Oops Something went wrong.');
        }
      );
    toast.success('We have received your message.');

    e.target.reset();
  };

  return (
    <form className="email-form" ref={form} onSubmit={sendEmail}>
      <label>Name:</label>
      <input type="text" name="user_name" required />
      <label>Email:</label>
      <input type="email" name="user_email" required />
      <label>Phone:</label>
      <input type="tel" name="phone_number" required />
      <label>Subject:</label>
      <input type="text" name="subject" />
      <label>Message:</label>
      <textarea
        name="message"
        placeholder="Type your message here..."
        required
      />
      <input type="submit" value="Send" />
    </form>
  );
};
