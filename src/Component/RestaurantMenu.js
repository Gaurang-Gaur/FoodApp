
import {useEffect, useState} from "react";

const RestaurantMenu=()=>{
    
    const [restaurantMenu,setRestaurantMenu]=useState(null);


    useEffect (()=>{

        fetchApi();

    },[]);

   


    const fetchApi=async()=>{
        let data;

        const ApiData=await fetch("https://dev.foodkit.io/api/v5/storefront/content/tenants/{tenant}/branch-list");

        data= await ApiData.json();
        // console.log(data);
        setRestaurantMenu(data);
    }

    // const {info}=restaurantMenu?.sections.SECTION_SEARCH_RESULT[0];
    // console.log(info)





    return(
        <div>hello gaurang</div>
    )
}

export default RestaurantMenu;