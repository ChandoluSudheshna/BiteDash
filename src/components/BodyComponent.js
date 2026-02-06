import { categoriesList } from "../Config";
import RestrauntCard, { withPromotedLabel } from "./RestrauntCard";
import CategoriesCard from "./CategoriesCard";
import { FaSearch } from "react-icons/fa";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import Shimmer from "./Shimmer";
//import user from "./user.jpg";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

function filterData(searchText, restraunts) {
  const filterData = restraunts.filter((restraunt) =>
    restraunt?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase()),
  );
  return filterData;
}

const BodyComponent = (props) => {
  // const [restraunts, setRestraunts] = useState(restrauntList);
  // const [restraunts, setRestraunts] = useState([]);
  const [allRestruants, setAllRestruants] = useState([]);
  const [filteredRestraunts, setFilteredRestraunts] = useState([]);
  const [searchText, setSearchText] = useState("");
  // const searchvar = useState();
  // const [searchtxt, setSearchTxt] = searchvar; // can destructure like this also

  const RestaurantCardPromoted = withPromotedLabel(RestrauntCard);

  useEffect(() => {
    getRestaurants();
    // const timer = setInterval(()=>{
    //     console.log("Etest")
    // },1000)
    // console.log("Useeffect")
    // return () => {
    //     clearInterval(timer)
    //     console.log("UseEffect return")
    // }
  }, []);

  // console.log("render");

  async function getRestaurants() {
    // https://corsproxy.io/?
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.509548&lng=78.40595&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    // console.log(json);
    setAllRestruants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilteredRestraunts(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <p className="offline">
        Looks like you're offline!! Please check your internet connection.
      </p>
    );

  const { loggedInUser, setUserInfo } = useContext(UserContext);

  // know as early return - not render component when restraunts are empty
  if (!allRestruants) return null; // can return JSX also

  // if(filteredRestraunts?.length == 0) return <h1>No Restaurants match your filter!</h1>

  return allRestruants?.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <div className="searchHeader">
        <h1 className="text">What's on your mind?</h1>
        <div>
          <label>User Name: </label>
          <input
            className="border border-black p-2"
            onChange={(e) => setUserInfo(e.target.value)}
            value={loggedInUser}
          />
        </div>
        <span className="search">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            className="search-input"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="searchButton"
            onClick={() => {
              const data = filterData(searchText, allRestruants);
              setFilteredRestraunts(data);
            }}
          >
            <FaSearch />
          </button>
        </span>
        {/* <img src={user} /> */}
      </div>
      <div className="categorieslist">
        {categoriesList.map((category) => {
          return <CategoriesCard {...category.data} key={category.data.id} />;
        })}
      </div>
      <hr className="divider"></hr>
      <span className="text">Restaurants with online food delivery</span>
      <div className="restrauntlist">
        {filteredRestraunts?.length == 0 ? (
          <h1 className="text">
            Oops! No matches here. Ready to explore different flavors?!
          </h1>
        ) : (
          filteredRestraunts.map((restraunt) => {
            return (
              <Link
                key={restraunt.info?.id}
                to={"/restaurant/" + restraunt.info?.id}
              >
                {restraunt.info.isOpen ? (
                  <RestaurantCardPromoted
                    cloudinaryImageId={restraunt.info?.cloudinaryImageId}
                    name={restraunt.info?.name}
                    cuisines={"Asian, " + restraunt.info?.cuisines}
                    deliveryTime={restraunt.info?.sla?.slaString}
                    avgRating={restraunt.info?.avgRating}
                  />
                ) : (
                  <RestrauntCard
                    cloudinaryImageId={restraunt.info?.cloudinaryImageId}
                    name={restraunt.info?.name}
                    cuisines={"Asian, " + restraunt.info?.cuisines}
                    deliveryTime={restraunt.info?.sla?.slaString}
                    avgRating={restraunt.info?.avgRating}
                  />
                )}
              </Link>
            );
            // return <RestrauntCard {...restraunt.info} deliveryTime={restraunt.info?.sla?.slaString} key={restraunt.info?.id}/>;
          })
        )}
        {/* key={restraunt.data.id} */}
        {/* <RestrauntCard name = {restrauntList[0].data.name} deliveryTime = {restrauntList[0].data.deliveryTime} cuisines = {restrauntList[0].data.cuisines} /> */}
        {/* can also be written using spread operator */}
        {/* <RestrauntCard {...restrauntList[0].data} />
                <RestrauntCard {...restrauntList[1].data} />
                <RestrauntCard {...restrauntList[2].data} />
                <RestrauntCard {...restrauntList[3].data} /> */}
      </div>
    </div>
  );
};

export default BodyComponent;
