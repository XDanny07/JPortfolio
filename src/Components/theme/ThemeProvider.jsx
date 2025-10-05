import React, { createContext, useContext, useState } from "react";

const themes = {
  luxury: {
    name: "Luxury Monochrome",
    primary: "rgb(0, 0, 0)",
    secondary: "rgb(255, 255, 255)",
    accent: "rgb(212, 175, 55)",
    text: "rgb(0, 0, 0)",
    textLight: "rgb(115, 115, 115)",
    background: "rgb(255, 255, 255)",
    surface: "rgb(248, 248, 248)",
  },
  elegant: {
    name: "Elegant Neutrals",
    primary: "rgb(25, 25, 40)",
    secondary: "rgb(250, 248, 246)",
    accent: "rgb(212, 175, 55)",
    text: "rgb(25, 25, 40)",
    textLight: "rgb(107, 114, 128)",
    background: "rgb(250, 248, 246)",
    surface: "rgb(255, 255, 255)",
  },
  pastel: {
    name: "Elegant Pastels",
    primary: "rgb(147, 125, 194)",
    secondary: "rgb(255, 255, 255)",
    accent: "rgb(219, 148, 148)",
    text: "rgb(55, 65, 81)",
    textLight: "rgb(107, 114, 128)",
    background: "rgb(252, 252, 253)",
    surface: "rgb(255, 255, 255)",
  },
  bold: {
    name: "Edgy & Bold",
    primary: "rgb(30, 41, 59)",
    secondary: "rgb(255, 255, 255)",
    accent: "rgb(59, 130, 246)",
    text: "rgb(30, 41, 59)",
    textLight: "rgb(100, 116, 139)",
    background: "rgb(248, 250, 252)",
    surface: "rgb(255, 255, 255)",
  },
  earth: {
    name: "Earth Tones",
    primary: "rgb(120, 113, 108)",
    secondary: "rgb(68, 64, 60)",
    accent: "rgb(180, 83, 9)",
    text: "rgb(68, 64, 60)",
    textLight: "rgb(120, 113, 108)",
    background: "rgb(253, 252, 251)",
    surface: "rgb(255, 255, 255)",
  },
  dramatic: {
    name: "Dramatic Black & Red",
    primary: "rgb(0, 0, 0)",
    secondary: "rgb(255, 255, 255)",
    accent: "rgb(220, 38, 38)",
    text: "rgb(17, 24, 39)",
    textLight: "rgb(107, 114, 128)",
    background: "rgb(249, 250, 251)",
    surface: "rgb(255, 255, 255)",
  },
  midnight: {
    name: "Midnight Elegance",
    primary: "rgb(15, 23, 42)",
    secondary: "rgb(241, 245, 249)",
    accent: "rgb(192, 192, 192)",
    text: "rgb(15, 23, 42)",
    textLight: "rgb(71, 85, 105)",
    background: "rgb(248, 250, 252)",
    surface: "rgb(255, 255, 255)",
  },
  rosegold: {
    name: "Rose Gold Luxury",
    primary: "rgb(41, 37, 36)",
    secondary: "rgb(254, 252, 232)",
    accent: "rgb(236, 72, 153)",
    text: "rgb(41, 37, 36)",
    textLight: "rgb(120, 113, 108)",
    background: "rgb(254, 252, 232)",
    surface: "rgb(255, 255, 255)",
  },
  burgundy: {
    name: "Sophisticated Burgundy",
    primary: "rgb(127, 29, 29)",
    secondary: "rgb(254, 252, 232)",
    accent: "rgb(217, 119, 6)",
    text: "rgb(69, 26, 3)",
    textLight: "rgb(120, 53, 15)",
    background: "rgb(255, 251, 235)",
    surface: "rgb(255, 255, 255)",
  },
  emerald: {
    name: "Emerald Elegance",
    primary: "rgb(6, 78, 59)",
    secondary: "rgb(240, 253, 244)",
    accent: "rgb(245, 158, 11)",
    text: "rgb(6, 78, 59)",
    textLight: "rgb(75, 85, 99)",
    background: "rgb(247, 254, 231)",
    surface: "rgb(255, 255, 255)",
  },
  champagne: {
    name: "Champagne Luxury",
    primary: "rgb(92, 68, 33)",
    secondary: "rgb(255, 251, 235)",
    accent: "rgb(245, 158, 11)",
    text: "rgb(92, 68, 33)",
    textLight: "rgb(120, 113, 108)",
    background: "rgb(255, 251, 235)",
    surface: "rgb(254, 249, 195)",
  },
  navy: {
    name: "Navy & Copper",
    primary: "rgb(30, 58, 138)",
    secondary: "rgb(248, 250, 252)",
    accent: "rgb(194, 65, 12)",
    text: "rgb(30, 58, 138)",
    textLight: "rgb(71, 85, 105)",
    background: "rgb(248, 250, 252)",
    surface: "rgb(255, 255, 255)",
  },
  platinum: {
    name: "Platinum Noir",
    primary: "rgb(15, 15, 15)",
    secondary: "rgb(243, 244, 246)",
    accent: "rgb(148, 163, 184)",
    text: "rgb(31, 41, 55)",
    textLight: "rgb(107, 114, 128)",
    background: "rgb(249, 250, 251)",
    surface: "rgb(255, 255, 255)",
  },
  sunset: {
    name: "Sunset Glamour",
    primary: "rgb(124, 45, 18)",
    secondary: "rgb(255, 247, 237)",
    accent: "rgb(251, 146, 60)",
    text: "rgb(124, 45, 18)",
    textLight: "rgb(154, 52, 18)",
    background: "rgb(255, 251, 235)",
    surface: "rgb(255, 255, 255)",
  },
  royal: {
    name: "Royal Purple",
    primary: "rgb(88, 28, 135)",
    secondary: "rgb(250, 245, 255)",
    accent: "rgb(168, 85, 247)",
    text: "rgb(88, 28, 135)",
    textLight: "rgb(107, 33, 168)",
    background: "rgb(250, 245, 255)",
    surface: "rgb(255, 255, 255)",
  },
  obsidian: {
    name: "Obsidian & Gold",
    primary: "rgb(17, 24, 39)",
    secondary: "rgb(249, 250, 251)",
    accent: "rgb(217, 119, 6)",
    text: "rgb(17, 24, 39)",
    textLight: "rgb(75, 85, 99)",
    background: "rgb(255, 255, 255)",
    surface: "rgb(249, 250, 251)",
  },
};

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }) {
  const [currentTheme, setCurrentTheme] = useState("platinum");
  const theme = themes[currentTheme];

  const value = {
    theme,
    currentTheme,
    setCurrentTheme,
    themes,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
