import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Button,
  FormHelperText,
} from "@chakra-ui/react";


const Login: React.FC = () => {
  const [userId, setUserId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit");
  };

  const submitButtonState = () => {
    if (
      userId !== "" && password !== ""
    ) {
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
