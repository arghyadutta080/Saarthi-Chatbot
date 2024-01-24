import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  VStack,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Avatar,
  useToast,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ChatList from "../components/home/ChatList";
import { FaPowerOff } from "react-icons/fa6";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import chatbot from "../assets/chatbot.png"

const ChatPage: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const context = useContext(AuthContext);
  const { user, checkAuthState, setIsAuthenticated } = context;

  const [profilePic, setProfilePic] = useState<string>("");

  const navigate = useNavigate();
  const toast = useToast();

  const logout = () => {
    axios
      .get("http://localhost:5000/auth/logout", { withCredentials: true })
      .then(async (response) => {
        await checkAuthState();
        setIsAuthenticated(false);
        navigate("/auth");
        toast({
          title: "Logout Successful",
          description: response.data.message,
          status: "success",
          position: "top",
          duration: 2000,
          isClosable: true,
        });
      })
      .catch(() => {
        toast({
          title: "Logging Out failed",
          description: "Some is wrong. Try again later!",
          status: "error",
          position: "top",
          duration: 2000,
          isClosable: true,
        });
      });
  };

  useEffect(() => {
    console.log(user)
    axios
      .post(
        "https://avatarapi.com/v2/api.aspx",
        {
          username: "Arghya",
          password: "Arghya#19102003",
          email: user?.email,
        },
        {
          headers: {
            "Content-Type": "text/plain",
          },
        }
      )
      .then((response) => {
        setProfilePic(response.data.Image);
        console.log(response.data.Image);
      })
      .catch((error) => {
        console.log(error.response);
        setProfilePic(
          "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
        );
      });
  }, []);

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
        color={"#1D3FFE"}
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
          <HStack>
            <Box>Saarthi</Box>
            <Image
              borderRadius="full"
              boxSize={{ base: "40px", lg: "55px" }}
              src={chatbot}
            />{" "}
          </HStack>
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
              <DrawerHeader
                borderBottomWidth="1px"
                bg={"#FEF36C"}
                alignItems={"center"}
              >
                <Box>User Info</Box>
                <DrawerCloseButton onClick={onClose} />
              </DrawerHeader>
              <DrawerBody bg={"#FDF6A2"}>
                <VStack h={"85vh"} mt={5}>
                  <Avatar
                    size="xl"
                    name={user?.username || "username"}
                    src={
                      profilePic ||
                      "https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
                    }
                  />{" "}
                  <Box fontWeight={500} fontSize={"2xl"}>
                    {user?.username}
                  </Box>
                  <Box fontWeight={500}>{user?.email}</Box>
                  <Button
                    colorScheme="red"
                    px={3}
                    py={1}
                    borderRadius={"3xl"}
                    alignItems={"center"}
                    justifySelf={"flex-end"}
                    justifyContent={"center"}
                    mt={3}
                    onClick={() => logout()}
                  >
                    <Center fontSize={"large"} fontWeight={500} marginRight={2}>
                      Logout
                    </Center>
                    <FaPowerOff color="white" size={20} />
                  </Button>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Flex>
      </HStack>

      {/* Shows the chat */}
      <ChatList profilePic={profilePic} />
    </VStack>
  );
};

export default ChatPage;
