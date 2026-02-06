const GroceryCard = ({ imageId, catagoryName }) => {
  return (
    <div className="m-2">
      <img className="w-30 h-30"
        src={
          "https://instamart-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200/" +
          imageId
        }
      />
      <p className="no-underline text-black font-medium text-sm text-center line-clamp-2 w-30">{catagoryName}</p>
    </div>
  );
};

export default GroceryCard;
