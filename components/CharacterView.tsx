// components/CharacterView.tsx

import React from "react";

export default function CharacterView({ character }: { character: any }) {
  if (!character) return null;

  return (
    <div
      style={{
        padding: "16px",
        background: "#222",
        color: "white",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        maxWidth: "400px",
      }}
    >
      <h2>{character.name || "Character"}</h2>
      {character.description && <p>{character.description}</p>}
      {character.image && (
        <img
          src={character.image}
          alt={character.name}
          style={{
            width: "100%",
            borderRadius: "8px",
            objectFit: "cover",
          }}
        />
      )}
    </div>
  );
}

