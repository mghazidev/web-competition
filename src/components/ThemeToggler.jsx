import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  React.useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <p>Curren theme is {theme}</p>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
};

export default ThemeToggler;
