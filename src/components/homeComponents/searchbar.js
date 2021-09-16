import { useState, useEffect, useRef } from "react";
const Searchbar = ({ setSearchTerm }) => {
  const [state, setState] = useState("");
  const initial = useRef(true);

  useEffect(() => {
    if (initial.current) {
      initial.current = false;
      return;
    }
    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);
    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <div className="searchbarContainer">
      <div className="searchbar">
        <input
          type="text"
          placeholder="Search"
          onChange={(event) => setState(event.currentTarget.value)}
          value={state}
        />
      </div>
    </div>
  );
};

export default Searchbar;
