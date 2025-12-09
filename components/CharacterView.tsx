// components/CharacterView.tsx
import React from 'react';

// Mapeamento simples de personagens para imagens
const CHARACTER_IMAGES: Record<string, string> = {
  alice: 'https://i.ibb.co/xxxxx/alice.png',
  bob: 'https://i.ibb.co/yyyy/bob.png',
  // adicione todos os personagens aqui
};

interface CharacterProps {
  character: { id: string; name?: string }; // recebe o objeto character
  isScanning?: boolean;
  anomalyType?: string;
  mode?: 'room' | 'other';
}

export function CharacterView({ character, isScanning, anomalyType, mode }: CharacterProps) {
  // Escolhe a imagem correta do personagem ou uma padrão
  const imageUrl = CHARACTER_IMAGES[character.id] || 'https://i.ibb.co/default-avatar.png';

  return (
    <div className={`relative w-48 h-64 flex flex-col items-center justify-end ${isScanning ? 'animate-pulse' : ''}`}>
      {isScanning && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-red-700 text-white text-xs px-2 py-1 rounded">
          SCAN ATIVO
        </div>
      )}
      <img
        src={imageUrl}
        alt={character.name || character.id}
        className={`w-full h-auto rounded-lg object-contain ${anomalyType ? 'border-2 border-yellow-400' : ''}`}
      />
      <p className="text-white text-xs mt-2 font-mono">{character.name || character.id}</p>
    </div>
  );
}

export default CharacterView;
