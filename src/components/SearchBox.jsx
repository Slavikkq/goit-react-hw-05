import { useState } from "react";

const SearchBox = ({ onHandlerSubmit }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    onHandlerSubmit(query);
    setQuery("");
  };

  return (
    <form onSubmit={handlerSubmit}>
      <div>
        {" "}
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search movies"
        />
        <button type="submit">
          <IoSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
