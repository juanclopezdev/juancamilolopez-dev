// app/components/ThemeSwitch.tsx
"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";
import { RiMenuSearchFill } from "react-icons/ri";

export default function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();

  return resolvedTheme === "dark" ? (
    <div className=" w-20 h-full flex justify-center items-center">
      <RiMenuSearchFill
        onClick={() => setTheme("dark")}
        className="w-[50%] h-[50%] cursor-pointer transition-all ease-in-out duration-200"
      />
    </div>
  ) : (
    <div className=" w-20 h-full flex justify-center items-center">
      <RiMenuSearchFill
        onClick={() => setTheme("dark")}
        className="w-[50%] h-[50%] cursor-pointer transition-all ease-in-out duration-200 "
      />
    </div>
  );
}
