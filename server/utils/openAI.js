import OpenAI from "openai";
import dotenv from 'dotenv';

dotenv.config()

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const getApiResponse = async (user) => {
    return new Promise(async (resolve, reject) => {
        const completion = await openai.chat.completions.create({
            messages: [ 
                { "role": "user", "content": user },
            ],
            model: "gpt-3.5-turbo",
        });

        resolve(completion.choices[0].message.content)
    })

}

export { getApiResponse };