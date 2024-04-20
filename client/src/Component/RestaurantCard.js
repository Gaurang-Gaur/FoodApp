import Card, { promotedCard } from "./Card";
import { Link } from "react-router-dom";


const RestaurantCard = (props) => {
  const newData = props.gitData;
 

  const RestaurantPromoted = promotedCard(Card);

  // tip: when we set the width of div and then we can use the margin auto to make it center

  return (
    <div className="flex flex-wrap rounded-lg w-10/12 mx-auto">
      {newData.map((restaurantCard) => (
        <Link
          key={restaurantCard.info.id}
          to={
            "/restaurant/" +
            restaurantCard.info.id +
            "/" +
            restaurantCard.info.name
          }
        >
          {/* higher component which take the component and return modified component  here, the input is card component */}
          {restaurantCard.info.isOpen ? (
            <RestaurantPromoted data={restaurantCard} />
          ) : (
            <Card data={restaurantCard} />
          )}
        </Link>
      ))}
    </div>
  );
};

export default RestaurantCard;
