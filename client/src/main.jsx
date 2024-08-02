import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import HomePage from "./routes/homepage/HomePage.jsx";
import DashBoardPage from "./routes/dashboardPage/DashBoardPage.jsx";
import ChatPage from "./routes/chatpage/ChatPage.jsx";
import RootLayout from "./layouts/rootLayout/RootLayout.jsx";
import DashBoardLayout from "./layouts/dashboardLayout/DashboardLayout.jsx";
import SignInPage from "./routes/signInPage/SignInPage.jsx";
import SignUpPage from "./routes/signUpPage/SignUpPage.jsx";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/sign-in/*", element: <SignInPage /> },
      { path: "/sign-up/*", element: <SignUpPage /> },

      {
        element: <DashBoardLayout />,
        children: [
          { path: "/dashboard", element: <DashBoardPage /> },
          { path: "/dashboard/chats/:id", element: <ChatPage /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
