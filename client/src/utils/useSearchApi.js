

import {useState,useEffect} from "react";

const searchApiFetch=()=>{






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
   
    // setfilterArrayOfRes(gitApiData);
    setsolveBugSearchBar(gitApiData);
  
  }

  return solveBugSearchBar;

  //. hook for api ends
}
export default searchApiFetch;