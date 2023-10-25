import useThemeContext from "../providers/useThemeContext";

const Layout = ({ children }) => {
  const { theme } = useThemeContext();
  return (
    <div
      className="layout"
      style={{ color: theme.font, background: theme.background }}
    >
      {children}
    </div>
  );
};

export default Layout;
