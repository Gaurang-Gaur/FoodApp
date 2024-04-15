
import Card from "./Card";
import {Link } from "react-router-dom";

// .This newData is array now




const RestaurantCard = (props) => {

  
const newData=props.gitData;
// console.log(newData[0].data.info.id +"inside rescard");


// console.log(newData[0].info.id);


 

  return <div className="flex flex-wrap rounded-lg" >
    {
        newData.map((restaurantCard)=><Link  key={restaurantCard.info.id} to={"/restaurant/"+restaurantCard.info.id}><Card   data={restaurantCard}/></Link>)
    }
  </div>
}

export default RestaurantCard;