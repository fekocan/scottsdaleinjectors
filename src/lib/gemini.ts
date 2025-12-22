import { GoogleGenerativeAI } from '@google/generative-ai';

export async function summarizeTherapistContent(content: string, therapistName: string): Promise<string | null> {
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        console.error('GEMINI_API_KEY is not defined');
        return null;
    }

    try {
        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: 'gemini-flash-latest' });

        const prompt = `
      Role: You are an expert local business directory editor.
      Task: Write a 100-150 word, SEO-friendly, and engaging introduction for "${therapistName}" using the raw text below (scraped from their website).
      
      Rules:
      1. Never use "I" or "We". Write in the third person (e.g., "${therapistName} has been serving patients...").
      2. Mention their specialties (e.g., Botox, Fillers, Chiropractic).
      3. Mention awards or years in business if available.
      4. Tone should be professional but warm.
      5. Output only the text, no title or intro sentence.

      Raw Text: 
      "${content.substring(0, 10000)}" 
    `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        return text.trim();
    } catch (error) {
        console.error('Error generating summary with Gemini:', error);
        return null;
    }
}
