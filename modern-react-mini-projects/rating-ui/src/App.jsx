import Rating from "./componenets/Rating";

const App = () => {
  return (
    <div>
      <Rating
        heading="Ho do you feel about React?"
        feedbackMessages={[
          "Hate it",
          "Disliked it",
          "Meh",
          "Like it",
          "Love it",
        ]}
      />
    </div>
  );
};

export default App;
