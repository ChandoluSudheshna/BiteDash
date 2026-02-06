import { MENU_IMG } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((item) => (
          <li
            key={item?.card?.info?.id}
            className="p-4 border-b border-gray-200 flex items-start gap-4"
          >            
            <div className="flex-1">
              <span className="block font-bold text-lg">
                {item?.card?.info?.name}
              </span>

              <span className="block font-bold mt-1">
                ₹
                {item?.card?.info?.defaultPrice
                  ? item?.card?.info?.defaultPrice / 100
                  : item?.card?.info?.price / 100}
              </span>

              <p className="text-sm mt-1">
                <span className="font-bold text-green-800">
                  ★ {item?.card?.info?.ratings?.aggregatedRating?.rating}
                </span>
                <span className="ml-1 text-gray-600">
                  (
                  {
                    item?.card?.info?.ratings?.aggregatedRating
                      ?.ratingCountV2
                  }
                  )
                </span>
              </p>

              <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                {item?.card?.info?.description}
              </p>
            </div>

            
            <div className="w-36 h-36 shrink-0 rounded-2xl overflow-hidden">
              <img
                src={MENU_IMG + item?.card?.info?.imageId}
                alt={item?.card?.info?.name}
                className="w-full h-full object-cover"
              />
              <button className="p-2 mx-16 bg-white text-green-800 shadow-lg absolute rounded-lg">Add +</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;