import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resMenuData, setResMenuData] = useState("");
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(`https://namastedev.com/api/v1/listRestaurants/${id}`);
    const res = await data.json();
    console.log("res", res);
    const details = res?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log("details", details);
    setResMenuData(details);
  };

  return resMenuData === null ? (
    <h1>Loading</h1>
  ) : (
    <div>
      <ul>
        <li>{resMenuData.map((items)=>{
           return items.info.name
        })}</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
