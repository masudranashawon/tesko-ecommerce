import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const RenderStars = ({ rating }) => {
  const fullStars = Math.floor(rating); // full star
  const hasHalfStar = rating % 1 !== 0; // half star check
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="text-light-yellow flex items-center space-x-0.5">
      {/* Full Stars */}
      {[...Array(fullStars)].map((_, i) => (
        <FaStar key={`full-${i}`} />
      ))}

      {/* Half Star */}
      {hasHalfStar && <FaStarHalfAlt />}

      {/* Empty Stars */}
      {[...Array(emptyStars)].map((_, i) => (
        <FaRegStar key={`empty-${i}`} />
      ))}
    </div>
  );
};

export default RenderStars;
