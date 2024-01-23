import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext.ts";
import axios from "axios";

interface AuthStateProps {
  children: React.ReactNode;
}

interface UserInfo {
  userId: string;
  username: string;
  email: string;
}

const AuthState: React.FC<AuthStateProps> = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<UserInfo | null>(null);

  const checkAuthState = async () => {
    axios
      .get("http://localhost:5000/auth/profile", { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        setUser(response.data.user);
        setIsAuthenticated(response.data.success);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  useEffect(() => {
    checkAuthState();
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, user, setUser }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
