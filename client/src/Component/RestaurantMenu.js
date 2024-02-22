
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";

const RestaurantMenu=()=>
{
    
    const [restaurantMenus,setRestaurantMenus]=useState(null);
    const params=useParams();

    const resId=params.resId;
    console.log(params.resId);


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
//. destructuring here



// const {info}=restaurantMenu[0];
// console.log(restaurantMenu);



if(restaurantMenus===null) return (<Shimmer/>);
const {cuisine}=restaurantMenus.info;


    return(
        
        // <div>{restaurantMenus.name}</div>
        <>
        <div>{restaurantMenus.info.resId}</div>
        <div>{restaurantMenus.info.name}</div>
        <div>{restaurantMenus.info.locality.address}</div>
        <div>Delivery Time:{restaurantMenus.order.deliveryTime}</div>

        <div> GET Anything at  {" "+restaurantMenus.info.cfo.text}</div>

        <ul>
          {  cuisine.map((item)=>(<li key={item.name}>{item.name}</li>))}
            
        </ul>

        
            {/* {restaurantMenus.info.cfo} */}

      


        </>
    )
}

export default RestaurantMenu;