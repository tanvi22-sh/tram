import { FaArrowRightLong } from "react-icons/fa6";

const OfferCard = ({ subtitle, title }) => {
  return (
    <div className="offer-card">
      <div className="offer-subtitle">
        <p>{subtitle}</p>
      </div>

      <div className="offer-title">
        <h2>{title}</h2>
      </div>

      <div className="offer-arrow">
        <FaArrowRightLong />
      </div>
    </div>
  );
};

export default OfferCard;
