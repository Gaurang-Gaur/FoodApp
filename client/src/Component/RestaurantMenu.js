// Theory about custom hook :
// 1. single responsible principle  : acc. to this principle the single entity hold single responsilbe so, I am creating the custom for fetching the api and
//2. And the sole responsilblity of component is to, display the restaurant menu data

// import {useEffect, useState} from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_ITEM_TYPE_KEY } from "../utils/content";
import RestaurantCategory from "../Component/RestaurantCategory";

const RestaurantMenu = () => {
  const params = useParams();

  const resId = params.resId;
  const resName = params.resName;

  const restaurantMenus = useRestaurantMenu(resId);

 
  

    const categories = restaurantMenus
    ?.map((x) => x.card)
    ?.filter((x) => x.card["@type"] === MENU_ITEM_TYPE_KEY) || null;
  
    if (restaurantMenus === null) 
    return <Shimmer />;
  




  // console.log(categories[0].card.itemCards[1].card.info);
  // here we create the new component and pass each map object as props in it and then start drilling it means component make our work easier

  // creating accordion

  return (
    <div>
      <div className="text-center m-5 p-3 font-bold my-9">{resName}</div>

      {categories.map((category, index) => (
        <RestaurantCategory key={index} data={category.card} />
      ))}
    </div>
  );
};

export default RestaurantMenu;
