// utils/gameLogic.ts
// Arquivo completo para App.tsx — funções simuladas para build Netlify

// Função que retorna a resposta de um personagem
export function getCharacterResponse(characterId: string, message: string) {
  console.log("getCharacterResponse called with:", characterId, message);
  // retornar algum valor de teste
  return "Resposta simulada do personagem";
}

// Função que retorna resultado da inspeção
export function getInspectionResult(visitorId: string, tool: string) {
  console.log("getInspectionResult called with:", visitorId, tool);
  // retornar algum valor de teste
  return "Resultado da inspeção simulada";
}

// Export padrão (opcional)
export default {
  getCharacterResponse,
  getInspectionResult,
};
