import React, { useCallback } from "react";

import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import { useAppDispatch, useAppSelector } from "~/redux/hooks";

import { toggleDarkMode, getDarkMode } from "./slice";

export const DarkModeButton: React.FC = () => {
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector(getDarkMode);
  const toggle = useCallback(() => {
    dispatch(toggleDarkMode());
  }, []);

  return (
    <button onClick={toggle} className="h-5 w-5 text-gray-800">
      {darkMode ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default DarkModeButton;
