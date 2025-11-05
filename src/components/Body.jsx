import RestaurantCard from "./ReastaurantCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8428899&lng=77.64537949999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#");
    const res = await data.json();
    console.log("res", res);

    const restaurants =
      res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    setlistOfRestaurants(restaurants);
    setfilteredRestaurant(restaurants);
    // console.log("restaurants", restaurants);
  };

  const handleFilter = () => {
    const filteredRestaurant = listOfRestaurants.filter(
      (restaurant) =>
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
          <Link to = {`/restaurant/${restaurant?.info?.id}`} key={restaurant?.info?.id}><RestaurantCard resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
