import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = resData?.data;

  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 h-[550px]">
      <img
        className="res-logo rounded-lg h-[200px] mx-auto"
        src={CDN_URL + cloudinaryImageId}
        alt="pizza"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="font-semibold pb-2">{cuisines.join(",  ")}</h4>
      <h4 className="font-extrabold pb-2">{avgRating} Starts✨</h4>
      <h4 className="font-black pb-2 underline">₹{costForTwo / 100} FOR TWO</h4>
      <h4 className="text-xl">{deliveryTime} mintues</h4>
    </div>
  );
};

export default RestaurantCard;
