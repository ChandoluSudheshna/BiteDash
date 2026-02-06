import { Col, Container, Row, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
//   console.log(data);

    // const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        // setShowItems(!showItems); //if showitem is false make it true and vise versa - toggle feature
        setShowIndex();
    }

  return (
    <div>
      <Container>
        <div className="mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
          <div className="flex justify-between cursor-pointer" onClick={handleClick}>            
            <span className="font-bold text-lg">
              {data.title} ({data.itemCards.length})
            </span> 
            <span>⌄</span>
          </div>
          {showItems && <ItemList items={data.itemCards} /> }
        </div>
      </Container>
    </div>
  );
};

export default RestaurantCategory;
