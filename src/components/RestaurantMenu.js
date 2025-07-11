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

    const {name, cuisines, costForTwoMessage, avgRatingString, totalRatingsString, locality, sla} = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards, title} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards)

    const itemCount = itemCards?.length || 0;

    return (
        <div className="menu">
            <Container className="menuContainer">
                <h1>{name}</h1>
                <Container className="menuDetails border rounded">
                    <p>
                        <span className="rating"><span className="star">✪</span> {avgRatingString}</span>
                        <span className="rating"> ({totalRatingsString})</span>
                        <span className="rating"> • {costForTwoMessage}</span>
                    </p>
                    <p className="cuisines">{cuisines.join(", ")}</p>
                    <p><span className="rating">Outlet - </span>{locality}</p>
                    <p className="rating">{sla?.slaString}</p>
                </Container>   
                <p className="designMenu">↫ Menu ↬</p>                             
                <h2>Recommended ({itemCount})</h2>
                {itemCount === 0? 
                    (<p>Sorry, no items available.</p>):(<p></p>)
                }
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