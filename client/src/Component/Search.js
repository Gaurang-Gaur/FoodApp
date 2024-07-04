import { useState, useEffect ,useContext} from "react"; // name import
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useStatusOnline from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";

const Search = () => {
  // imp:local state
  const [filterArrayOfRes, setfilterArrayOfRes] = useState([]);
  const [searchbox, setsearchbox] = useState("");
  const [solveBugSearchBar, setsolveBugSearchBar] = useState([]);
  const {setUserName, logginUser}=useContext(userContext);

  const fetchapi = async () => {
    const data = await fetch(
      "https://gaurang-gaur.github.io/host_api/apiData.json"
    );
    if (!data) {
      console.log("api is not fetch");
    }

    const json = await data.json();
    const dataArray = json.data.cards;

    const restaurantArray =
      dataArray[1].card.card.gridElements.infoWithStyle.restaurants;
    // console.log(restaurantArray)

    setfilterArrayOfRes(restaurantArray);
    setsolveBugSearchBar(restaurantArray);
    // console.log("run")
  };

  //. hook for api start
  useEffect(() => {
    fetchapi();
  }, []);

  //. hook for api ends

  //   if(filterArrayOfRes.length===0)
  // {
  //   return <Shimmer/>
  // }

  const searchForMe = () => {
    const newSearchFilterArray = filterArrayOfRes.filter((res) =>
      res.info.name.toLowerCase().includes(searchbox.toLowerCase())
    );

    // setfilterArrayOfRes(newSearchFilterArray);
    setsolveBugSearchBar(newSearchFilterArray);
  };

  //. online status

  const onlineStatus = useStatusOnline();

  if (onlineStatus === false) {
    return <h1> oops you are offline</h1>;
  }

  let filterList = [];

  // imp:Conditional Render

  return filterArrayOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-4 m-4">
      <div className=" w-4/12 mx-auto">
        <input
          type="search"
          placeholder="type..."
          className="border border-solid border-black rounded-sm  px-3 hover:bg-gray-100"
          value={searchbox}
          onChange={(e) => {
            setsearchbox(e.target.value);
          }}
        />

        <input className="border border-black mx-2" placeholder="typeuserName" value={logginUser} onChange={(e)=>{setUserName(e.target.value)}}/>

        <button
          className="bg-green-400 px-4 mx-12 rounded-sm hover:bg-green-500  "
          onClick={searchForMe}
        >
          {" "}
          Search{" "}
        </button>

        {/* <button
        className="bg-green-400 px-3 rounded-sm"
        onClick={() => {
          filterList = solveBugSearchBar.filter(
            (topRate) => topRate.info.rating.aggregate_rating >= 4
          );
          setsolveBugSearchBar(filterList);
        }}
      >
      
        TopRate
      </button> */}
      </div>
      <RestaurantCard gitData={solveBugSearchBar} />
    </div>
  );
};
export default Search;
