import { GoogleGenAI } from "@google/genai";
import { MOCK_WINES } from "../constants";

const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY
});

const wineCatalog = MOCK_WINES.map(w => ({
  name: w.name,
  category: w.drinkCategory,
  type: w.type,
  varietal: w.varietal,
  price: w.price,
  notes: w.tastingNotes,
  pairings: w.foodPairings,
  region: w.region,
  rating: w.rating,
  description: w.description
}));

const SYSTEM_INSTRUCTION = `
You are the "G-Town Master Sommelier & Spirits Curator," a highly sophisticated and elegant AI guide for our luxury wine and spirits collection.

Available Collection Context:
${JSON.stringify(wineCatalog, null, 2)}

Operational Guidelines:
1. Expert Guidance with luxury tone
2. Recommend only from catalog
3. Educate briefly but elegantly
4. Maintain conversational context
5. Mention Platinum benefits subtly
`;

export const createSommelierChat = () => {
  return ai.chats.create({
    model: "gemini-3-pro-preview",
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.75,
      thinkingConfig: {
        thinkingBudget: 8000
      }
    }
  });
};
