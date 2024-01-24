import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { ChatProps } from "./ChatList";
import chatbot from "../../assets/chatbot.png"

interface Props {
  chat: ChatProps;
  profilePic: string
}

const ChatItem: React.FC<Props> = (props) => {
  return (
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
          {props.chat.replyOf.content}
        </Box>
        <Image
          borderRadius="full"
          boxSize={{ base: "40px", lg: "45px" }}
          src={
            props.profilePic ||
            "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
          }
        />{" "}
      </Flex>

      {/* Bot reply */}
      <Flex
        maxW={{ base: "75%", md: "80%" }}
        alignSelf={"flex-start"}
        direction={"row"}
        mb={1}
      >
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
          alignSelf={"flex-end"}
        >
          {props.chat?.content}
        </Box>
      </Flex>
    </Flex>
  );
};

export default ChatItem;
