

const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
        { role: "system", content: "You are a helpful assistant." },
        {
            role: "user",
            content: "GIVE ME 4 RANDOM WORDS.",
        },
    ],
});

console.log(completion.choices[0].message);