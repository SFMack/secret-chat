import React from "react";
import { ChatEngine } from "react-chat-engine";

import ChatFeed from "./components/ChatFeed/ChatFeed";
import LoginForm from "./components/Login/LoginForm";

import "./App.css";

const App = () => {
  // if there's currently no user logged in, render the login form
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID="c81d28d7-6ab4-4f11-9f21-449fa9952a76"
      userName={localStorage.getItem("username")}
      userSecret={localStorage.getItem("password")}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
};

export default App;
