import { useContext, useState } from "react";
import { DarkModeContext } from "../context";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const [darkMode, setDarkMode] = useContext(DarkModeContext);
  console.log("dark mode", darkMode);
  return (
    <header>
    </header>
  );
}
