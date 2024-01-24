import React, { useContext, useEffect, useRef } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  VStack,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ChatList from "../components/home/ChatList";
import { FaPowerOff } from "react-icons/fa6";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const ChatPage: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const context = useContext(AuthContext);
  const { user } = context;

  

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
          w={{ base: "95%", lg: "90%" }}
          h={"fit-content"}
          justifyContent={"space-between"}
          alignItems={"center"}
          px={{ base: 3, lg: 10 }}
          py={{ base: 1, lg: 2 }}
          marginX={{ lg: 5 }}
          marginY={3}
          borderRadius={"full"}
        >
          <Box>Saarthi 🤖</Box>
          <Button
            h={{ base: 10 }}
            w={{ base: 10, lg: "fit-content" }}
            colorScheme="pink"
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            onClick={onOpen}
            borderRadius={{ base: "full", lg: "lg" }}
          >
            <HamburgerIcon boxSize={6} />
          </Button>

          <Drawer placement={"right"} onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
              <DrawerBody>
                <p>{user?.username}</p>
                <Center marginRight={2}>Logout</Center>
                <FaPowerOff />
                <p>{user?.email}</p>
                <p>Some contents...</p>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </HStack>

      {/* Shows the chat */}
      <ChatList />

    </VStack>
  );
};

export default ChatPage;
