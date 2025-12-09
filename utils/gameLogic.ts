// utils/gameLogic.ts

export function startGame() {
  console.log("startGame() foi chamado");
}

export function stopGame() {
  console.log("stopGame() foi chamado");
}

export function getRandomEvent() {
  return "Evento aleatório gerado!";
}

export default {
  startGame,
  stopGame,
  getRandomEvent
};

