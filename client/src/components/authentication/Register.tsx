import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  VStack,
  Button,
  FormHelperText,
} from "@chakra-ui/react";
import { emailError, passwordError } from "../../utils/validators";


const Register: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submit")
  };

  const submitButtonState = () => {
    if (!emailError(email) && !passwordError(password, confirmPassword) && username !== "") {
        return false;
    } else {
        return true;
    }
  }

  return (
    <form onSubmit={(e) => submitHandler(e)}>
      <VStack spacing={5}>
        <FormControl isRequired>
          <FormLabel fontWeight={"bold"}>Email</FormLabel>
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@gmail.com"
            border="2px"
            borderColor="blue.500"
            borderRadius={10}
          />
          <FormHelperText color="red.500">{emailError(email)}</FormHelperText>
        </FormControl>

        <FormControl isRequired>
          <FormLabel fontWeight={"bold"}>Username</FormLabel>
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="username"
            border="2px"
            borderColor="blue.500"
            borderRadius={10}
          />
          {username === "" && (
            <FormHelperText color="red.500">
              Username is required
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

        <FormControl isRequired>
          <FormLabel fontWeight={"bold"}>Confirm Password</FormLabel>
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            border="2px"
            borderColor="blue.500"
            borderRadius={10}
          />
          <FormHelperText color="red.500">
            {passwordError(password, confirmPassword)}
          </FormHelperText>
        </FormControl>

        <Button
          colorScheme="linkedin"
          size="md"
          type="submit"
          isDisabled={submitButtonState()}
          mt={5}
        >
          Sign Up
        </Button>
      </VStack>
    </form>
  );
};

export default Register;
