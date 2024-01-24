import React from "react";
import { Box, Button, Center, Flex, HStack,VStack } from "@chakra-ui/react";
import ChatList from "../components/home/ChatList";
import { FaPowerOff } from "react-icons/fa6";

const ChatPage: React.FC = () => {

  return (
    <VStack
      w={"100%"}
      background={
        "linear-gradient(90deg, rgba(233,29,166,1) 0%, rgba(32,118,196,1) 100%)"
      }
      py={{ base: 5, lg: 0 }}
    >
      <HStack
        fontSize={30}
        fontWeight={"bold"}
        color={"#7F48DF"}
        overflow={"hidden"}
        position={"fixed"}
        top={0}
        w={"full"}
        justifyContent={"center"}
        background={
          "linear-gradient(90deg, rgba(233,29,166,1) 0%, rgba(32,118,196,1) 100%)"
        }
      >
        <Flex
          bgColor={"white"}
          w={"90%"}
          h={"fit-content"}
          justifyContent={"space-between"}
          alignItems={"center"}
          px={{ lg: 20 }}
          py={{ lg: 3 }}
          marginX={5}
          marginY={3}
          borderRadius={"full"}
        >
          <Box>Saarthi 🤖</Box>
          <Button
            w={"fit-content"}
            colorScheme="pink"
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Center marginRight={2}>Logout</Center> <FaPowerOff />
            {/* need to work on Logout next */}
          </Button>
        </Flex>
      </HStack>

      <ChatList />
    </VStack>
  );
};

export default ChatPage;
