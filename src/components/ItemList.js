import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = () => {
  const params = useParams();
  const { id } = params;
  const resMenuData = useRestaurantMenu();

  if (resMenuData.length == 0) {
    return <h1>Loading</h1>;
  }

  const dispatch = useDispatch();
  const handleAddItem = () => {
    dispatch(addItem("pizza"));
  };

  return (
    <div className="text-center border">
      {resMenuData.map((items) => {
        return <div key={items.info.id}>{items.info.name + id}</div>;
      })}
      <button className="border" onClick={handleAddItem}>Add Item</button>
    </div>
  );
};
export default ItemList;
