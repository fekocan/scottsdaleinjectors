import * as cheerio from 'cheerio';
import { exec } from 'child_process';


const execAsync = (command: string) => {
    return new Promise<{ stdout: string; stderr: string }>((resolve, reject) => {
        exec(command, { maxBuffer: 1024 * 1024 * 10 }, (error, stdout, stderr) => {
            if (error) {
                reject(error);
                return;
            }
            resolve({ stdout, stderr });
        });
    });
};

export async function scrapeWebsiteContent(url: string): Promise<string | null> {
    let html = '';

    try {
        // 1. Try Fetch first
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.9',
            },
            next: { revalidate: 3600 }
        });

        if (response.ok) {
            html = await response.text();
        } else {
            console.warn(`Fetch failed for ${url} (${response.status}), trying curl fallback...`);
            throw new Error(`Fetch failed: ${response.status}`);
        }

    } catch (error) {
        // 2. Fallback to CURL
        try {
            // Wait 2 seconds to avoid rapid-retry blocks if fetch triggered a firewall
            await new Promise(r => setTimeout(r, 2000));

            // Simplified curl command matching the successful manual test
            const cmd = `curl -L -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" "${url}"`;
            const { stdout } = await execAsync(cmd);
            html = stdout;
        } catch (curlError: any) {
            console.error(`CURL failed for ${url}:`, curlError.message);
            return null;
        }
    }

    if (!html) return null;

    try {
        // 3. Parse with Cheerio
        const $ = cheerio.load(html);

        // 4. Remove script, style, and navigation elements
        $('script, style, nav, footer, header, meta, link, svg, noscript, asides').remove();

        // 5. Extract text
        let content = '';
        const aboutSection = $('#about, .about, section[id*="about"], div[class*="about"]').text();
        const mainContent = $('main, article, .content, #content').text();

        if (aboutSection && aboutSection.length > 200) {
            content = aboutSection;
        } else if (mainContent && mainContent.length > 200) {
            content = mainContent;
        } else {
            content = $('body').text();
        }

        const cleanText = content
            .replace(/\s+/g, ' ')
            .replace(/\n+/g, ' ')
            .trim();

        return cleanText;
    } catch (parseError) {
        console.error(`Error parsing ${url}:`, parseError);
        return null;
    }
}
