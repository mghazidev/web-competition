import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";

const ThemeToggler = () => {
  // const { theme, toggleTheme } = useContext(ThemeContext);
  const theme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  React.useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <p>Curren theme is {theme}</p>
      {/* <button onClick={toggleTheme}>Toggle</button> */}
      <button onClick={() => dispatch(toggleTheme())}>Toggle</button>
    </div>
  );
};

export default ThemeToggler;
