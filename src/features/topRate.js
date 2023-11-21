import data from "../utils/apiData.json";
// import {useState} from "react"; // name import 

// imp: just an array
let newData = data.sections.SECTION_SEARCH_RESULT;
// export const [filterArrayOfRes,setfilterArrayOfRes]=useState([]);
let filterList=[];

  const topFilter = () => {
   
  
    filterList = newData.filter((topRate) => topRate.info.rating.aggregate_rating >= 4);
    console.log(filterList);
  };

  export default topFilter;



  
