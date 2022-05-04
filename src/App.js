import "./styles.css";
import { useEffect, useState, useContext, createContext } from "react";
import Btn from "./Btn.js";

const themes = {
  default: {
    foreground: "darkmagenta",
    background: "white"
  },
  invert: {
    foreground: "white",
    background: "darkmagenta"
  }
};

const ThemeContext = createContext(themes);
export default function App() {
  const [themeChoice, setThemeChoice] = useState("default");

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <ThemeContext.Provider
        value={themeChoice === "default" ? themes.default : themes.invert}
      >
        <HeaderText />
      </ThemeContext.Provider>
      <Btn />
      <button
        onClick={() => {
          setThemeChoice(themeChoice === "default" ? "invert" : "default");
        }}
      >
        Change Theme
      </button>
    </div>
  );
}

function HeaderText(props) {
  return (
    <div>
      <ThemedText />
    </div>
  );
}

function ThemedText() {
  const theme = useContext(ThemeContext);
  return (
    <h2 style={{ background: theme.background, color: theme.foreground }}>
      Start editing to see some magic happen!
    </h2>
  );
}
