import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import "./Components Css/searchBar.css";

export default function Searchbar() {
  const [SearchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${SearchTerm}`);
  };
  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="form">
      <div className="searchCont">
        <FiSearch />
        <input
          type="text"
          placeholder="Search"
          autoComplete="off"
          value={SearchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </form>
  );
}
