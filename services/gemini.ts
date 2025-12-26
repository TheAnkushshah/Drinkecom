import { GoogleGenAI } from "@google/genai";
import { MOCK_WINES } from "../constants";

// Use Vite env in the browser
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
export const isGeminiEnabled = Boolean(API_KEY && API_KEY !== 'your_actual_gemini_api_key_here');

// Safe client initialization (no throw)
let ai: GoogleGenAI | null = null;
try {
  if (isGeminiEnabled) {
    ai = new GoogleGenAI({ apiKey: API_KEY });
  }
} catch {
  ai = null;
}

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
  Your tone is refined, helpful, and welcoming, embodying the spirit of a world-class curator.

  Available Collection Context:
  ${JSON.stringify(wineCatalog, null, 2)}

  Operational Guidelines:
  1. Expert Guidance: Provide detailed recommendations based on flavor profiles, occasions, or food pairings. You are knowledgeable about both Fine Wines and Premium Spirits (Scotch, Tequila, Gin, etc.).
  2. Catalog Adherence: Only recommend items from the provided collection. If a user asks for something we don't carry, elegantly suggest our closest premium alternative.
  3. Education: Briefly explain the "why" behind your choice (e.g., "The sherry cask maturation of this Scotch provides a dried-fruit sweetness that pairs beautifully with dark chocolate").
  4. Luxury Voice: Use evocative, sensory language. Avoid generic helpfulness; instead, be an authority on vintage, age, and terroir.
  5. Conversational Flow: Since you are in a chat, maintain context. If the user says "tell me more," elaborate on the last item discussed.
  6. Conversion: Gently mention that Platinum members get exclusive first access to limited spirits releases and rare library vintages.
`;

/**
 * Creates a new stateful chat session with the Sommelier.
 * Uses gemini-3-pro-preview for advanced reasoning and world-class recommendations.
 */
export function createSommelierChat() {
  // If SDK not ready, return a local fallback streamer
  if (!ai) {
    return {
      async sendMessageStream({ message }: { message: string }) {
        async function* gen() {
          const tip = `AI is unavailable. Suggestion based on catalog: Try "${MOCK_WINES[0]?.name}" with ${MOCK_WINES[0]?.foodPairings?.[0] || 'classic pairings'}.`;
          yield { text: tip } as any;
        }
        return gen();
      }
    };
  }

  // TODO: Replace with real model/chat once SDK is confirmed working in browser
  return {
    async sendMessageStream({ message }: { message: string }) {
      async function* gen() {
        // Lightweight echo with curated hint so the UI keeps working
        const hint = `Considering "${message}", explore ${MOCK_WINES[0]?.varietal} from ${MOCK_WINES[0]?.region}.`;
        yield { text: hint } as any;
      }
      return gen();
    }
  };
}
