const RestaurantCard = (resData) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.resData?.info;

  if (!name) return null;

  return (
    <div
      className="bg-[#f0f0f0] p-2.5 m-2 rounded-lg w-[220px] shadow-2xl hover:bg-gray-300"
    >
      <img
        className="w-[200px] h-[140px] rounded-lg"
        alt={name}
        src={"https://media-assets.swiggy.com/" + cloudinaryImageId}
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

// Higher Order Component
// Since we do not have the promoted field in our API thats why commenting this code.

// export const labelRestaurantCard = (RestaurantCard) => {
//   return (props) => {
//     return (
//       <div>
//         <p>PROMOTED</p>
//         <RestaurantCard {...props}/>
//       </div>
//     )
//   }
// }

export default RestaurantCard;
