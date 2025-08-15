export default function MenuList(meny) {
  const [...rest] = meny;
  console.log(...rest);

  return (
    <div>
      <h1>Restaurantmenyen</h1>
      {meny.map((dish) => {})}
    </div>
  );
}
