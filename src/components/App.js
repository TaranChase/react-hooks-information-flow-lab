// App.js
import { useState } from "react";
import Header from "./Header";
import ShoppingList from "./ShoppingList";
import items from "../data/items";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function handleDarkModeClick() {
    setDarkMode(!darkMode);
  }

  return (
    <div className={darkMode ? "App dark" : "App light"}>
      <Header onDarkModeClick={handleDarkModeClick} darkMode={darkMode} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
