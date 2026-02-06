import { useEffect, useState } from "react";
import useGroceryMenu from "../../utils/useGroceryMenu";

const GroceryMenu = () => {
  // const gmenuInfo = useGroceryMenu();
  // console.log(gmenuInfo)
  const [groceryMenuInfo, setGroceryMenuInfo] = useState([]);

  useEffect(() => {
    getGMenu();
  }, []);

  async function getGMenu() {
    const data = await fetch(
      "https://www.swiggy.com/api/instamart/category-listing/v2?categoryName=Fresh%20Vegetables&taxonomyType=Speciality%20taxonomy%201&offset=0&storeId=1388682&primaryStoreId=1388682&secondaryStoreId=",
    );
    const json = await data.json();
    console.log(json);
    setGroceryMenuInfo(json?.data);
  }

  return <div>menu</div>;
};

export default GroceryMenu;
