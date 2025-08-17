export default function OneDish({ tittel, pris, ingredienser, kategori }) {
  const array = tittel;
  console.log(array);

  return (
    <>
      <div>
        <h2>{tittel}</h2>
        <h3>{pris}</h3>
        <h3>{ingredienser}</h3>
        <h3>{kategori}</h3>
      </div>
    </>
  );
}
