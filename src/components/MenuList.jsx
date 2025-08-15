import OneDish from "./OneDish.jsx";

export default function MenuList({ meny }) {
  return (
    <div>
      <h1>MENY</h1>
      {meny.map((dish) => (
        <OneDish
          key="id"
          tittel="tittel"
          pris="pris"
          ingredienser="ingredienser"
          kategori="kategori"
        />
      ))}
    </div>
  );
}
