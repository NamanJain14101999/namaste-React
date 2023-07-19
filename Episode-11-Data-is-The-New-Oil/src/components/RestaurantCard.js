import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

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

 const {loggedInUser} = useContext(UserContext);

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
      <h4 className="text-xl">{loggedInUser}</h4>
    </div>
  );
};

// Higher Order Component

// input -  RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black ml-4 p-2 text-white rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
