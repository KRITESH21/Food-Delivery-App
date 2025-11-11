import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const ItemList = () => {
  const params = useParams();
  const { id } = params;
  const resMenuData = useRestaurantMenu();

  if (resMenuData.length == 0) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="text-center border">
      {resMenuData.map((items) => {
        return <div key={items.info.id}>{items.info.name + id}</div>;
      })}
    </div>
  );
};
export default ItemList;
