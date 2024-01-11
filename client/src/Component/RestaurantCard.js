
import Card from "./Card";


// .This newData is array now




const RestaurantCard = (props) => {

  
const newData=props.gitData;

 

  return <div id="res-card-container">
    {
        newData.map((restaurantCard)=><Card   key={restaurantCard.info.resId} data={restaurantCard}/>)
    }
  </div>
}

export default RestaurantCard;