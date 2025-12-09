// components/CharacterView.tsx
import React from "react";
import { CharacterData } from "../types";

interface CharacterViewProps {
  character: CharacterData;
  isScanning?: boolean;
  anomalyType?: string;
  mode?: "room" | "dialogue";
}

export const CharacterView: React.FC<CharacterViewProps> = ({
  character,
  isScanning = false,
  anomalyType,
  mode = "room",
}) => {
  if (!character) return null;

  return (
    <div
      className={`relative flex flex-col items-center justify-center ${
        mode === "room" ? "w-48" : "w-32"
      }`}
    >
      {/* Imagem do personagem */}
      <img
        src={character.imageUrl}
        alt={character.name}
        className={`object-contain transition-all duration-300 ${
          isScanning ? "animate-pulse border-4 border-red-500" : ""
        }`}
        onError={(e) => {
          // fallback caso a imagem falhe
          (e.currentTarget as HTMLImageElement).src =
            "https://via.placeholder.com/150?text=Imagem+inexistente";
        }}
      />

      {/* Nome do personagem */}
      <span className="mt-2 text-white font-mono text-xs text-center">
        {character.name}
      </span>

      {/* Anomalia ou status */}
      {anomalyType && (
        <span className="mt-1 text-yellow-300 font-mono text-xs">
          {anomalyType.toUpperCase()}
        </span>
      )}
    </div>
  );
};

export default CharacterView;
