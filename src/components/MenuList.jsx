export default function MenuList({ meny }) {
  return (
    <div>
      <h1>RETTER</h1>
      {meny.map((dish) => (
        <OneDish
          key="dish.id"
          tittel="dish.tittel"
          pris="dish.pris"
          ingredienser="dish.ingredienser"
          kategori="dish.kategori"
        />
      ))}
    </div>
  );
}
