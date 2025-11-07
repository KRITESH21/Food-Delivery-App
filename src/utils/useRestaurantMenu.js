import { MENU_API } from "../utils/constants";
import { useState, useEffect } from "react";

const useRestaurantMenu = () => {
  const [resMenuData, setResMenuData] = useState("");

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API);
    const res = await data.json();
    const details = res?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setResMenuData(details);
};
return resMenuData;
};

export default useRestaurantMenu;
