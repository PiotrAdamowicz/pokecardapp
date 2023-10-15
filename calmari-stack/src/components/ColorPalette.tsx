import React from "react";

interface ColorPaletteProps {}

const ColorPalette: React.FC<ColorPaletteProps> = () => {
  return (
    <div className="w-full flex p-4 h-40">
      <div className="w-1/5 h-full bg-pkred-800"></div>
      <div className="w-1/5 h-full bg-pkred-500"></div>
      <div className="w-1/5 h-full bg-pkblue"></div>
      <div className="w-1/5 h-full bg-pkyellow-500"></div>
      <div className="w-1/5 h-full bg-pkyellow-800"></div>
    </div>
  );
};

export default ColorPalette;
