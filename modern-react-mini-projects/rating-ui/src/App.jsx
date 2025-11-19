import Rating from "./components/Rating";

const App = () => {
  const name = "Tutku";

  return (
    <div>
      <header>
        <h1>Hello {name}</h1>
      </header>
      <Rating />
    </div>
  );
};

export default App;
