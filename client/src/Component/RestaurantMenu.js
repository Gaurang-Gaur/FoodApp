// Theory about custom hook :
// 1. single responsible principle  : acc. to this principle the single entity hold single responsilbe so, I am creating the custom for fetching the api and 
//2. And the sole responsilblity of component is to, display the restaurant menu data

// import {useEffect, useState} from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import {MENU_ITEM_TYPE_KEY} from "../utils/content";


const RestaurantMenu=()=>
{
    
    const params=useParams();

    const resId=params.resId;
    // console.log(params.resName);
    const resName=params.resName;
    // console.log(params.resId);
    console.log("inside restaurant menu")

    const restaurantMenus=useRestaurantMenu(resId);
    // console.log(restaurantMenus);

 // const restaurantData =
            // data
            //   ?.map((x) => x.card)
            //   ?.find((x) => x && x.card["@type"] === MENU_ITEM_TYPE_KEY)
            //   ?.itemCards || null;
            //   console.log(restaurantData)
            // console.log(restaurantMenus[0]);
            const categories=restaurantMenus?.map((x)=>x.card)?.filter((x)=>x.card["@type"]===MENU_ITEM_TYPE_KEY)
            // const s=data?.map((x)=>x.card)?.filter((x)=>console.log(x.card["@type"]));
            // s.filter((x)=>x.itemCards);
            console.log(categories)
            // const cardData=restaurantData.map((x)=>x.card);
            // console.log(cardData)
            // console.log(categories[0].card.itemCards[1].card.info);









if(restaurantMenus===null) return (<Shimmer/>);


    return(
        <div className="text-center m-5 p-3 font-bold">
            {resName}
        </div>
        
     
       
    )
}

export default RestaurantMenu;