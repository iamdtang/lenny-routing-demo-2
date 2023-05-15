import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  redirect,
  RouterProvider,
} from "react-router-dom";
import Index from "./routes/Index";
import Root from "./routes/Root";
import "bootstrap/dist/css/bootstrap.css";
import { deleteHobby, fetchHobbies, fetchHobby, saveHobby } from "./api";
import EditHobby from "./routes/EditHobby";
import CreateHobby from "./routes/CreateHobby";

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
        async action({ request }) {
          const formData = await request.formData();
          const id = formData.get("hobbyId");

          await deleteHobby(id);
          return redirect("/");
        },
      },
      {
        path: "/hobbies/new",
        element: <CreateHobby />,
        // action({ request }) {
        //   return request.formData().then((formData) => {
        //     return saveHobby({
        //       name: formData.get("name"),
        //       years: formData.get("years"),
        //     }).then(() => {
        //       return redirect("/");
        //     });
        //   });
        // },
        async action({ request }) {
          const formData = await request.formData();
          await saveHobby({
            name: formData.get("name"),
            years: formData.get("years"),
          });

          return redirect("/");
        },
      },
      {
        path: "/hobbies/:id",
        element: <EditHobby />,
        loader({ params }) {
          return fetchHobby(params.id);
        },
        async action({ request }) {
          const formData = await request.formData();
          await saveHobby({
            id: formData.get("hobbyId"),
            name: formData.get("name"),
            years: formData.get("years"),
          });

          return redirect("/");
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
