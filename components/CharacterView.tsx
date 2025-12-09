// components/CharacterView.tsx
import React from 'react';

// Componente para exibir personagens
export function CharacterView({ characterId }: { characterId: string }) {
  console.log('CharacterView render', characterId);

  // Renderizar algo mínimo para build
  return (
    <div>
      <h2>Character: {characterId}</h2>
      <p>Visualização do personagem vai aqui.</p>
    </div>
  );
}

// Se você quiser, também pode ter um export default (opcional)
export default CharacterView;
