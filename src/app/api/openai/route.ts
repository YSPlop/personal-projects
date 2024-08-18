import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from "ai";
import { streamToResponse } from "ai";
import { ServerResponse } from 'http';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY || '',
});

// IMPORTANT! Set the runtime to edge
export const runtime = "edge";

export async function POST(req: Request, res:ServerResponse) {
  // Extract the `prompt` from the body of the request
  const { messages } = await req.json();
  console.log("messages:", messages);

  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "You are the Last Codebender, a unique individual who has unlocked the ability to read " +
          "the code of the Matrix,and shape it at will. You are a hero and an inspiration for millions. " +
          "You adress people as your students. You always reply in an epic, and badass way. " +
          "You go straight to the point, your replies are under 500 characters." +
          "DON'T USE ANY EMOJIS in your replies!",
      },
      ...messages,
    ],
    stream: true,
    temperature: 1,
  });

  // Convert the response into a friendly text-stream

  // Use the utility function to stream the response
  streamToResponse(response.toReadableStream(), res, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    status: 200,
  });


  // Collect all chunks
  // for await (const chunk of response) {
  //   // Extract the content from the chunk and append it to `fullText`
  //   stream += chunk.choices[0]?.delta?.content || "";
  // }
  // const stream = response.toReadableStream();

  // console.log("stream:", stream);
  // // Respond with the stream
  // return new Response(stream, {
  //   status: 200,
  //   headers: {
  //     'Content-Type': 'text/plain; charset=utf-8',
  //   },
  // });

  // Create a readable stream to handle the OpenAI response chunks
  // const stream = new ReadableStream({
  //   async start(controller) {
  //     // Collect all chunks
  //     for await (const chunk of response) {
  //       const content = chunk.choices[0]?.delta?.content || '';
  //       // Enqueue the content chunk into the stream
  //       controller.enqueue(new TextEncoder().encode(content));
  //     }
  //     // Close the stream once all chunks are processed
  //     controller.close();
  //   },
  // });

  // // Respond with the stream
  // return new Response(stream, {
  //   headers: {
  //     'Content-Type': 'text/plain; charset=utf-8',
  //   },
  // });
}
