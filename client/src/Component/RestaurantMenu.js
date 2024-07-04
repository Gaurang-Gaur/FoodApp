// Theory about custom hook :
// 1. single responsible principle  : acc. to this principle the single entity hold single responsilbe so, I am creating the custom for fetching the api and
//2. And the sole responsilblity of component is to, display the restaurant menu data

// import {useEffect, useState} from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import MenuShimmer from "../Component/MenuShimmer";
import {useState} from "react";
import { useParams} from "react-router-dom";
import { MENU_ITEM_TYPE_KEY } from "../utils/content";
import RestaurantCategory from "../Component/RestaurantCategory";

const RestaurantMenu = () => {
  const params = useParams();
  const [update, setUpdate]=useState(false);
  const [showIndex, setShowIndex]=useState(null);
 
  

  const resId = params.resId;
  const resName = params.resName;

  const restaurantMenus = useRestaurantMenu(resId);

  
  if (restaurantMenus === null || !Array.isArray(restaurantMenus)) {
    // console.log("inside if");
    // forceUpdate(update);
    
    // setUpdate(update => !update);
    return <MenuShimmer />;
  }
  
  
  // console.log(restaurantMenus);
  
  const categories = restaurantMenus
    .map((x) => x.card) // Assuming each element in restaurantMenus has a card property
    .filter((x) => x && x.card["@type"] === MENU_ITEM_TYPE_KEY);
  
 
    




  // console.log(categories[0].card.itemCards[1].card.info);
  // here we create the new component and pass each map object as props in it and then start drilling it means component make our work easier

  // creating accordion


  return (
    <div>
      <div className="text-center m-5 p-3 font-bold my-9">{resName}</div>
    {/* // controlled component */}
      {categories.map((category, index) => (
        <RestaurantCategory key={index} data={category.card} showItem={index===showIndex && update} setShowIndex={()=>setShowIndex(index)} 
        setUpdate={()=>setUpdate(!update)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
