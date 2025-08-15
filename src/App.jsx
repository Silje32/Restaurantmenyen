import "./App.css";
import OneDish from "./components/OneDish.jsx";
import meny from "./data/MenuArray.jsx";

function App() {
  return (
    <>
      <h1>Restaurantmenyen</h1>
      <OneDish
        tittel="{meny.tittel}"
        pris="{meny.pris}"
        ingredienser="{meny.ingredienser}"
        kategori="{meny.kategori}"
      />
    </>
  );
}

export default App;
