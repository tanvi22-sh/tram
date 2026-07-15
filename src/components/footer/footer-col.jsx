import React from "react";

export default function FooterColumn({ title, items }) {
  return (
    <div className="footer-column">
      <h3>{title}</h3>

      {items.map((item, index) => (
        <a key={index} href={item.link || "#"}>
          {item.text}
        </a>
      ))}
    </div>
  );
}
