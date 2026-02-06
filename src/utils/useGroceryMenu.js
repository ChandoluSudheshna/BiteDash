import { useState } from "react";

const useGroceryMenu = () =>{

    const [groceryMenuInfo, setGroceryMenuInfo] = useState(null);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/api/instamart/category-listing/v2?categoryName=Fresh%20Vegetables&taxonomyType=Speciality%20taxonomy%201&offset=0&storeId=1388682&primaryStoreId=1388682&secondaryStoreId=");
        const json = await data.json();
        console.log(json.data);
        setGroceryMenuInfo(json.data);
    }

    return groceryMenuInfo;

}

export default useGroceryMenu;