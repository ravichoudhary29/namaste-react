import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState();
  const { resId } = useParams();
  console.log(resId);
  useEffect(() => {
    fetchMenu();
  }, []);

  async function fetchMenu() {
    const data = await fetch(MENU_API_URL + resId);
    const json = await data.json();
    setResInfo(json.data);
  }
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
