import React from "react";

function Contact() {
  return (
    <section className="page">
      <h2>Contact Us</h2>
      <p>1717 K Street NW, Suite 900, Washington DC 20006</p>
      <p>Email: info@allafricadvisors.com</p>
      <p>Phone: +1 (202) 555-1234</p>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
