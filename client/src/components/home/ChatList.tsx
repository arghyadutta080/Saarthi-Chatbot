import { Box, Flex, HStack, Image, Input, VStack, useToast } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import ChatItem from "./ChatItem";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IoSendSharp } from "react-icons/io5";

export interface ChatProps {
  content: string;
  createdAt?: string | null;
  receiverId?: string | null;
  updatedAt?: string | null;
  __v?: number | null;
  _id?: string | null;
  replyOf: {
    content: string;
    createdAt?: string | null;
    senderId?: string | null;
    updatedAt?: string | null;
    __v?: number | null;
    _id?: string | null;
  };
}

const ChatList: React.FC = () => {
  const context = useContext(AuthContext);
  const { user, isAuthenticated } = context;

  const [question, setQuestion] = useState<string>("");
  const [chat, setChat] = useState<ChatProps[]>([]);
  const [displayMsg, setDisplayMsg] = useState<boolean>(false);

  const toast = useToast();

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
    }

  const getChat = () => {
    axios
      .get("http://localhost:5000/api/getchat", { withCredentials: true })
      .then((response) => {
        setChat(response.data.chat);
      })
      .then(() => {
        scrollToBottom();
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const getAnswer = () => {
    console.log("Inside function");
    setDisplayMsg(true); 
    scrollToBottom();
    axios
      .post(
        "http://localhost:5000/api/chat",
        { userMsg: question },
        { withCredentials: true }
      )
      .then((response) => {
        console.log(response)
        setDisplayMsg(false);
        setChat([...chat, {content: response.data.response, replyOf: { content: question}}])
        scrollToBottom();
        setQuestion(""); 
      })
      .catch((error) => {
        console.log(error.response.data);
        toast({
          title: "Something is Wrong!",
          description: error.response.data.message,
          status: "error",
          position: "top",
          duration: 2000,
          isClosable: true,
        });
      });
      
  };


  const navigate = useNavigate();

  useEffect(() => {
    console.log(isAuthenticated); // Always call a state deciding variable inside a child component of a Page
    if (!isAuthenticated) {
      // to avoid unnecessary navigations
      navigate("/auth");
    }
    getChat();
  }, [isAuthenticated]);

  

  const custom_ans = `Hey ${user?.username} this is your Saarathi 👋 \nI am a Chatbot powered by OpenAI. Tell me how can ihelp you?`;

  return (
    <VStack
      w={{ base: "95%", lg: "85%" }}
      spacing={3}
      py={5}
      mt={{ base: 10, lg: 20 }}
    >
      <Flex maxW={"80%"} alignSelf={"flex-start"} direction={"row"}>
        <Image
          borderRadius="full"
          boxSize={{ base: "40px", lg: "50px" }}
          src="https://www.shutterstock.com/image-vector/cute-chat-bot-smiling-flat-600nw-2175518705.jpg"
        />{" "}
        <Box
          bgColor={"white"}
          px={5}
          py={5}
          borderRadius={8}
          fontSize={"small"}
          fontWeight={"500"}
          marginLeft={2}
          whiteSpace={"pre-line"}
        >
          {custom_ans}
        </Box>
      </Flex>
      <VStack mb={{ base: 10, lg: 24 }}>
        {chat.map((element, index) => {
          return <ChatItem key={index} chat={element} />;
        })}
        {displayMsg ? (
          <Flex w={"100%"} direction={"column"}>
            {/* User Message */}
            <Flex maxW={"80%"} alignSelf={"flex-end"} direction={"row"} my={3}>
              <Box
                bgColor={"white"}
                px={5}
                py={3}
                borderRadius={8}
                fontSize={"small"}
                fontWeight={"500"}
                marginRight={0}
                h={"fit-content"}
                whiteSpace={"pre-line"}
                alignSelf={"flex-end"}
              >
                {question}
              </Box>
              <Image
                borderRadius="full"
                boxSize={{ base: "40px", lg: "50px" }}
                src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
              />{" "}
            </Flex>

            {/* Bot reply */}
            <Flex
              maxW={"80%"}
              alignSelf={"flex-start"}
              direction={"row"}
              alignItems={"center"}
              
            >
              <Image
                borderRadius="full"
                boxSize={{ base: "30px", lg: "50px" }}
                src="https://www.shutterstock.com/image-vector/cute-chat-bot-smiling-flat-600nw-2175518705.jpg"
              />{" "}
              <Image
                borderRadius="3xl"
                marginLeft={2}
                h={10}
                w={20}
                src="https://media.tenor.com/NDL0Cu0TAQoAAAAM/typing-loading.gif"
              />{" "}
            </Flex>
          </Flex>
        ) : (
          ""
        )}
      </VStack>
      <HStack
        w={"90%"}
        px={{ lg: 8 }}
        py={{ lg: 3 }}
        overflow={"hidden"}
        position={"fixed"}
        bottom={0}
        bgColor={"#FDF6A2"}
        borderTopRadius={20}
      >
        <Image
          borderRadius="full"
          boxSize="50px"
          src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
        />{" "}
        <Input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask me anything ..."
          border="2px"
          borderColor="blue.500"
          borderRadius={10}
        />
        <IoSendSharp size={30} onClick={() => getAnswer()} />
      </HStack>
    </VStack>
  );
};

export default ChatList;
