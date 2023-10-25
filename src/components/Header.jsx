import useThemeContext from "../providers/useThemeContext";

const Header = () => {
  const { theme, handleThemeChange } = useThemeContext();
  return (
    <div className="headerContext">
      <p>Inicio</p>
      <button
        onClick={handleThemeChange}
        style={{ background: theme.buttonBackground, color: theme.font }}
      >
        Change theme
      </button>
    </div>
  );
};

export default Header;
