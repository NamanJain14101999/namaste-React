import RestaurantCard from "./RestaurantCard";
import React,{useState} from "react";
import resList from "../utils/mockData";

const Body = () => {

    // Local State Variable - Super powerful variable
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);

    //Normal JS Variable
    // let listOfRestaurants;

  return (
    <div className="body">
      {/* <div className="Seach">Search</div> */}
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter Logic here
            // setListOfRestaurants();
            const filteredList = listOfRestaurants.filter(res=>res.data.avgRating>4) 
            // console.log(listOfRestaurants);

            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* {resList.map((restaurant) => ( */}
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
