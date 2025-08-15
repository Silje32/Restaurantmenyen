export default function OneDish(menu) {
  console.log(menu);

  return (
    <>
      <div>
        <h1>{menu.tittel}</h1>
        <h3>{menu.pris}</h3>
        <h3>{menu.ingredienser}</h3>
        <h3>{menu.kategori}</h3>
      </div>
    </>
  );
}
