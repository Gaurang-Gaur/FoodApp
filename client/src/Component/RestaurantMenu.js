// Theory about custom hook :
// 1. single responsible principle  : acc. to this principle the single entity hold single responsilbe so, I am creating the custom for fetching the api and 
//2. And the sole responsilblity of component is to, display the restaurant menu data

// import {useEffect, useState} from "react";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";

const RestaurantMenu=()=>
{
    
    const params=useParams();

    const resId=params.resId;
    console.log(params.resId);
    console.log("inside restaurant menu")

    const restaurantMenus=useRestaurantMenu(resId);
    // console.log(restaurantMenus);







// const {info}=restaurantMenu[0];
// console.log(restaurantMenu);



// if(restaurantMenus===null) return (<Shimmer/>);
// const {cuisine}=restaurantMenus.info;

// console.log(restaurantMenus);

    return(
        
        // // <div>{restaurantMenus.name}</div>
        // <>
        // <div>{restaurantMenus.info.resId}</div>
        // <div>{restaurantMenus.info.name}</div>
        // <div>{restaurantMenus.info.locality.address}</div>
        // <div>Delivery Time:{restaurantMenus.order.deliveryTime}</div>

        // <div> GET Anything at  {" "+restaurantMenus.info.cfo.text}</div>

        // <ul>
        //   {  cuisine.map((item)=>(<li key={item.name}>{item.name}</li>))}
            
        // </ul>

        
        //     {/* {restaurantMenus.info.cfo} */}

      


        // </>
        <>
        inside card</>
    )
}

export default RestaurantMenu;