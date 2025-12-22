
import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function POST(req: Request) {
    try {
        const { name, services, city } = await req.json();

        if (!process.env.GEMINI_API_KEY) {
            return NextResponse.json({ error: "Gemini API Key missing" }, { status: 500 });
        }

        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

        const prompt = `
      You are a professional copywriter for a chiropractic directory.
      Write a profile for an aesthetic nurse injector named "${name}" located in "${city}".
      Their services include: ${services.join(", ")}.

      Please generate a JSON object with exactly these 3 fields:
      1. "short_bio": A concise, 1-2 sentence professional summary (max 150 chars).
      2. "bio": A detailed, welcoming professional biography (approx 150-200 words). Focus on their expertise in ${services[0] || "chiropractic care"} and commitment to patient health in ${city}.
      3. "description": An SEO-optimized meta description for their profile page (max 160 chars).

      Output ONLY valid JSON. Do not include markdown formatting like \`\`\`json.
    `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text().replace(/```json/g, "").replace(/```/g, "").trim();

        try {
            const data = JSON.parse(text);
            return NextResponse.json(data);
        } catch (e) {
            console.error("Failed to parse Gemini response:", text);
            return NextResponse.json({ error: "Failed to parse AI response" }, { status: 500 });
        }

    } catch (error) {
        console.error("Generate Bio Error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
