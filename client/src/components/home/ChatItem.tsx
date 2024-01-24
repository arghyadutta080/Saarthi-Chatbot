import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { ChatProps } from "./ChatList";

interface Props {
  chat: ChatProps;
}

const ChatItem: React.FC<Props> = (props) => {
  return (
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
          marginRight={2}
          h={"fit-content"}
          whiteSpace={"pre-line"}
          alignSelf={"flex-end"}
        >
          {props.chat.replyOf.content}
        </Box>
        <Image
          borderRadius="full"
          boxSize={{ base: "40px", lg: "50px" }}
          src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
        />{" "}
      </Flex>

      {/* Bot reply */}
      <Flex maxW={"80%"} alignSelf={"flex-start"} direction={"row"}>
        <Image
          borderRadius="full"
          boxSize={{ base: "35px", lg: "50px" }}
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
          alignSelf={"flex-end"}
        >
          {props.chat?.content}
        </Box>
      </Flex>
    </Flex>
  );
};

export default ChatItem;
