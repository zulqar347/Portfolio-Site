import React from "react";
import emailjs from "emailjs-com";
import "../Styles/ContactPage.css";

export default function ContactPage() {

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_a7uugrb",      // Replace with your EmailJS service ID
      "template_7la0iub",     // Replace with your EmailJS template ID
      e.target,               // The form element
      "60me3X2NKHecWMJ24"       // Replace with your EmailJS public key
    ).then(
      (result) => {
        alert("Message sent successfully!");
        e.target.reset();
      },
      (error) => {
        alert("Failed to send message. Try again.");
        console.error(error.text);
      }
    );
  };

  return (
    <div className="contact-container" id="contact">
      <h1 className="contact-title">Contact Me</h1>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input type="text" name="user_name" placeholder="Enter your name" required />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="user_email" placeholder="Enter your email" required />
        </div>

        <div className="form-group">
          <label>Message</label>
          <textarea name="message" rows="5" placeholder="Write your message..." required></textarea>
        </div>

        <button type="submit" className="btn-submit">Send Message</button>
      </form>
    </div>
  );
}
