const Button = ({ text, callback }) => {
  return (
    <div className="loadBtn">
      <button className="viewBtn" onClick={callback}>
        {text}
      </button>
    </div>
  );
};

export default Button;
