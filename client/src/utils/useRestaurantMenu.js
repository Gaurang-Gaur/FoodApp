import {useState} from "react";
import {useEffect} from "react";
const useRestaurantMenu=(resId)=>{


    const [restaurantMenus,setRestaurantMenus]=useState(null);
    
    useEffect (()=>{

        fetchApi();

    },[]);

   

    


//.fetching api here 
      const fetchApi=async()=>{
        

        const ApiData=await fetch("http://localhost:8000/restaurant/"+resId);
        //1

        const data= await ApiData.json();
            if(!data){
                console.log("api is not fetched");
            }
            else{
                console.log(data);
            }

            setRestaurantMenus(data);

       
        }
        return restaurantMenus;
}

export default useRestaurantMenu;