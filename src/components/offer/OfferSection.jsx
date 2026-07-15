import "./OfferSection.css";
import OfferCard from "./OfferCard";

const offerData = [
  {
    id: 1,
    subtitle: "Office of multiple interest content",
    title: "Collaborative & partnership",
  },
  {
    id: 2,
    subtitle: "The hanger US Air force digital experimental",
    title: "We talk about our weight",
  },
  {
    id: 3,
    subtitle: "Delta faucet content, social, digital",
    title: "Piloting digital confidence",
  },
];

const OfferSection = () => {
  return (
    <section className="offer-section">
      <div className="container">
        <div className="offer-heading">
          <h1>
            What we <span>can</span>
            <br />
            offer you!
          </h1>

          <div className="heading-line"></div>
        </div>

        <div className="offer-list">
          {offerData.map((item) => (
            <OfferCard
              key={item.id}
              subtitle={item.subtitle}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
