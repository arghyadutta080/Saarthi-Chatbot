import OpenAI from "openai";
import dotenv from 'dotenv';

dotenv.config()

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const getApiResponse = async (user) => {
    return new Promise(async (resolve, reject) => {
        const completion = await openai.chat.completions.create({
            messages: [{ "role": "user", "content": "Who are you or what's your name or what's your identity or what do you do?" },
                { "role": "assistant", "content": "My name is Saarthi, you can refer me or call me as Saarthi bot. I am a chatbot powered by OpenAI. I am an OpenAI Assistant, this is not my name and I am here to assist you" },
                { "role": "user", "content": user },
            ],
            model: "gpt-3.5-turbo",
        });

        resolve(completion.choices[0].message.content)
    })

}

export { getApiResponse };