import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";
import Index from "./routes/Index";
import Root from "./routes/Root";
import "bootstrap/dist/css/bootstrap.css";
import { deleteHobby, fetchHobbies, fetchHobby, saveHobby } from "./api";
import HobbyForm from "./routes/HobbyForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Index />,
        loader() {
          return fetchHobbies();
        },
        action({ request }) {
          return request.formData().then((formData) => {
            return deleteHobby(formData.get("id")).then(() => {
              return redirect("/");
            });
          });
        },
      },
      {
        path: "/hobbies/new",
        element: <HobbyForm />,
        action({ request }) {
          return request.formData().then((formData) => {
            return saveHobby({
              name: formData.get("name"),
              years: Number(formData.get("years")),
            }).then(() => {
              return redirect("/");
            });
          });
        },
      },
      {
        path: "/hobbies/:id",
        element: <HobbyForm />,
        loader({ params }) {
          return fetchHobby(params.id);
        },
        action({ request }) {
          return request.formData().then((formData) => {
            return saveHobby({
              id: formData.get("id"),
              name: formData.get("name"),
              years: Number(formData.get("years")),
            }).then(() => {
              return redirect("/");
            });
          });
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
