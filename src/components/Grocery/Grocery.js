import { useEffect, useState } from "react";
import useOnlineStatus from "../../utils/useOnlineStatus";
import Shimmer from "../Shimmer";
import GroceryCard from "./GroceryCard";
import { Link } from "react-router-dom";

const Grocery = () => {
  const [groceryData, setGroceryData] = useState(null);
  const [snacksData, setSnacksData] = useState([]);
  const [beautyData, setBeautyData] = useState([]);
  const [lifestyleData, setLifestyleData] = useState([]);

  useEffect(() => {
    getGrocery();
  }, []);

  async function getGrocery() {
    const data = await fetch(
      "https://www.swiggy.com/api/instamart/home/v2?offset=1&layoutId=4987&storeId=1396027&primaryStoreId=1396027&secondaryStoreId=1401472&clientId=INSTAMART-APP",
    );
    const json = await data.json();
    console.log(json);
    const groceryCatogories =
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info;
    setGroceryData(groceryCatogories || []);
    const snacksCatogories =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info;
    setSnacksData(snacksCatogories || []);
    const beautyCatogories =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.info;
    setBeautyData(beautyCatogories || []);
    const lifestyleCatogories =
      json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.info;
    setLifestyleData(lifestyleCatogories || []);
  }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <p className="offline">
        Looks like you're offline!! Please check your internet connection.
      </p>
    );

  if (!groceryData || !snacksData || !beautyData || !lifestyleData) return null;

  return groceryData?.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="m-5">
      <div className="m-3">
        <p className="text-xl font-bold">Grocery & Kitchen</p>
        <div className="flex">
          {groceryData.map((grocery) => {
            return (
              <Link to={"/groceryMenu"} key={grocery.id}>
              <GroceryCard
                key={grocery.id}
                imageId={grocery?.imageId}
                catagoryName={grocery?.description}
              />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="m-3">
        <p className="text-xl font-bold">Snacks & drinks</p>
        <div className="flex">
          {snacksData.map((snack) => {
            return (
              <GroceryCard
                key={snack.id}
                imageId={snack?.imageId}
                catagoryName={snack?.description}
              />
            );
          })}
        </div>
      </div>
      <div className="m-3">
        <p className="text-xl font-bold">Beauty & Wellness</p>
        <div className="flex">
          {beautyData.map((beauty) => {
            return (
              <GroceryCard
                key={beauty.id}
                imageId={beauty?.imageId}
                catagoryName={beauty?.description}
              />
            );
          })}
        </div>
      </div>
      <div className="m-3">
        <p className="text-xl font-bold">Household & Lifestyle</p>
        <div className="flex">
          {lifestyleData.map((life) => {
            return (
              <GroceryCard
                key={life.id}
                imageId={life?.imageId}
                catagoryName={life?.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Grocery;
