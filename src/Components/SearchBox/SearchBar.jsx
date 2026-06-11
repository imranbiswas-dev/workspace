import  { useState } from "react";
import { useNavigate } from "react-router"; // 

const SearchBar = ({ placeholder = "Search", paramName = "query" }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?${paramName}=${encodeURIComponent(query.trim())}`);
      setQuery(""); 
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className="input w-full rounded-2xl">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="search"
          className="grow"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>
    </form>
  );
};

export default SearchBar;
