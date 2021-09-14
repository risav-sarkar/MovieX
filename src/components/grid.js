const Grid = ({ header, children }) => {
  return (
    <div className="grid">
      <h1>{header}</h1>
      <div className="gridContents">
        <div className="gridBlur"></div>
        {children}
      </div>
    </div>
  );
};

export default Grid;
