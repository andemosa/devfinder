/* eslint-disable react/prop-types */
import Search from "./Search";

const SearchCon = ({ username, setUsername, handleSearch }) => {
  return (
    <form className="dark:bg-blue-gray bg-white shadow-xl py-2 flex justify-between items-center rounded-lg pl-6 pr-3 gap-1" onSubmit={handleSearch}>
      <label htmlFor="search">
        <Search />
      </label>
      <input
        type="text"
        id="search"
        placeholder="Search GitHub username..."
        className="w-full px-6 bg-transparent outline-none text-lg dark:text-white text-slate-900 placeholder:text-gray-300"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button className="bg-light-blue py-3 px-5 text-white rounded-lg font-bold text-base transition-all hover:brightness-90">
        Search
      </button>
    </form>
  );
};

export default SearchCon;
