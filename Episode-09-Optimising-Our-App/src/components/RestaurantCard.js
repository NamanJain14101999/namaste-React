import { CDN_URL } from "../utils/constants";

// import { CDN_URL } from "../../utils/constants";


const RestaurantCard = (props) => {
  const { resData } = props;

  const styleCard = {
    backgroundColor: "#f0f0f0 ",
  };

  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = resData?.data;

  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" src={CDN_URL + cloudinaryImageId} alt="pizza" />
      <h3>{name}</h3>
      <h4>{cuisines.join(",  ")}</h4>
      <h4>{avgRating} Starts✨</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} mintues</h4>
    </div>
  );
};

export default RestaurantCard;
