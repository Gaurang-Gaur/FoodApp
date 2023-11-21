import data from "../utils/apiData.json";
import { useState } from "react"; // name import
import RestaurantCard from "./RestaurantCard";


// imp: just an array
let newData = data.sections.SECTION_SEARCH_RESULT;

const Search = () => {
  const [filterArrayOfRes, setfilterArrayOfRes] = useState(newData);
  let filterList=[];

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
        <button
          class="btn-search-top"
          onClick={() => {
            filterList = newData.filter(
              (topRate) => topRate.info.rating.aggregate_rating >= 4
            );
            // console.log(filterList);
            setfilterArrayOfRes(filterList);
            // console.log(filterArrayOfRes);
          }}
        >
          {" "}
          TopRate{" "}
        </button>
      </div>
      <RestaurantCard newData={filterArrayOfRes}/>
    </div>
  );
};
export default Search;
