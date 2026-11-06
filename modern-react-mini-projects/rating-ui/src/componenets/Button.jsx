const Button = ({ className, disabled, onClick }) => {
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      Submit
    </button>
  );
};

export default Button;
