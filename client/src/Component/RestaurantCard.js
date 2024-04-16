
import Card,{promotedCard} from "./Card";
import {Link } from "react-router-dom";

// .This newData is array now



// TODO: WOrking 
const RestaurantCard = (props) => {

  
const newData=props.gitData;
// console.log(newData[0].data.info.id +"inside rescard");


// console.log(newData[0].info.id);


 const RestaurantPromoted=promotedCard(Card);

  return <div className="flex flex-wrap rounded-lg" >
    {

        newData.map((restaurantCard)=><Link  key={restaurantCard.info.id} to={"/restaurant/"+restaurantCard.info.id+"/"+restaurantCard.info.name}>
         
          {/* higher component which take the component and return modified component  here, the input is card component */}
          {restaurantCard.info.isOpen?<RestaurantPromoted data={restaurantCard}/>:  <Card   data={restaurantCard}/>}
          {/* {console.log(restaurantCard.info)} */}
        </Link>)
    }
  </div>
}

export default RestaurantCard;