import Moon from "./Moon";
import Sun from "./Sun";

import { useThemeSwitch } from "../hooks/useThemeSwitch";

const Header = () => {
  const { theme, changeTheme } = useThemeSwitch();

  return (
    <header className="flex justify-between gap-2">
      <h1 className="dark:text-white text-slate-900 text-2xl font-bold">
        devfinder
      </h1>
      {theme === "dark" ? (
        <button onClick={changeTheme} className="flex gap-1 items-center">
          <p className="text-sm tracking-widest font-bold text-white">
            LIGHT
          </p>
          <Sun />
        </button>
      ) : (
        <button onClick={changeTheme} className="flex gap-1 items-center">
          <p className="text-sm tracking-widest font-bold text-slate-900">
            DARK
          </p>
          <Moon />
        </button>
      )}
    </header>
  );
};

export default Header;
