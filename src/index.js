import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { UserProvider } from "./contexts/UserContext";
// import { PostProvider } from "./contexts/PostContext";
import { SearchUserProvider } from "./contexts/SearchUserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <UserProvider>
      {/* <PostProvider> */}
        <SearchUserProvider>
          <App />
        </SearchUserProvider>
      {/* </PostProvider> */}
    </UserProvider>
  </BrowserRouter>
);
