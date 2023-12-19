import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { UserProvider } from "./contexts/UserContext";
import { PostProvider } from "./contexts/PostContext";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <UserProvider>
            <PostProvider>
                <App />
            </PostProvider>
        </UserProvider>
    </BrowserRouter>
);
