import "./App.css";
import MenuList from "./components/MenuList.jsx";
import OneDish from "./components/OneDish.jsx";
import { meny } from "./data/MenuArray.jsx";

function App() {
  return (
    <>
      <h1>Restaurantmenyen</h1>
      <MenuList meny={meny} />
      <OneDish />
    </>
  );
}

export default App;
