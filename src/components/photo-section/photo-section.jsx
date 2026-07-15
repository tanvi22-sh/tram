import "./photo-section.css";

const avatars = [
  { id: 1, img: "https://i.pravatar.cc/80?img=1", className: "top-left" },
  { id: 2, img: "https://i.pravatar.cc/80?img=2", className: "left-center" },
  { id: 3, img: "https://i.pravatar.cc/80?img=3", className: "bottom-left" },
  { id: 4, img: "https://i.pravatar.cc/80?img=4", className: "big-left" },
  { id: 5, img: "https://i.pravatar.cc/80?img=5", className: "top-right" },
  { id: 6, img: "https://i.pravatar.cc/80?img=6", className: "top-right2" },
  { id: 7, img: "https://i.pravatar.cc/80?img=7", className: "center-right" },
  { id: 8, img: "https://i.pravatar.cc/80?img=8", className: "big-right" },
];

export default function PhotoSection() {
  return (
    <section className="photo-section">
      {avatars.map((avatar) => (
        <img
          key={avatar.id}
          src={avatar.img}
          alt=""
          className={`avatar ${avatar.className}`}
        />
      ))}

      <div className="heading">
        <span className="highlight">What</span> our customer
        <br />
        says <span className="underline">About Us</span>
      </div>

      <div className="photo-card">
        <span className="quote left">“</span>

        <p>
          Elementum delivered the site within the timeline as they requested. In
          the end, the client found a 50% increase in traffic within days since
          its launch. They also had an impressive ability to use technologies
          that the company hasn't used, which have also proved to be easy to use
          and reliable.
        </p>

        <span className="quote right">”</span>
      </div>
    </section>
  );
}
