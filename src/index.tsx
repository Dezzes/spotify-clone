import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import React from "react";
import App from "./App";
import store from "./redux/store";
import SongDetails from "./components/SongDetails";
import Discover from "./components/Discover";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Discover />,
    children: [
      {
        path: "songs/:songId",
        element: <SongDetails />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
