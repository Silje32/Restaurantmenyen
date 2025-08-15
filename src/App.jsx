import "./App.css";
import meny from "./components/MenuList.jsx";
import meny from "./data/MenuArray.jsx";

function App() {
  return (
    <>
      <h1>Restaurantmenyen</h1>
      <MenyList meny={meny} />
    </>
  );
}

export default App;
