import React from 'react';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! This form submission is handled by React state/events.");
  };

  return (
    <section id="contact" className="section contact-section">
      <h2>Contact Information</h2>
      <p>Email: p416@techindiaed.com | Phone: +1 234 567 890</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="4" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
