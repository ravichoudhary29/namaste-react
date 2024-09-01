import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRatingString,
    costForTwo,
    areaName,
  } = resData?.info;
  console.log(resData?.info);
  const { loggedInUser } = useContext(UserContext);
  return (
    <section className="m-4 p-4 w-[250px] h-auto rounded-lg bg-slate-200 hover:bg-slate-400">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={`${CDN_URL + cloudinaryImageId}`}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Ratings {avgRatingString}</h4>
      <h5>{costForTwo}</h5>
      <h5>{areaName}</h5>
      <h4>{loggedInUser}</h4>
    </section>
  );
};

// Higer order component
// input - Reataurant ==> Reataurant card open

export const withOpenLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Open
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
