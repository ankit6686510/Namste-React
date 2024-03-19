import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6558126&lng=77.2419522&restaurantId=396278&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json(); //convert data ko fetch krne m
    console.log(json);
    setresInfo(json.data);
  };
  const {name ,cuisines,costForTwoMessage,avgRating} = resInfo?.cards[0]?.card?.card?.info || {};
  const {itemCards} = resInfo?.cards[2]?.
  // if(resInfo === null) return <Shimmer/>;
  //ternary operator 

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines}</h3>
      <h3>{costForTwoMessage}</h3>
      <h3>{avgRating}</h3>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Diet-Coke</li>
      </ul>
    </div>
  );
};
export default RestaurantMenu;
