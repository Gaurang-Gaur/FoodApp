import ItemList from "../Component/ItemList";
import {useState } from "react";
const RestaurantCategory = ({ data ,showItem,setShowIndex,setUpdate}) => {
  const { title, itemCards } = data;
  const handleClick=()=>{

    setShowIndex();
    setUpdate();
  } // uplifting the state from here.
  return (
    <div className="w-6/12 mx-auto bg-gray-200 shadow-lg  p-4 cursor-pointer  " onClick={handleClick} >
      <div className="flex justify-between m-1">
        <span> {title} ({itemCards.length})</span>

        <span> ⏬</span>
      </div>
      { showItem &&       <ItemList itemInfo={itemCards} />
}
    </div>
  );
};

export default RestaurantCategory;
