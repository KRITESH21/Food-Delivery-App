import RestaurantCard from "./ReastaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {


  const [listOfRestaurants, setRestaurants] = useState(resList);


  return (
    <div className="body">
      <button
        className="filter-btn"
        onClick={() => {
          console.log("Button is Clicked");
          const filteredList = listOfRestaurants.filter((restaurant) => restaurant.card.card.info.avgRating > 4);
          setRestaurants(filteredList);
        }}
      >
        Filter Button
      </button>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.card.card.info.id}
            resData={restaurant}
          />
        ))}
        {/* <RestaurantCard
          resName={resList[1].card.card.info.name}
          cuisines={resList[1].card.card.info.cuisines}
          avgRating={resList[1].card.card.info.avgRating}
          costForTwo={resList[1].card.card.info.costForTwo}
          cloudinaryImageId={resList[1].card.card.info.cloudinaryImageId}
        /> */}
      </div>
    </div>
  );
};

export default Body;
