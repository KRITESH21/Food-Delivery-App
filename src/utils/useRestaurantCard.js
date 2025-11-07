import { useEffect, useState } from "react";

const useRestaurantCard = () => {
  const [restaurantsList, setRestaurantsList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8428899&lng=77.64537949999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#"
    );
    const res = await data.json();
    const restaurants =
      res?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRestaurantsList(restaurants);
  };

  return restaurantsList;
};
export default useRestaurantCard;
