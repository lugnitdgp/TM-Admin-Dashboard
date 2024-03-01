import { createContext, useState } from "react";
import PropTypes from 'prop-types';
const ThemeContext = createContext();

export { ThemeContext };

export default function ThemeProvider(props) {
  const [theme, setTheme] = useState("");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "" : "dark"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

ThemeProvider.propTypes = {
  children: PropTypes.any.isRequired,
};
