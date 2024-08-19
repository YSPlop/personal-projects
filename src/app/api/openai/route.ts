import OpenAI from "openai";

const openai = new OpenAI();

export async function POST(req: Request) {
  const { messages } = await req.json();
  const response = await openai.chat.completions.create({
    messages: [
        {
          "role": "system", 
          "content": "You are a helpful assistant."
        },
        ...messages
      ],
    model: "gpt-4o-mini",
  });

  console.log(new Response(response.choices[0].message.content));
  return new Response(response.choices[0].message.content);
}