import { useEffect, useState } from "react";
import { MENU_API_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  // fetch the data

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const jsonData = await data.json();
    setResInfo(jsonData);
  };
  return resInfo;
};

export default useRestaurantMenu;
