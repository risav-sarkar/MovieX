const Button = ({ text, callback }) => {
  return (
    <button className="viewBtn" onClick={callback}>
      {text}
    </button>
  );
};

export default Button;
