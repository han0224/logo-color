import "styles/SearchBar.css";

const SearchBar = ({ setQuery }) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search..."
        className="searchInput"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};
export default SearchBar;
