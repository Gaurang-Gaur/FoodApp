
import Card from "./Card";
import {Link } from "react-router-dom";

// .This newData is array now




const RestaurantCard = (props) => {

  
const newData=props.gitData;


// console.log(newData);

 

  return <div id="res-card-container">
    {
        newData.map((restaurantCard)=><Link  key={restaurantCard.info.resId} to={"/restaurant/"+restaurantCard.info.resId}><Card   data={restaurantCard}/></Link>)
    }
  </div>
}

export default RestaurantCard;