import topFilter from "../features/topRate";

const Search = () => {

  
  return (
    <div className="Search">
      <div class="center"></div>
      <div class="center">
        <input type="search" placeholder="Search Your Food" class="input" />
      </div>
      <div class="center">
        <button class="btn-search">I'm Feeling Lucky </button>
      </div>
      <div class="center">
        <button class="btn-search-top" onClick={topFilter}> TopRate </button>
      </div>
    </div>
  );
};
export default Search;
