import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;
  const resMenuData = useRestaurantMenu();

  if (resMenuData.length == 0) {
    return <h1>Loading</h1>;
  }

  return (
    <div>
      <ul>
        {resMenuData.map((items) => {
          return <li key={items.info.id}>{items.info.name + id}</li>;
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
