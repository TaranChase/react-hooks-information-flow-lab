// Header.js
function Header({ onDarkModeClick, darkMode }) {
  return (
    <header>
      <h1>Shopster</h1>
      <button onClick={onDarkModeClick}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}

export default Header;
