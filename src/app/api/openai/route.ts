import OpenAI from "openai";
import 'dotenv/config';

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Function to handle OpenAI API call
export async function handleOpenAIRequest(messages: any[]) {
  const response = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are a knowledgeable bot that helps people with their coding problems. You are helpful, creative, and very friendly."
      },
      ...messages,
    ],
    model: "gpt-4o-mini",
  });

  return response.choices[0].message.content;
}

// POST handler
export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    
    if (!messages || !Array.isArray(messages)) {
      return new Response(JSON.stringify({ error: "Invalid messages format" }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const result = await handleOpenAIRequest(messages);

    // Return the result as a JSON response
    return new Response(JSON.stringify({ result }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error("Error processing OpenAI request:", error);
    
    // Handle errors and return a 500 response
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
