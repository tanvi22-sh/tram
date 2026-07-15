import React from "react";
import "./footer.css";
import FooterColumn from "./footer-col";

const footerData = [
  {
    title: "Company",
    items: [
      { text: "Home" },
      { text: "Studio" },
      { text: "Service" },
      { text: "Blog" },
    ],
  },
  {
    title: "Terms & Policies",
    items: [
      { text: "Privacy Policy" },
      { text: "Terms & Conditions" },
      { text: "Explore" },
      { text: "Accessibility" },
    ],
  },
  {
    title: "Follow Us",
    items: [
      { text: "Instagram" },
      { text: "LinkedIn" },
      { text: "YouTube" },
      { text: "Twitter" },
    ],
  },
  {
    title: "Contact",
    items: [
      { text: "1498 W Fulton St, STE 2D Chicago, IL 63867" },
      { text: "(123) 456-789000" },
      { text: "info@elementum.com" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <section className="subscribe">
        <h1>
          Subscribe to <br />
          our Newsletter
        </h1>

        <h4>To make your stay special and even more memorable</h4>

        <button id="submit">Subscribe Now</button>
      </section>

      <hr />

      <div className="footer-grid">
        {footerData.map((section) => (
          <FooterColumn
            key={section.title}
            title={section.title}
            items={section.items}
          />
        ))}
      </div>
    </footer>
  );
}
