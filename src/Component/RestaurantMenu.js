
import {useEffect, useState} from "react";

const RestaurantMenu=()=>{


    useEffect (()=>{

        fetchApi();

    },[]);


    const fetchApi=async()=>{


        const ApiData=await fetch("https://gaurang-gaur.github.io/host_api/apiData.json");

        const data= await ApiData.json();
        console.log(data);
    }







    return(
        <div>hello gaurang</div>
    )
}

export default RestaurantMenu;