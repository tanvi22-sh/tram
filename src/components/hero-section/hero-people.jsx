import "./hero-people.css";

const people = [
  { id: 1, img: "/images/img-1.png", className: "p1" },
  { id: 2, img: "https://i.pravatar.cc/300?img=12", className: "p2" },
  { id: 3, img: "https://i.pravatar.cc/300?img=13", className: "p3" },
  { id: 4, img: "https://i.pravatar.cc/300?img=14", className: "p4" },
  { id: 5, img: "https://i.pravatar.cc/300?img=15", className: "p5" },
  { id: 6, img: "/images/img-6.png", className: "p6" },
  { id: 7, img: "https://i.pravatar.cc/300?img=17", className: "p7" },
  { id: 8, img: "/images/img-10.png", className: "p8" },
];

export default function HeroPeople() {
  return (
    <section className="heroPeople">
      <div className="leftArc">
        <span className="arc arc1"></span>
        <span className="arc arc2"></span>
      </div>

      {people.map((person) => (
        <div key={person.id} className={`avatar ${person.className}`}>
          <img src={person.img} alt="" />
        </div>
      ))}
    </section>
  );
}
