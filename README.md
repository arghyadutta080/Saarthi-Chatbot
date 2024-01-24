# Saarthi Chatbot Web-App

Saarthi is an intelligent chatbot web application powered by the OpenAI API. It provides a seamless user experience with features such as user authentication, chat history storage, and responsiveness.

## Features

- **User Authentication**: Users can sign in using their email and password.
- **Chatbot Interaction**: Users can ask any questions to the chatbot.
- **Chat History**: The chat history is stored, allowing users to view past interactions even after logging out.
- **Responsive Design**: The web app is fully responsive, providing a consistent experience across devices.

## Tech Stacks

<a href="" target="_blank" rel="noreferrer"> <img src="https://skillicons.dev/icons?i=typescript" alt="react" width="37" height="37"/> </a>
<a href="" target="_blank" rel="noreferrer"> <img src="https://skillicons.dev/icons?i=vite" alt="react" width="37" height="37"/> </a>
<a href="" target="_blank" rel="noreferrer"> <img src="https://skillicons.dev/icons?i=react" alt="react" width="37" height="37"/> </a>
<a href="" target="_blank" rel="noreferrer"> <img src="https://skillicons.dev/icons?i=nodejs" alt="react" width="37" height="37"/> </a>
<a href="" target="_blank" rel="noreferrer"> <img src="https://skillicons.dev/icons?i=express" alt="react" width="37" height="37"/> </a>
<a href="" target="_blank" rel="noreferrer"> <img src="https://skillicons.dev/icons?i=mongodb" alt="react" width="37" height="37"/> </a>

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    https://github.com/arghyadutta080/Chatbo
    cd chatbot
    ```

2. **Split the terminal**
   
3. **In first terminal move to the server directory:**
   
    ```bash
    cd server
    ```
    
4. **Install dependencies:**
   
    ```bash
    npm install
    ```
    
5. **Create a `.env` file at the root of `server` directory with the following content:**
   
    ```env
    PORT=5000
    OPENAI_API_KEY=your-openai-api-key
    MONGODB_URL=mongodb+srv://arghyadutta080:BLg3fLjlakhRjn3q@cluster0.o6nftlo.mongodb.net/
    JWT_SECRET=jhihiutvieuwvievnuoigonhooger
    ```

6. **Run the `server`:**

    ```bash
    npm run start
    ```

5. **In second terminal move to the `client` directory:**

    ```bash
    cd client
    ```

5. **Install dependencies:**

    ```bash
    npm install
    ```

5. **Run the `client`:**

    ```bash
    npm run dev
    ```

6. **Now, You will be redirected to [localhost:3000](http://localhost:3000)**
