

import * as dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const apiKey = process.env.GEMINI_API_KEY;

if (!apiKey) {
    console.error('GEMINI_API_KEY not found');
    process.exit(1);
}

async function listModels() {

    // Access the model manager mostly via getGenerativeModel, but listing isn't direct in older SDKs easily.
    // Actually SDK doesn't have listModels on the main class easily in some versions.
    // Let's try a direct fetch if SDK doesn't expose it nicely, or assume the SDK has it.
    // Wait, the error message said: "Call ListModels to see the list of available models"

    // We can't easily list models via this SDK version's public surface often.
    // Let's try to just hit the REST API directly for listing.
    const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log('Available Models:', JSON.stringify(data, null, 2));
    } catch (e) {
        console.error(e);
    }
}

listModels();
