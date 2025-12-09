// components/DialogueBox.tsx

import React from "react";

export default function DialogueBox({ text }: { text: string }) {
  return (
    <div
      style={{
        padding: "16px",
        background: "rgba(0,0,0,0.7)",
        color: "white",
        borderRadius: "8px",
        width: "100%",
        maxWidth: "500px",
        fontSize: "18px",
      }}
    >
      {text}
    </div>
  );
}

