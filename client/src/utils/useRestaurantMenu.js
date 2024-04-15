import {useState} from "react";
import {useEffect} from "react";
import {MENU_ITEM_TYPE_KEY} from "../utils/content";
const useRestaurantMenu=(resId)=>{


    const [restaurantMenus,setRestaurantMenus]=useState(null);
    
    useEffect (()=>{

        fetchApi();

    },[]);

   

    


//.fetching api here 
      const fetchApi=async()=>
        {
        
    

        
            const ApiData=await fetch("http://localhost:8000/restaurant/"+resId);
        

        const data= await ApiData.json();
            if(!data){
                console.log("api is not fetched");
            }
            else{
                console.log(data);
            }

            // const restaurantData =
            // data
            //   ?.map((x) => x.card)
            //   ?.find((x) => x && x.card["@type"] === MENU_ITEM_TYPE_KEY)
            //   ?.itemCards || null;
            //   console.log(restaurantData)
            const restaurantData=data?.map((x)=>x.card)?.filter((x)=>x.card["@type"]===MENU_ITEM_TYPE_KEY)
            // const s=data?.map((x)=>x.card)?.filter((x)=>console.log(x.card["@type"]));
            // s.filter((x)=>x.itemCards);
            console.log(restaurantData)
            // const cardData=restaurantData.map((x)=>x.card);
            // console.log(cardData)
            console.log(restaurantData[0].card.itemCards[1].card.info);
            setRestaurantMenus(data);
        
        }
       
       
      
       
        return restaurantMenus;
}

export default useRestaurantMenu;