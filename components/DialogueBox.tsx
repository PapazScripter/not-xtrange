// components/DialogueBox.tsx
import React from 'react';

export function DialogueBox({ text }: { text: string }) {
  return (
    <div className="dialogue-box">
      <p>{text}</p>
    </div>
  );
}
