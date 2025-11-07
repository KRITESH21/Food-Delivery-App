import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useRestaurantCard from "../utils/useRestaurantCard";
import { useEffect } from "react";

const Body = () => {
  const listOfRestaurants = useRestaurantCard();
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setfilteredRestaurant(listOfRestaurants);
  }, [listOfRestaurants]);

  const handleFilter = () => {
    const filteredRestaurant = listOfRestaurants.filter((restaurant) =>
      restaurant?.info?.name.includes(searchText)
    );
    // console.log(filteredList)
    setfilteredRestaurant(filteredRestaurant);
  };

  return listOfRestaurants.length === 0 ? (
    <h1>Loading....</h1>
  ) : (
    <div className="body">
      <input
        type="text"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />

      <button className="filter-btn" onClick={handleFilter}>
        Find Top Rated Restaurants
      </button>

      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link
            to={`/restaurant/${restaurant?.info?.id}`}
            key={restaurant?.info?.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
