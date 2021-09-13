const Grid = ({ header, children }) => {
  return (
    <div className="grid">
      <h1>{header}</h1>
      <div className="gridContents">{children}</div>
    </div>
  );
};

export default Grid;
