
const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config({ path: '.env.local' });

async function main() {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    // Note: ListModels might not be directly exposed easily in all SDK versions or requires admin scope?
    // Actually usually it is not simple to list via SDK in some versions.
    // Let's try to just use 'gemini-pro' which SHOULD work if the key is correct.
    // BUT the error says "models/gemini-1.0-pro is not found". 

    // Let's try 'gemini-1.5-flash-latest' or just 'gemini-pro' again but maybe the key has no access?
    // Actually, the error `[404 Not Found] models/gemini-pro is not found` is very specific.

    // Let's try to just run a simple generateContent with "gemini-1.5-flash" again.
    // Maybe the issue was temporary? Or the key scopes?
    // Let's try to print the error more fully.
}

// Instead of listing, let's try a script that tries multiple model names.
const models = ["gemini-1.5-flash", "gemini-pro", "gemini-1.0-pro-latest", "gemini-1.5-pro"];

async function testModels() {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

    for (const m of models) {
        console.log(`Testing model: ${m}`);
        try {
            const model = genAI.getGenerativeModel({ model: m });
            const result = await model.generateContent("Hello");
            console.log(`SUCCESS with ${m}`);
            return;
        } catch (e) {
            console.log(`FAILED ${m}:`, e);
        }
    }
}

testModels();
