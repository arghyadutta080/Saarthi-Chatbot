import React, { useContext, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Button,
  FormHelperText,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const Login: React.FC = () => {
  const [userId, setUserId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const toast = useToast();
  const navigate = useNavigate();

  const context = useContext(AuthContext);
  const { setIsAuthenticated, checkAuthState } = context;

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:5000/auth/login",
        { username: userId, password },
        { withCredentials: true }
      )
      .then(async (response) => {
        toast({
          title: "Authentication Successful",
          description: response.data.message,
          status: "success",
          position: "top",
          duration: 2000,
          isClosable: true,
        });
        await checkAuthState(); // Always run a chechAuth() function after successfully Logged In
        setIsAuthenticated(true)
        navigate("/");
      })
      .catch((error) => {
        toast({
          title: "Login failed!",
          description: error.response.data.message,
          status: "error",
          position: "top",
          duration: 2000,
          isClosable: true,
        });
      });
  };

  const submitButtonState = () => {
    if (userId !== "" && password !== "") {
      return false;
    } else {
      return true;
    }
  };

  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <VStack spacing={5}>
        <FormControl isRequired>
          <FormLabel fontWeight={"bold"}>User ID</FormLabel>
          <Input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            placeholder="Email / Username"
            border="2px"
            borderColor="blue.500"
            borderRadius={10}
          />
          {userId === "" && (
            <FormHelperText color="red.500">
              This field is required!
            </FormHelperText>
          )}
        </FormControl>

        <FormControl isRequired>
          <FormLabel fontWeight={"bold"}>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            border="2px"
            borderColor="blue.500"
            borderRadius={10}
          />
          {password === "" && (
            <FormHelperText color="red.500">
              This field is required!
            </FormHelperText>
          )}
        </FormControl>

        <Button
          colorScheme="linkedin"
          size="md"
          type="submit"
          isDisabled={submitButtonState()}
          mt={5}
        >
          Login
        </Button>
      </VStack>
    </form>
  );
};

export default Login;
