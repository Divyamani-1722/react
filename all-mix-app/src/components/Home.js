import React from "react";
import { useTheme } from "../context/ThemeContext";

const Home = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h1>Welcome to the {theme} theme!</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Home;
