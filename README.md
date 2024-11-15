# Saarthi Chatbot Web-App

Saarthi is an intelligent chatbot web application powered by the OpenAI API. It provides a seamless user experience with features such as user authentication, chat history storage, and responsiveness.

## Features

- **User Authentication**: Users can sign in using their email and password.
- **Chatbot Interaction**: Users can ask any questions to the chatbot.
- **Chat History**: The chat history is stored, allowing users to view past interactions after Signing In.
- **Responsive Design**: The web app is fully responsive, providing a consistent experience across devices.

## Tech Stacks

<a href="" target="_blank" rel="noreferrer"> <img src="https://skillicons.dev/icons?i=typescript" alt="react" width="37" height="37"/> </a>
<a href="" target="_blank" rel="noreferrer"> <img src="https://skillicons.dev/icons?i=vite" alt="react" width="37" height="37"/> </a>
<a href="" target="_blank" rel="noreferrer"> <img src="https://skillicons.dev/icons?i=react" alt="react" width="37" height="37"/> </a>
<a href="" target="_blank" rel="noreferrer"> <img src="https://skillicons.dev/icons?i=nodejs" alt="react" width="37" height="37"/> </a>
<a href="" target="_blank" rel="noreferrer"> <img src="https://skillicons.dev/icons?i=express" alt="react" width="37" height="37"/> </a>
<a href="" target="_blank" rel="noreferrer"> <img src="https://skillicons.dev/icons?i=mongodb" alt="react" width="37" height="37"/> </a>

## Chatbot working demo video

https://github.com/arghyadutta080/Chatbot/assets/102239340/c6d6ec0f-f5d4-40b7-ae85-3335c6541621

## Workflow of Saarthi Chatbot

<p align='center'>
<img src="./UI/chatbot_workflow.png" alt="Login_page_Desktop" width="800">
<p>

## UI of the Web-App

<p align='center'>
<img src="./UI/sample_1.png" alt="Login_page_Desktop" width="400">
<img src="./UI/sample_4.png" alt="Chat_page_sidebar_Desktop" width="400">
<p>
<p align='center'>
<img src="./UI/sample_5.png" alt="Login_page_Mobile" width="200">
<img src="./UI/sample_7.png" alt="Chat_page_1_Mobile" width="198">
<img src="./UI/sample_6.png" alt="Chat_page_2_Mobile" width="199">
<p>


## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/arghyadutta080/Chatbot.git
    cd Chatbot
    ```
2. **Open the `Chatbot` directory in your Code-Editor (In my case it's VS-Code)**

3. **Open the terminal in your Code-Editor and split it into two terminals**
   
3. **In the first terminal move to the `server` directory:**
   
    ```bash
    cd server
    ```
    
4. **Install dependencies:**
   
    ```bash
    npm install
    ```
    
5. **Create a `.env` file at the root of the `server` directory with the following content:**
   
    ```env
    PORT=5000
    OPENAI_API_KEY=<your-openai-api-key>
    MONGODB_URL=<your-mongodb-url>
    JWT_SECRET=jhihiutvieuwvievnuoigonhooger
    ```

6. **Run the `server`:**

    ```bash
    npm run start
    ```

5. **In the second terminal move to the `client` directory:**

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


## Contributing

Contributions to the project are welcome! To contribute, fork the repository and create a new branch for your changes. Once you have made your changes, create a pull request to merge your branch into the main repository.

