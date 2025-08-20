// API Testing with Authentication
// Replace 'YOUR_API_KEY_HERE' with your actual API key

// const API_KEY = process.env.API_KEY || '';
// Function to handle streaming response
async function streamCompletion() {
    try {
        const response = await fetch('https://api.closerouter.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MGM2NmE1ZC1iNjE1LTRkMTItOWJiMy01M2ZjYTFkZmRhODEiLCJlbWFpbCI6IndhcnBjaGFyb25AZ21haWwuY29tIiwia2V5SWQiOiI1MmE2OTk4MS0yMjc1LTQ3ZDctODI1Mi1iMWFlYTVmZTkxNDQiLCJ0eXBlIjoiYXBpX2tleSIsImlhdCI6MTc1NTU0Mzk0Nn0.Pc_vLJWAps73VT8xXzOh17ZCHQN8zHahUKaQU1E-iBE'
            },
            body: JSON.stringify({
                messages: [
                    { role: 'system', content: 'You are a helpful assistant.' },
                    { role: 'user', content: 'Hello! How can you assist me today?' }
                ],
                model: 'claude-3-5-sonnet-20241022', // Supported models: gpt-4o, claude-3-5-sonnet-20241022, deepseek-r1, etc.
                stream: true,
                temperature: 0.7, // Controls randomness (0-2)
                max_tokens: 4000 // Maximum tokens to generate
            })
        });

        // Check if the request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Get a reader from the response body stream
        const reader = response.body.getReader();
        const decoder = new TextDecoder('utf-8');
        let result = '';

        // Read the stream
        while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            // Decode the chunk and process it
            const chunk = decoder.decode(value, { stream: true });
            const lines = chunk.split('\n');

            for (const line of lines) {
                if (line.startsWith('data:') && line.trim() !== 'data: [DONE]') {
                    try {
                        const data = JSON.parse(line.slice(5));
                        const content = data.choices[0]?.delta?.content;
                        if (content) {
                            result += content;
                            console.log(content, { end: '' }); // Simulate streaming output
                        }
                    } catch (e) {
                        console.error('Error parsing JSON:', e);
                    }
                } else if (line.trim() === 'data: [DONE]') {
                    console.log('\nStream complete');
                }
            }
        }

        return result;
    } catch (error) {
        console.error('Error:', error);
    }
}

