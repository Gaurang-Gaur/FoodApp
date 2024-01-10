
import {useEffect, useState} from "react";

const RestaurantMenu=()=>{
    
    const [restaurantMenu,setRestaurantMenu]=useState(null);


    useEffect (()=>{

        fetchApi();

    },[]);

   
let gridData=0;
    
    const fetchApi=async()=>{
        

        const ApiData=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&restaurantId=%16866%22&submitAction=ENTER");

        const data= await ApiData.json();
        console.log(data);
        setRestaurantMenu(data);
        
            const {info}=data?.data.cards[4].card.card.gridElements.infoWithStyle.restaurants[1];
            
        console.log(info)
        }





    return(
        <div>hello gaurang</div>
    )
}

export default RestaurantMenu;