import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    // how to read a dynamic url params
    // const params = useParams();
    // const {id} = params;
    // Above 2 statements can also be written as below.
    const {resId} = useParams();
    //console.log(params);
    //console.log(params.id);

    return(
        <div>
            <h1>Restaurant id: {resId}</h1>
        </div>
    )
}

export default RestaurantMenu;