// components/CharacterView.tsx
import React from 'react';
import { CharacterData } from '../types'; // se você tiver tipos definidos

interface CharacterViewProps {
  character: CharacterData;
  isScanning?: boolean;
  anomalyType?: string;
  mode?: string;
}

export function CharacterView({ character, isScanning, anomalyType, mode }: CharacterViewProps) {
  console.log('CharacterView render', character.name);

  return (
    <div className="relative">
      {/* Imagem do personagem */}
      <img 
        src={character.image || 'https://i.ibb.co/Y4hmRz8w/quarto.png'} 
        alt={character.name} 
        className="w-48 h-auto rounded-lg"
      />

      {/* Informações extras */}
      {isScanning && <div className="absolute top-0 left-0 bg-red-500 text-white p-1 text-xs">SCANNING</div>}
      {anomalyType && <div className="absolute bottom-0 left-0 bg-yellow-500 text-black p-1 text-xs">{anomalyType}</div>}
    </div>
  );
}

export default CharacterView;
