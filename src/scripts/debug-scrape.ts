
import { scrapeWebsiteContent } from '../lib/scraper';

async function test() {
    console.log('Testing scrape...');
    const url = 'https://theskinshopmedspascottsdale.com/';
    const content = await scrapeWebsiteContent(url);
    if (content) {
        console.log('Success! Content length:', content.length);
        console.log('Preview:', content.substring(0, 200));
    } else {
        console.error('Failed to scrape.');
    }
}

test();
