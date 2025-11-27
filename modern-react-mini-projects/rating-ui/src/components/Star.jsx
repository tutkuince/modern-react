const Star = ({
  star,
  rating,
  hover,
  color,
  ratingClick,
  ratingHoverEnter,
  ratingHoverLeave,
}) => {
  return (
    <span
      onClick={() => ratingClick(star)}
      onMouseEnter={() => ratingHoverEnter(star)}
      onMouseLeave={ratingHoverLeave}
      className="star"
      style={{ color: star <= (hover || rating) ? color : "#ccc" }}
    >
      {"\u2605"}
    </span>
  );
};

export default Star;
