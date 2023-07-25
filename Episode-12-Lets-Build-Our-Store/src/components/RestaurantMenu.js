import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCatgory";
import useRestrauntMenu from "../utils/useRestrauntMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestrauntMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  const dummy = "Dummy Data";

  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  const Categories =
    resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(Categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} -{costForTwoMessage}
      </p>
      {/* {categories accordions} */}

      {Categories.map((category, index) => (
        // controlled component
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          // setShowIndex={()=>setShowIndex(index)}
          setShowIndex={setShowIndex}
          index={index}
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
