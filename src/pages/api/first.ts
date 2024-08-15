import openai from "../utils/openai";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const chatCompletion = await openai.chat.completions.create({
        messages: [
            { 
                role: "user", 
                content: "What is 2 + 2" 
            }
        ],
        model: "gpt-4o-mini",
    });
    res.status(200).json(chatCompletion.choices[0].message.content);
}
