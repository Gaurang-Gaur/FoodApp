import {useState} from "react";
import {useEffect} from "react";
const useRestaurantMenu=(resId)=>{


    const [restaurantMenus,setRestaurantMenus]=useState(null);
    
    
    useEffect (()=>{
        
        fetchApi();

    },[resId]);
 


   




//.fetching api here 
const fetchApi = async () => {
    try {
      const response = await fetch("http://localhost:8000/restaurant/" + resId);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      // console.log(data);
      setRestaurantMenus(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
       
       
      
       
        return restaurantMenus;
}

export default useRestaurantMenu;