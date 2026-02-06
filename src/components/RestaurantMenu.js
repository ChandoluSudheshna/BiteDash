import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import MenuCard from "./MenuCard";
import { Container } from "react-bootstrap";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  // how to read a dynamic url params
  // const params = useParams();
  // const {id} = params;
  // Above 2 statements can also be written as below.
  const params = useParams();
  // console.log(params);
  // console.log(params.resid);

  const restruantId = params.resid;

  const resInfo = useRestaurantMenu(435405); // custom hook
  // console.log(resInfo);

  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRatingString,
    totalRatingsString,
    locality,
    sla,
  } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards, title } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  // console.log(itemCards)

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );

  // console.log(categories)

  const itemCount = itemCards?.length || 0;

  return (
    <div className="menu">
      <Container className="menuContainer">
        <h1>{name}</h1>
        <Container className="menuDetails border rounded">
          <p>
            <span className="rating">
              <span className="star">✪</span> {avgRatingString}
            </span>
            <span className="rating"> ({totalRatingsString})</span>
            <span className="rating"> • {costForTwoMessage}</span>
          </p>
          <p className="cuisines">{cuisines.join(", ")}</p>
          <p>
            <span className="rating">Outlet - </span>
            {locality}
          </p>
          <p className="rating">{sla?.slaString}</p>
        </Container>
        <p className="designMenu">↫ Menu ↬</p>
        {/* <h2>Recommended ({itemCount})</h2>
        {itemCount === 0 ? <p>Sorry, no items available.</p> : <p></p>} */}
      </Container>

      {categories.map((category, index) => (
        //controlled component
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(showIndex === index ? null : index)}
          dummy 
          // showIndex === index → accordion is open
          // Clicking again sets showIndex to null
          // showItems becomes false
          // Accordion collapses
        />
      ))}

      {/* <ul>
        {itemCards?.map((item) => (
          <li key={item.card?.info?.id}>
            <MenuCard
              name={item.card?.info?.name}
              price={item.card?.info?.price / 100}
              finalPrice={item.card?.info?.finalPrice / 100}
              rating={item.card?.info?.ratings?.aggregatedRating?.rating}
              ratingCount={
                item.card?.info?.ratings?.aggregatedRating?.ratingCountV2
              }
              description={item.card?.info?.description}
              menuImg={item.card?.info?.imageId}
            />
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
