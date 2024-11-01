import * as React from "react";
import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root, { 
  loader as rootLoader,
  action as rootAction,
  action,
} from "./routes/root";
import ErrorPage from "./error-page";
import Contact, {loader as contactLoader} from "./routes/contact";
import EditContact, {action as editAction} from "./routes/edit";
import {action as destroyAction} from "./routes/destroy";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: 'contacts/:contactId',
        element: <Contact></Contact>,
        loader: contactLoader,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact></EditContact>,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);