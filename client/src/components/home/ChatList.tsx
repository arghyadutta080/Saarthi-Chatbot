import {
  Box,
  Circle,
  Flex,
  HStack,
  Icon,
  Image,
  Input,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import ChatItem from "./ChatItem";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { IoSendSharp } from "react-icons/io5";
import chatbot from "../../assets/chatbot.png"

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

interface Props {
  profilePic: string
}

const ChatList: React.FC<Props> = ({profilePic}) => {
  const context = useContext(AuthContext);
  const { user, isAuthenticated } = context;

  const [question, setQuestion] = useState<string>("");
  const [chat, setChat] = useState<ChatProps[]>([]);
  const [displayMsg, setDisplayMsg] = useState<boolean>(false);

  const toast = useToast();

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

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
    if(question !== ""){
      setDisplayMsg(true);
      scrollToBottom();
    }
    axios
      .post(
        "http://localhost:5000/api/chat",
        { userMsg: question },
        { withCredentials: true }
      )
      .then((response) => {
        setQuestion("");
        console.log(response);
        setDisplayMsg(false);
        setChat([
          ...chat,
          { content: response.data.response, replyOf: { content: question } },
        ]);
        scrollToBottom();
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
    console.log(isAuthenticated);   // Always call a state deciding variable inside a child component of a Page
    if (!isAuthenticated) {         // to avoid unnecessary navigations
      navigate("/auth");
    }
    getChat();
  }, [isAuthenticated]);

  const custom_ans = `Hey ${user?.username} this is your Saarathi 👋 \nI am a Chatbot powered by OpenAI. Tell me how can I help you?`;

  return (
    <VStack
      minH={"90vh"}
      w={{ base: "95%", lg: "85%" }}
      spacing={3}
      py={5}
      mt={{ base: 10, lg: 20 }}
    >
      {/* welcome message by bot */}
      <Flex maxW={"80%"} alignSelf={"flex-start"} direction={"row"}>
        <Image
          borderRadius="full"
          boxSize={{ base: "40px", lg: "55px" }}
          src={chatbot}
        />{" "}
        <Box
          bgColor={"#FDF6A2"}
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
      <VStack mb={{ base: 10, lg: 24 }} w={"100%"}>
        {/* get all past chats */}
        {chat.map((element, index) => {
          return (
            <ChatItem key={index} chat={element} profilePic={profilePic} />
          );
        })}

        {displayMsg ? (
          <Flex w={"100%"} direction={"column"}>
            {/* User Message */}
            <Flex
              maxW={{ base: "75%", md: "80%" }}
              alignSelf={"flex-end"}
              direction={"row"}
              mb={3}
            >
              <Box
                bgColor={"#D0FD63"}
                px={5}
                py={3}
                borderRadius={"xl"}
                fontSize={"small"}
                fontWeight={"500"}
                marginRight={2}
                h={"fit-content"}
                whiteSpace={"pre-line"}
                alignSelf={"flex-end"}
              >
                {question}
              </Box>
              <Image
                borderRadius="full"
                boxSize={{ base: "40px", lg: "50px" }}
                src={
                  profilePic ||
                  "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                }
              />{" "}
            </Flex>

            {/* Bot reply */}
            <Flex
              maxW={{ base: "75%", md: "80%" }}
              alignSelf={"flex-start"}
              direction={"row"}
              alignItems={"center"}
            >
              <Image
                borderRadius="full"
                boxSize={{ base: "40px", lg: "55px" }}
                src={chatbot}
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
        w={"100%"}
        px={{ base: 2, lg: 8 }}
        py={{ base: 3 }}
        overflow={"hidden"}
        position={"fixed"}
        bottom={0}
        background={
          "linear-gradient(90deg, rgba(233,29,166,1) 0%, rgba(32,118,196,1) 100%)"
        }
        justifyContent={"center"}
      >
        <Flex
          w={{ base: "%", lg: "90%" }}
          bgColor={"white"}
          borderRadius={"full"}
          alignItems={"center"}
        >
          <Image
            borderRadius="full"
            boxSize={{ base: "35px", lg: "35px" }}
            src={
              profilePic ||
              "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
            }
            ml={{ base: 2, md: 3 }}
            my={{ base: 1, md: 2 }}
          />{" "}
          <Input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Ask me anything ..."
            border="2px"
            borderColor="white"
            borderRadius={"full"}
            focusBorderColor="white"
            fontWeight={500}
            marginRight={1}
          />
        </Flex>
        <Circle
          bgColor={"white"}
          size={{ base: 10, lg: 50 }}
          onClick={() => getAnswer()}
        >
          <Icon
            as={IoSendSharp}
            boxSize={{ base: 5, lg: 8 }}
            color={"blueviolet"}
          />
        </Circle>
      </HStack>
    </VStack>
  );
};

export default ChatList;
