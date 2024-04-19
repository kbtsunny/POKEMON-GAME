import React from "react";
import { Button } from "./Button";

export interface CardProps {
  speed?: number;
  rank?: number;
  power?: number;
  image?: string;
  showFace?: boolean;
  disabled?: boolean;
  name?: string;
  category?: boolean;
  disabledCategory?: boolean;
  onClick?: () => void;
  onSpeedClick?: () => void;
  onRankClick?: () => void;
  onPowerClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  name,
  category,
  speed,
  rank,
  power,
  image,
  showFace,
  disabled,
  disabledCategory,
  onClick,
  onSpeedClick,
  onRankClick,
  onPowerClick,
}) => {
  const cardBaseClass = `
    border border-gray-300 flex items-center rounded-lg 
    px-4 py-8 w-32 h-44 sm:px-6 sm:py-10 sm:w-36 sm:h-52 md:px-6 md:py-8 md:w-36 md:h-48 lg:px-10 lg:py-10 lg:w-44 lg:h-56
  `;
  const enabledClass = `
    bg-white transform transition duration-300 ease-in-out hover:scale-105 cursor-pointer hover:shadow-lg
  `;
  const disabledClass = "bg-gray-200 text-gray-500";
  const backFaceClass = `
    bg-[#e67e22] text-white font-bold text-md flex justify-center items-center
  `;



  if (showFace && !category) {
    return (
      <div
        className={`${cardBaseClass} ${
          disabled ? disabledClass : enabledClass
        }`}
        onClick={!disabled ? onClick : () => {}}
      >
        <div className="flex flex-col gap-1 justify-between">
          <div className="text-md mb-5 font-bold">{name}</div>
          <img src={image} alt={name} />
          <div className={`text-md font-md ${disabled && "opacity-50"}`}>
            Speed: {speed}
          </div>
          <div className={`text-md font-md ${disabled && "opacity-50"}`}>
            Rank: {rank}
          </div>
          <div className={`text-md font-md ${disabled && "opacity-50"}`}>
            Power: {power}
          </div>
        </div>
      </div>
    );
  } else if (category && showFace) {
    return (
      <div className="flex flex-col">
        <div className={`${cardBaseClass}  ${disabled && "opacity-50"}`}>
          <div className="flex flex-col gap-2 justify-between">
            <div className="text-md mb-5 font-bold">{name}</div>
            <img src={image} alt={name} />
            <Button className={disabledCategory ? 'bg-gray-400' : 'bg-blue-300'} disabled={disabledCategory} title={`Speed ${speed}`} onClick={onSpeedClick} />
            <Button className={disabledCategory ? 'bg-gray-400' : 'bg-blue-300'} disabled={disabledCategory} title={`Rank ${rank}`} onClick={onRankClick} />
            <Button className={disabledCategory ? 'bg-gray-400' : 'bg-blue-300'} disabled={disabledCategory} title={`Power ${power}`} onClick={onPowerClick} />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={`${cardBaseClass} ${backFaceClass} ${
          disabled && "opacity-50"
        }`}
      >
        CARD BACK
      </div>
    );
  }
};
