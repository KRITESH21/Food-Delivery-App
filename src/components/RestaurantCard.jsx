// import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
  padding: "10px",
  margin: "10px",
  borderRadius: "8px",
  textAlign: "center",
  width: "220px",
  boxShadow: "0px 2px 6px rgba(0,0,0,0.1)"
};

const RestaurantCard = ( resData ) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.resData?.info;
    // console.log("resData", resData);

  if (!name) return null;

  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt={name}
        src={"https://media-assets.swiggy.com/" + cloudinaryImageId}
        width="200"
        height="140"
        style={{ borderRadius: "8px" }}
      />
      <div>
        <h3>{name}</h3>
        <h4>{avgRating} ⭐</h4>
        <h4>{cuisines?.join(", ")}</h4>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
