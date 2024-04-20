import ItemList from "../Component/ItemList";
const RestaurantCategory = ({ data }) => {
  const { title, itemCards } = data;
  return (
    <div className="w-6/12 mx-auto bg-gray-200 shadow-lg  p-4">
      <div className="flex justify-between m-1">
        <span> {title} ({itemCards.length})</span>

        <span> ⏬</span>
      </div>
        <ItemList itemInfo={itemCards} />
    </div>
  );
};

export default RestaurantCategory;
