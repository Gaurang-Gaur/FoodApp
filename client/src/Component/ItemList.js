import { RES_IMG_KEY } from "../utils/content.js";
const ItemList = ({ itemInfo }) => {

  return (
    <div>
      {itemInfo.map((item, index) => (
        <div>
          <div className="flex justify-end ">
            <img
              className="w-[100px]"
              src={RES_IMG_KEY + (item?.card?.info?.imageId || "")}
              onError={(e) => {
                e.target.src =
                  "https://cdn.georgeinstitute.org/sites/default/files/styles/width1920_fallback/public/2020-10/world-food-day-2020.png";
              }}
              alt="Image"
            />
            <button className="p-2  bg-white absolute  rounded-md hover:bg-black hover:text-white ">+</button>
          </div>
          <div
            key={index}
            className="flex justify-between  border-black  border-b-[0.1px] m-2 p-2"
          >
            <span className="font-bold">{item.card.info.name}</span>{" "}
            <span className="text-lg">
              {" "}
              Rs:
              {item.card.info.price / 100
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
          </div>
          <p>
            <span className="mx-5">Description:</span>
            <span className="text-xs  ">{item.card.info.description}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
