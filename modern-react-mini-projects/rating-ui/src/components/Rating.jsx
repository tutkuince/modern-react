const Rating = () => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  const clicked = (index) => console.log("Clicked", index);

  const hovered = (direction, index) =>
    console.log("Hovered!", direction, index);

  return (
    <div className="rating-container">
      <h2>Rater Your Experience</h2>
      <div className="stars">
        {stars.map((star, index) => (
          <span
            onClick={() => clicked(index)}
            onMouseEnter={() => hovered("enter", index)}
            onMouseLeave={() => hovered("leave", index)}
            key={star}
            className="star"
          >
            {"\u2605"}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Rating;
