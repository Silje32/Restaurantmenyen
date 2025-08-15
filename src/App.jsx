import "./App.css";
import MenuList from "./components/MenuList.jsx";
import { meny } from "./data/MenuArray.jsx";

function App() {
  return (
    <>
      <h1>Restaurantmenyen</h1>
      <MenuList meny={meny} />
    </>
  );
}

export default App;
