export default function OneDish(props) {
  console.log(props);

  return (
    <>
      <div>
        <h1>{props.tittel}</h1>
        <h3>{props.pris}</h3>
        <h3>{props.ingredienser}</h3>
        <h3>{props.kategori}</h3>
      </div>
    </>
  );
}
