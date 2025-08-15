import { meny } from "../data/MenuArray.jsx";

export function MenuList(dish) {
  const [...rest] = tall;
  console.log(...rest);

  return (
    <div>
      <h1>Restaurantmenyen</h1>
      {dish.map((dish) => {
        <MenuList meny={dish} />;
      })}
    </div>
  );
}
