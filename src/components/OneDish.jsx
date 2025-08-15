export default function OneDish({ tittel, pris, ingredienser, kategori }) {
  console.log();

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
