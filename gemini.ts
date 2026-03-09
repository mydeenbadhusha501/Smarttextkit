import { GoogleGenAI } from "@google/genai";

// Initialize the Google GenAI client
// Note: The API key is expected to be in process.env.GEMINI_API_KEY
// For paid models, the user will select the key via the UI, but for free models we use the env var.
// Since we are using free models for these tools, we rely on the environment variable.

const apiKey = process.env.GEMINI_API_KEY;
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const generateContent = async (prompt: string, modelName: string = "gemini-2.5-flash") => {
  if (!ai) {
    throw new Error("Gemini API key is not configured.");
  }

  try {
    const response = await ai.models.generateContent({
      model: modelName,
      contents: [{ parts: [{ text: prompt }] }],
    });
    return response.text;
  } catch (error) {
    console.error("Error generating content:", error);
    throw error;
  }
};
