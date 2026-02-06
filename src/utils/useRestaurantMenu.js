import { useEffect, useState } from "react";
import { MENU_API, RestaurantMenuData } from "../utils/constants";


const useRestaurantMenu = (restruantId) => {

    const [resInfo, SetResInfo] = useState(null);

    useEffect(()=>{
        // fetchData();

        if(!restruantId) return;
        const menuData = RestaurantMenuData[restruantId];

        setTimeout(() => {
            SetResInfo(menuData?.data || null);
        }, 500);

    },[restruantId])

    // const fetchData = async () => {
    //     const data = await fetch(MENU_API + restruantId);
    //     const json = await data.json();
    //     SetResInfo(json.data);
    // }

    return resInfo;
}

export default useRestaurantMenu;