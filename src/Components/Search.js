import { FaSearch } from "react-icons/fa";
function Search() {
  return (
    <div>
      <form>
        <div>
          <FaSearch />
          <input placeholder="search..." />
        </div>

        <button>search</button>
      </form>
    </div>
  );
}

export default Search;
