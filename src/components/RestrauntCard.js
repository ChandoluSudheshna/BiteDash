import { useContext } from "react";
import { FaStar } from "react-icons/fa";
import UserContext from "../utils/UserContext";

// props or we can destructure it like { restraunt }
const RestrauntCard = ({cloudinaryImageId, name, cuisines, deliveryTime, avgRating}) => {
    // console.log(restraunt);
    // destructing restraunt - can do it about also instead of restraunt
    // const {image, name, cuisines, deliveryTime, avgRating} = restraunt.data;
    const {loggedInUser} = useContext(UserContext);
    return(
        <div className="card">
            {/* instead of props.restraunt.image, after destructuring, we can write as restraunt.image*/}
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}/>
            <h2>{name}</h2>
            <p><FaStar style={{color: 'Green'}}/> {avgRating} 
                <span>.</span> 
                {deliveryTime}
            </p>
            <h3>{cuisines}</h3>
            {/* .join(", ") */}
            {/* <h4>{loggedInUser}</h4> */}
        </div>
    ); 
}

export const withPromotedLabel = (RestrauntCard) => {
    return (props) => {
        return(
            <div>
                <p className="absolute z-20 m-2 p-1 rounded bg-black text-white">Open</p>
                <RestrauntCard {...props } />
            </div>
        )
    }
}
 
export default RestrauntCard;