// utils/audio.ts
// Arquivo completo para o App.tsx — funções de áudio simuladas para evitar erros de build

// Ambiente sonoro
export function playAmbience() {
  console.log("playAmbience called");
}

export function stopAmbience() {
  console.log("stopAmbience called");
}

// Efeitos sonoros
export function playSFX(name?: string) {
  console.log("playSFX called with:", name);
}

// Música
export function playMusic(track?: string) {
  console.log("playMusic called with:", track);
}

export function stopMusic() {
  console.log("stopMusic called");
}

// Violão ou cordas (exemplo)
export function playGuitarString(stringName?: string) {
  console.log("playGuitarString called with:", stringName);
}

// Export padrão (opcional, mas pode ser útil)
export default {
  playAmbience,
  stopAmbience,
  playSFX,
  playMusic,
  stopMusic,
  playGuitarString,
};
