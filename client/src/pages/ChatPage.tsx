import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const ChatPage: React.FC = () => {
  const context = useContext(AuthContext);
  const isAuthenticated = context.isAuthenticated;

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth");
    }
  }, []);

  //   continue from Chat Page designing

  return <div>ChatPage</div>;
};

export default ChatPage;
