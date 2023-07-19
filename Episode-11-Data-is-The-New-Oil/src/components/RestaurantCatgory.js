import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, index,dummy }) => {
  // console.log(data);
  // const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    //   console.log("clicked");
    // setShowIndex(index);
    // console.log("show index", showItems);
    if (showItems) {
      setShowIndex(null);
    } else {
      setShowIndex(index);
    }
    //   setShowItems(!showItems);
  };
  return (
    <div>
      {/* header */}
      <div className="w-6/12 mx-auto my-8 bg-gray-50 shadow-lg p-4 ">
        <div
          onClick={handleClick}
          className="flex justify-between cursor-pointer"
        >
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span>⬇</span>
        </div>
        {showItems && <ItemList items={data.itemCards} dummy={dummy} />}
      </div>
      {/* accordion body */}
    </div>
  );
};

export default RestaurantCategory;
