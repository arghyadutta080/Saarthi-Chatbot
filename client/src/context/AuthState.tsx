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
  const [profilePic, setProfilePic] = useState<string>("");

  const checkAuthState = async () => {
    axios
      .get("http://localhost:5000/auth/profile", { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        setUser(response.data.user);
        setIsAuthenticated(response.data.success);
        console.log("Inside context API", user, isAuthenticated);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const getProfilePic = async () => {
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
  }

  useEffect(() => {

    async () => {
      await checkAuthState();
      await getProfilePic();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, user, setUser, checkAuthState, getProfilePic, profilePic, setProfilePic }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
