import { useState,useEffect } from "react"; // name import
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";



const Search = () => {

  // imp:local state
  const [filterArrayOfRes, setfilterArrayOfRes] = useState([]);
  const [searchbox, setsearchbox]=useState("");
  const [solveBugSearchBar,setsolveBugSearchBar]=useState([]);


// console.log(filterArrayOfRes);


//. hook for api start
  useEffect(()=>{
    fetchapi();
  },[]);


  const fetchapi=async ()=>{
    const data=await fetch("https://gaurang-gaur.github.io/host_api/apiData.json");
    if(!data){
      console.log("api is not fetch");
    }

    const json=await data.json();
    const gitApiData=json.sections.SECTION_SEARCH_RESULT;
   
    setfilterArrayOfRes(gitApiData);
    setsolveBugSearchBar(gitApiData);
  
  }

  //. hook for api ends




//   if(filterArrayOfRes.length===0)
// {
//   return <Shimmer/>
// }



const searchForMe=()=>{

  const newSearchFilterArray=filterArrayOfRes.filter((res)=>res.info.name.toLowerCase().includes(searchbox.toLowerCase()));

  // setfilterArrayOfRes(newSearchFilterArray);
  setsolveBugSearchBar(newSearchFilterArray);

}



  let filterList=[];


  // imp:Conditional Render

  return (filterArrayOfRes.length===0)?<Shimmer/>:(
    <div className="Search">
      
      <div className="center">
        <input type="search" placeholder="Search Your Food" class="input" value={searchbox} onChange={(e)=>{setsearchbox(e.target.value)}} />
      
        <div  className="btn-alignment">
        <button className="btn-search" onClick={searchForMe} >I'm Feeling Lucky </button>
      
      
      <button
        className="btn-search-top"
        onClick={() => {
          filterList = solveBugSearchBar.filter(
            (topRate) => topRate.info.rating.aggregate_rating >= 4
          );
          setsolveBugSearchBar(filterList);
        }}
      >
        {" "}
        TopRate{" "}
      </button>
        </div>
      </div>
      <RestaurantCard gitData={solveBugSearchBar}/>
    </div>
  );
};
export default Search;
