
import Card from "./Card";
import data from "../utils/apiData.json";


// .This newData is array now
const newData=data.sections.SECTION_SEARCH_RESULT;




const RestaurantCard = (props) => {

  
const newData=props.newData;

 

  return <div id="res-card-container">
    {
        newData.map((restaurantCard)=><Card   key={restaurantCard.info.resId} data={restaurantCard}/>)
    }
  </div>
}

export default RestaurantCard;