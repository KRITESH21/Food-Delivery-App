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
    <div className="flex flex-wrap justify-start">
      <div className="flex gap-x-4 m-8">
        <input
          className="border border-gray-300 rounded px-3 py-2"
          type="text"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleFilter}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap gap-4 justify-start text-sm/6">
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
