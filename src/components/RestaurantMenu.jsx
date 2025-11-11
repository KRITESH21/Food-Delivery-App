import useRestaurantMenu from "../utils/useRestaurantMenu";
import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantMenu = () => {
  const resMenuData = useRestaurantMenu();
  const [accordionOpen1, setAccordionOpen1] = useState(false);
  const [accordionOpen2, setAccordionOpen2] = useState(false);
  const [accordionOpen3, setAccordionOpen3] = useState(false);

  const accordion1 = () => {
      setAccordionOpen1(!accordionOpen1);
    }
    const accordion2 = () => {
      setAccordionOpen2(!accordionOpen2);
    }
    const accordion3 = () => {
      setAccordionOpen3(!accordionOpen3);
    }

  if (resMenuData.length == 0) {
    return <h1>Loading</h1>;
  }

  return (
    <div className="m-4 p-4">
      <div className="m-1 p-2">
        <div className="flex justify-between items-center bg-gray-200 m-1 p-2">
          <button className="font-medium" onClick={accordion1}>
            Header
          </button>
          <div>⬇</div>
        </div>
        <div>
          {accordionOpen1 && <ItemList />}
        </div>
      </div>
       <div className="m-1 p-2">
        <div className="flex justify-between items-center bg-gray-200 m-1 p-2">
          <button className="font-medium" onClick={accordion2}>
            Header
          </button>
          <div>⬇</div>
        </div>
        <div>
          {accordionOpen2 && <ItemList />}
        </div>
      </div>
       <div className="m-1 p-2">
        <div className="flex justify-between items-center bg-gray-200 m-1 p-2">
          <button className="font-medium" onClick={accordion3}>
            Header
          </button>
          <div>⬇</div>
        </div>
        <div>
          {accordionOpen3 && <ItemList />}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
