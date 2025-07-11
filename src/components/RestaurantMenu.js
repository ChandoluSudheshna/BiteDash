import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import MenuCard from "./MenuCard";
import { Container } from "react-bootstrap";

const RestaurantMenu = () => {
    // how to read a dynamic url params
    // const params = useParams();
    // const {id} = params;
    // Above 2 statements can also be written as below.
    const params = useParams();
    // console.log(params);
    // console.log(params.resid);

    const restruantId = params.resid;
    // console.log(restruantId)

    const [resInfo, SetResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API+restruantId)
        // const data = await fetch(MENU_API+restruantId+"&catalog_qa=undefined&submitAction=ENTER")
        const json = await data.json();
        console.log(json);
        SetResInfo(json.data);
    }    

    if(resInfo === null ) return <Shimmer/>

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards, title} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards)

    const itemCount = itemCards?.length || 0;

    return (
        <div className="menu">
            <Container className="menuContainer">
                <h1>{name}</h1>
                <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
                <h2>{title} ({itemCount})</h2>
            </Container>
            <ul>
                {itemCards?.map((item) => (
                    <li key={item.card?.info?.id}>
                        <MenuCard name = {item.card?.info?.name}
                            price = {item.card?.info?.price/100}
                            finalPrice = {item.card?.info?.finalPrice/100}
                            rating = {item.card?.info?.ratings?.aggregatedRating?.rating}
                            ratingCount= {item.card?.info?.ratings?.aggregatedRating?.ratingCountV2}
                            description = {item.card?.info?.description}
                            menuImg = {item.card?.info?.imageId}
                            />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu;