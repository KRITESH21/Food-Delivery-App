// import { CDN_URL } from "../utils/constants";

// const styleCard = {
//   backgroundColor: "#f0f0f0",
//   padding: "10px",
//   margin: "10px",
//   borderRadius: "8px",
//   textAlign: "center",
//   width: "220px",
//   boxShadow: "0px 2px 6px rgba(0,0,0,0.1)"
// };

const RestaurantCard = (resData) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.resData?.info;

  if (!name) return null;

  return (
    <div
      className="bg-[#f0f0f0] p-2.5 m-2 rounded-lg w-[220px] shadow-2xl hover:bg-gray-300" /*style={styleCard}*/
    >
      <img
        className="w-[200px] h-[140px] rounded-lg"
        alt={name}
        src={"https://media-assets.swiggy.com/" + cloudinaryImageId}
        // width="200"
        // height="140"
        // style={{ borderRadius: "8px" }}
      />
      <div className="flex flex-col font-sans font-semibold gap-y-4">
        <h3 className="font-bold py-3 text-lg">{name}</h3>
        <h4 className="underline decoration-sky-500 text-wrap">
          Rating: {avgRating} ⭐
        </h4>
        <h4 className="underline decoration-sky-500 text-wrap">
          Cuisines: {cuisines?.join(", ")}
        </h4>
        <h4 className="underline decoration-sky-500 text-wrap">
          Cost for 2: {costForTwo}
        </h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
