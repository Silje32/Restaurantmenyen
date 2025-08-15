import "./App.css";
import MenuList from "./components/MenuList.jsx";
import { meny } from "./data/MenuArray.jsx";

function App() {
  return (
    <>
      <MenuList meny={meny} />
    </>
  );
}

export default App;
