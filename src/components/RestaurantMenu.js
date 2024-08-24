import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu();

  if (resInfo === null) <Shimmer />;

  const { name, cuisines, avgRatingString, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const menuItemArr =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card
      ?.itemCards || [];

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines?.join(", ")}</h2>
      <h4>{`${costForTwoMessage} : Ratings ${avgRatingString}`}</h4>
      <ul>
        {menuItemArr.map((item) => {
          return (
            <li key={item.card.info.id}>{`${item.card.info.name} : Rs ${
              item.card.info.price / 100
            }`}</li>
          );
        })}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
